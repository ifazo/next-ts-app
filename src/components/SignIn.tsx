'use client'
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

type Inputs = {
  email: string
  password: string
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  // const password = watch("password")
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      })
        .then((res) => {
          console.log(res)
          toast.success("Logged in successfully")
        })
        .catch((err) => {
          console.log(err)
          toast.error("Failed to login")
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            height={40}
            width={40}
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              {errors.email && <span>Email field is required</span>}
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your E-mail"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              {errors.password && <span>Password field is required</span>}
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Your Password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not have an account!{' '}
            <Link
              href="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
