import sgMail from '@sendgrid/mail';

export const sendEmail = (subject: string, message: string, author: string) => {
  sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

  const msg = {
    to: import.meta.env.TARGET_EMAIL,
    from: import.meta.env.MY_EMAIL,
    subject: subject,
    replyTo: author,
    html: `<strong>${message}</strong>`,
  }

  return sgMail.send(msg);
}

// const sgMail = require('@sendgrid/mail');

// exports.sendEmail = (subject, message, author) => {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//   const msg = {
//     to: process.env.TARGET_EMAIL,
//     from: process.env.MY_EMAIL, 
//     subject: subject,
//     replyTo: author,
//     html: `<strong>${message}</strong>`,
//   };

//   return sgMail.send(msg);
// };


