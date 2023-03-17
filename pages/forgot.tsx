import {FC} from 'react'
import Layout from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { LockClosedIcon } from '@heroicons/react/20/solid'

const forgot: FC = () => {
    return (
        <Layout title={'auth'}>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div className='block text-center'>
                        Если вы забыли пароль, введите логин.
                    </div>
                    <form className="mt-8 space-y-6" action="../pages/auth#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-medium-magentap py-2 px-3 text-sm font-semibold text-white hover:bg-medium-magentap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                                Восстановить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
export default forgot