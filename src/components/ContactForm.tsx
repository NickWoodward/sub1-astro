import { useForm, type SubmitHandler } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useRef } from "react";
import { toast } from "sonner";
import { EnquirySchema } from "../models/Models";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "../utils/utils";
import { Button } from "./Button";

type Inputs = {
  fName: string,
  sName: string,
  phone: string,
  email: string,
  message: string,
  password: string
}

interface Props {
  className?: string
}

export const ContactForm = ({className}: Props) => {
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      fName: '',
      sName: '',
      phone: '',
      email: '',
      message: '',
      password: ''
    },
    mode: 'all'

  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => { 
    const turnstileResponse = turnstileRef.current?.getResponse();
    console.log('turnstile',turnstileRef.current)
    if(!turnstileResponse) {
      turnstileRef.current?.reset();
      return;
    }
    console.log(data, 'hello')

    try {
      // const res = await fetch('/api/enquiry', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     ...data,
      //   })
      // })
      // console.log(res)

      // Dev
      const res = false;
      if(res) {
        reset();
      }
      else toast.error("Something went wrong. Please try again");
    } catch(e) {
      console.log(e)
      // TODO: Modal popup

    }
  }

  console.log(watch("fName")) // watch input value by passing the name of it

  const classes = cn("CONTACT-FORM space-y-5", className)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 sm:grid-rows-[min-content-fit_1fr] gap-x-3 gap-y-1 sm:gap-x-6 ">

        <div className="relative sm:col-span-1 sm:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="fName" className="block relative py-1.5">Name</label>
          <div className="">
            <input id="fName" type="text" {...register("fName", {required: true})}
              required
              autoComplete="given-name"
              className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-300 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.fName && "ring-error ring-2")}
            />
          </div>
          {errors.fName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.fName?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="sName" className="block relative py-1.5" >
            Surname
          </label>
          <input id="sName" type="text" {...register("sName", {required: true})}
            required
            autoComplete="family-name"
            className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-300 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.sName && "ring-error ring-2")}
          />
          {errors.sName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.sName?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="email" className="block relative py-1.5">
            Email
          </label>
          <input id="email" type="text" {...register("email", {required: true})}
            required
            autoComplete="email"
            className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-300 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.email && "ring-error ring-2")}
            />
          {errors.email && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.email?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="phone" className="block relative py-1.5">
            Phone
          </label>
          <input id="phone" type="text" {...register("phone", { required: true })}
            required
            autoComplete="tel"
            className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-300 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.phone && "ring-error ring-2")}
            />
          {errors.phone && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.phone?.message}</p>}
        </div>      
        
        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="message" className="block relative py-1.5">
            Message
          </label>
          <textarea id="message" {...register("message", { required: true })}
            required
            autoComplete=""
            className={cn("w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-300 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-2", errors.message && "ring-error ring-2")}
            />
          {errors.message && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.message?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500 hidden">
          <label htmlFor="password" className="block relative py-1.5">
            Password
          </label>
          <input id="password" {...register("password")}
            autoComplete=""
            className="w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-300 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-2"
            />
          {errors.password && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.password?.message}</p>}
        </div>

      </div>
    
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  space-y-3 sm:space-y-0 space-y-reverse sm:space-x-8">

        <Button 
          id="submit"
          type="submit"
          disabled={!isValid}
          rounded="md"
          intent="primary"
          className="ml-auto sm:ml-0 sm:w-auto w-full disabled:bg-slate-300  px-8 py-2.5 md:py-3 xl:py-4 text-base lg:text-xl"
        >
          {/* <Tick className="h-6 w-6 flex-none" /> */}
          Submit
        </Button>
      </div>
      <Turnstile className='ml-auto ' ref={turnstileRef} siteKey='1x00000000000000000000AA' />
    </form>

  )
}


    // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input defaultValue="test" {...register("example")} />


    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}


    //   <button type="submit">Submit</button>
    // </form>