"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "@/components/shared/CustomInput"
import { CustomBtn } from "@/components"
import Link from "next/link"
import Image from "next/image"
import { Apple, Facebook, Google } from "@/assets/imgIndex"

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
})

export default function RegisterPage() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  // ...

  return (
    <div className="w-full h-full center flex-col">
      <Form {...form} className="">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full   center">

          <div className="space-y-6 w-full">

            <CustomInput type={'email'} form={form} name="email" placeholder={"Email"} style="w-full outline-none border-[1px] border-primary px-5 h-12" />
            <CustomInput type={'password'} form={form} name="password" placeholder={"Password"} style="w-full outline-none border-[1px] border-primary px-5 h-12" />
             <Link href={'/login'} className="text-primary mt-5">Forget Password</Link>
            <CustomBtn title={'Login'} link="/" style={'w-full h-12 rounded-none text-base text-white'} />
          </div>
        </form>
        <p className="text-base font-bold text-center my-5">Or</p>
        <div className="flex items-center gap-5">
          <Image src={Google} width={40} height={40} alt={'google'} className="cursor-pointer" />
          <Image src={Apple} width={40} height={40} alt={'google'} className="cursor-pointer" />
          <Image src={Facebook} width={40} height={40} alt={'google'} className="cursor-pointer" />
        </div>
        <p className="text-base my-5">Already have an account? <Link href={'/login'} className="text-primary">Log In</Link></p>

      </Form>

    </div>

  )
}


