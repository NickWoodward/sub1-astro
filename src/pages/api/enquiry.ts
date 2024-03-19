export const prerender = false;

import type { APIRoute } from "astro";
import { EnquirySchema } from "../../models/Models";
import { sendEmail } from "../../utils/sendGrid";

const TURNSTILE_VERIFY_ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const TURNSTILE_KEY = import.meta.env.TURNSTILE_TEST_KEY;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { 
    turnstile: token, 
    fName,
    sName,
    phone,
    email,
    message,
    password: honeypot
  } = body;
  
  console.log(body);

  if(honeypot) {
    return new Response(null, {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  // Validate Form
  if(!body || EnquirySchema.safeParse({fName, sName, phone, email, message}).success !== true) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    })
  };
  
  try {
    // Validate Token
    const res = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${encodeURIComponent(TURNSTILE_KEY)}&response=${encodeURIComponent(token)}`,
    });

    const data = await res.json();

    // Token Failure
    if(!data.success) {
      return new Response(JSON.stringify(data), {
        status: 400,
        headers: {
          'content-type': 'application/json'
        }
      })
    }

    // Token Success
    const response = await sendEmail(`ENQUIRY FROM: ${fName} ${sName}`, message, email);

    console.log('response', response);
    console.log("sent");
    return new Response(null, {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })
  } catch(e) {
    console.log('error', e);
    return new Response(JSON.stringify('Request failed'), {
      status: 500,
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  

}