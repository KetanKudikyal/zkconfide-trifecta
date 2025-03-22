'use client'
import Navbar from "@/components/navbar"
import { BarChart2, ChevronRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900  text-white">
            <Navbar />
            <div className="container  mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg overflow-hidden relative">
                        <div className="p-4 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-2">Bitcoin Bonanza</h3>
                            <p className="text-sm mb-4">
                                Will Bitcoin hit $100,000 in 2025?
                            </p>
                            <div className="mt-auto">
                                <button className="bg-white capitalize text-black bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium flex items-center">
                                    market <ChevronRight className="h-4 w-4 ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-4 w-1/3">
                            <Image
                                src="https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2FDeposit.png&w=600&q=75"
                                alt="Basketball"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg overflow-hidden relative">
                        <div className="p-4 flex flex-col h-full">
                            <h3 className="text-xl font-bold mb-2">First 100 days</h3>
                            <p className="text-sm mb-4">What will Trump accomplish in his most pivotal days?</p>
                            <div className="mt-auto">
                                <button className="bg-white text-black bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium flex items-center">
                                    Market <ChevronRight className="h-4 w-4 ml-1" />
                                </button>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-4 w-1/3">
                            <Image
                                src="https://polymarket.com/_next/image?url=%2Fimages%2Ffeatured%2Ftrump-47.png&w=600&q=75"
                                alt="Trump with flag"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="p-4 overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1">
                            <BarChart2 className="h-4 w-4" />
                            Top
                        </button>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by market"
                                className="bg-[#2a2a38] border border-gray-700 rounded-md py-1 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">New</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Breaking News</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Trump Presidency</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">March Madness</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Economy</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Canada</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Ukraine</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Fed Rates</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Gaza</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm">Geopolitics</button>
                        <button className="bg-[#2a2a38] hover:bg-[#3a3a48] px-3 py-1 rounded text-sm flex items-center">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    <div className="bg-gray-800/50 rounded-lg max-w-[400px] overflow-hidden">
                        <div className="p-4 border-b flex justify-between items-center border-gray-700">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <Image
                                        src="https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fbitcoin-up-or-down-on-march-13-ppoEj3rBtGBr.jpg&w=256&q=100"
                                        alt="Department of Education"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                </div>
                                <Link href="/markets/bitcoin-up-or-down-on-march-22?outcome=yes">
                                    <h3 className="font-medium hover:underline cursor-pointer">Bitcoin Up or Down on March 22?</h3>
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center relative">
                                    <div
                                        className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500"
                                        style={{ transform: "rotate(70deg)" }}
                                    ></div>
                                    <span className="text-sm font-bold">19%</span>
                                </div>
                                <span className="text-sm text-gray-400">chance</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="grid grid-cols-2 gap-2">
                                <Link href="/markets/bitcoin-up-or-down-on-march-22?outcome=yes" className="bg-green-800 hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center gap-1">
                                    Buy Yes <ChevronRight className="h-4 w-4 rotate-90" />
                                </Link>
                                <Link href="/markets/bitcoin-up-or-down-on-march-22?outcome=no" className="bg-red-900 hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center gap-1">
                                    Buy No <ChevronRight className="h-4 w-4 -rotate-90" />
                                </Link>
                            </div>
                        </div>
                        <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
                            <span>$428k Vol.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

