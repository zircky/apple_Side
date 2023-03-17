import {FC, useState} from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import cn from 'clsx'

import apple_watch_ultra_gps_cellular_49_mm_korpus_iz_titana_remeshok_ocean_belogo_tsveta1 from '@/assets/products/applewatch/apple_watch_ultra_gps_cellular_49_mm_korpus_iz_titana_remeshok_ocean_belogo_tsveta.webp'
import Image from "next/image";
import Layout from "@/layout/Layout";

const product = {
    name: 'Apple Watch Ultra GPS + Cellular, 49 мм, корпус из титана, ремешок Ocean белого цвета',
    price: '699$',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'iPad', href: '/catalog/iPhone' },
    ],
    images: [
        {
            src: '@/assets/products/iphone/apple_iphone_14_256gb_zheltyy.webp',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
    ],
    colors: [
        { name: 'Серебристый', class: 'bg-[#c0c0c0]', selectedClass: 'ring-gray-400' },
        { name: 'Сияющая звезда', class: 'bg-[#fffff0]', selectedClass: 'ring-gray-900' },
    ],
    storeg: [
        { name: '41 мм', inStock: true },
        { name: '45 мм', inStock: true },
        { name: '49 мм', inStock: true },
    ],
    description: 'Бескомпромиссные возможности в прочном корпусе. Непревзойдённая точность GPS даже в мегаполисе. До 36 часов работы от батареи. Три разных, специально разработанных ремешка для спортсменов и искателей приключений всех мастей. Все функции, необходимые для поддержания здоровья, безопасности и связи.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

const apple_watch_ultra_gps_cellular_49_mm_korpus_iz_titana_remeshok_ocean_belogo_tsveta: FC = () => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.storeg[0])

    return (
        <Layout title={'apple watch'}>
            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            {product.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                            {breadcrumb.name}
                                        </a>
                                        <svg
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {product.name}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <Image src={apple_watch_ultra_gps_cellular_49_mm_korpus_iz_titana_remeshok_ocean_belogo_tsveta1} alt='1'
                                   className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={cn(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            <form className="mt-10">
                                {/* Colors */}
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                        <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                        <div className="flex items-center space-x-3">
                                            {product.colors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.name}
                                                    value={color}
                                                    className={({ active, checked }) =>
                                                        cn(
                                                            color.selectedClass,
                                                            active && checked ? 'ring ring-offset-1' : '',
                                                            !active && checked ? 'ring-2' : '',
                                                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                        )
                                                    }
                                                >
                                                    <RadioGroup.Label as="span" className="sr-only">
                                                        {' '}
                                                        {color.name}{' '}
                                                    </RadioGroup.Label>
                                                    <span
                                                        aria-hidden="true"
                                                        className={cn(
                                                            color.class,
                                                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                        )}
                                                    />
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Выберите объём накопителя:</h3>
                                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        </a>
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {product.storeg.map((storeg) => (
                                                <RadioGroup.Option
                                                    key={storeg.name}
                                                    value={storeg}
                                                    disabled={!storeg.inStock}
                                                    className={({ active }) =>
                                                        cn(
                                                            storeg.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{storeg.name}</RadioGroup.Label>
                                                            {storeg.inStock ? (
                                                                <span
                                                                    className={cn(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                    <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                    >
                                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                    </svg>
                                  </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Добавит в карзину
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default apple_watch_ultra_gps_cellular_49_mm_korpus_iz_titana_remeshok_ocean_belogo_tsveta