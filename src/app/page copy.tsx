'use client'
import { Activity, BarChart2, ChevronRight, Grid3X3, LayoutDashboard, Search, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a24] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 7H33V13H7V7Z" fill="white" />
                <path d="M7 17H33V23H7V17Z" fill="white" />
                <path d="M7 27H33V33H7V27Z" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-semibold">Polymarket</span>
          </div>
          <div className="relative flex-grow max-w-xl">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search markets"
              className="w-full bg-[#2a2a38] border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="flex flex-col items-center gap-1">
              <Grid3X3 className="h-5 w-5" />
              <span>Markets</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1">
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboards</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1">
              <Trophy className="h-5 w-5" />
              <span>Sports</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1">
              <Activity className="h-5 w-5" />
              <span>Activity</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1">
              <BarChart2 className="h-5 w-5" />
              <span>Ranks</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link href="#" className="text-blue-400 hover:text-blue-300">
              Log In
            </Link>
            <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </Link>
            <button className="p-1">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="border-b border-gray-800 p-3 overflow-x-auto">
        <div className="flex items-center gap-4 min-w-max">
          <div className="flex items-center gap-2">
            <span className="text-red-500 font-medium">LIVE</span>
            <span className="h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
          <Link href="#" className="text-white font-medium">
            All
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            New
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Politics
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Sports
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Crypto
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Trump
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Global Elections
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Elon Tweets
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Mentions
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Creators
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Pop Culture
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Business
          </Link>
        </div>
      </nav>

      {/* Featured Markets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg overflow-hidden relative">
          <div className="p-4 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">March Madness</h3>
            <p className="text-sm mb-4">Explore the bracket, predict the chaos, track the odds.</p>
            <div className="mt-auto">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium flex items-center">
                Bracket <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Basketball"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg overflow-hidden relative">
          <div className="p-4 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">Global trade wars</h3>
            <p className="text-sm mb-4">Hedge risk & forecast the fallout, amid rising US tariffs.</p>
            <div className="mt-auto">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium flex items-center">
                Markets <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Trade flags"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg overflow-hidden relative">
          <div className="p-4 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-2">Race to AGI</h3>
            <p className="text-sm mb-4">Predict model dominance, policy changes, & more...</p>
            <div className="mt-auto">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium flex items-center">
                Markets <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="AI visualization"
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
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded text-sm font-medium flex items-center">
                Markets <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Trump with flag"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
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

      {/* Market Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* NCAA Tournament Winner */}
        <div className="bg-[#2a2a38] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <Image src="/placeholder.svg?height=40&width=40" alt="NCAA" width={40} height={40} className="rounded" />
              <h3 className="font-medium">2025 NCAA Tournament Winner</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Duke</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">24%</span>
                  <span className="text-green-500 text-sm">Yes</span>
                  <span className="text-red-500 text-sm">No</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Florida</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">20%</span>
                  <span className="text-green-500 text-sm">Yes</span>
                  <span className="text-red-500 text-sm">No</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Auburn</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">15%</span>
                  <span className="text-green-500 text-sm">Yes</span>
                  <span className="text-red-500 text-sm">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
            <span>$14m Vol.</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Next Prime Minister of Canada */}
        <div className="bg-[#2a2a38] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Canada flag"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>
              <h3 className="font-medium">Next Prime Minister of Canada after the election?</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Mark Carney</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">60%</span>
                  <span className="text-green-500 text-sm">Yes</span>
                  <span className="text-red-500 text-sm">No</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Pierre Poilievre</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">40%</span>
                  <span className="text-green-500 text-sm">Yes</span>
                  <span className="text-red-500 text-sm">No</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Jagmeet Singh</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold">&lt;1%</span>
                  <span className="text-green-500 text-sm">Yes</span>
                  <span className="text-red-500 text-sm">No</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
            <span>$17m Vol.</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Trump Department of Education */}
        <div className="bg-[#2a2a38] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Department of Education"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="font-medium">Will Trump end Department of Education in 2025?</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
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
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-green-800 hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center gap-1">
                Buy Yes <ChevronRight className="h-4 w-4 rotate-90" />
              </button>
              <button className="bg-red-900 hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center gap-1">
                Buy No <ChevronRight className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
            <span>$428k Vol.</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Energy infrastructure Ukraine */}
        <div className="bg-[#2a2a38] rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Energy infrastructure"
                  width={40}
                  height={40}
                  className="rounded"
                />
              </div>
              <h3 className="font-medium">Energy infrastructure ceasefire in Ukraine in...</h3>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500"
                    style={{ transform: "rotate(150deg)" }}
                  ></div>
                  <span className="text-sm font-bold">42%</span>
                </div>
                <span className="text-sm text-gray-400">chance</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-green-800 hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center gap-1">
                Buy Yes <ChevronRight className="h-4 w-4 rotate-90" />
              </button>
              <button className="bg-red-900 hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center gap-1">
                Buy No <ChevronRight className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700 flex items-center justify-between text-sm text-gray-400">
            <span>$605k Vol.</span>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="p-1 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

