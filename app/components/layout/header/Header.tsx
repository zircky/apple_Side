import {FC, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import cn from 'clsx'
import {menu} from "@/layout/header/menu/menu.data";
import Image from "next/image";

import logo from './../../../../public/images/logo.svg'
import HeaderProfile from "@/layout/header/profile/HeaderProfile";
import Link from "next/link";
import HeaderMenu from "@/layout/header/menu/HeaderMenu";
import {HiOutlineShoppingCart} from "react-icons/hi";


const Header: FC = () => {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 lg:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        className="block h-8 w-auto lg:hidden"
                                        src={logo}
                                        alt="logo"
                                    />
                                        <Link href='/'><Image
                                        className="hidden h-8 w-auto lg:block"
                                        src={logo}
                                        alt="logo"
                                    /></Link>
                                </div>
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        <HeaderMenu/>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                                    <span className="sr-only">View notifications</span>
                                <HiOutlineShoppingCart  aria-hidden="true" className='h-6 w-6'/>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Link href='/auth'><HeaderProfile /></Link>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {menu.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.link}
                                    className={cn(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Header
