"use client"

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import {
  Activity,
  BarChart2,
  Bookmark,
  ChevronRight,
  Code,
  FileText,
  Grid3X3,
  LayoutDashboard,
  Link2,
  RefreshCw,
  Search,
  Settings,
  Trophy,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function MarketPage() {
  const [selectedTab, setSelectedTab] = useState("buy")
  const [selectedTimeframe, setSelectedTimeframe] = useState("ALL")
  const [selectedCandidate, setSelectedCandidate] = useState("Pierre Poilievre")

  // Chart data
  const labels = Array.from({ length: 60 }, (_, i) => i + 1).map((day) => {
    if (day % 15 === 1) return "Feb"
    if (day % 30 === 1) return "Mar"
    return ""
  })

  const data = {
    labels,
    datasets: [
      {
        label: "Mark Carney",
        data: [
          80, 82, 79, 81, 78, 80, 79, 77, 78, 76, 75, 77, 74, 73, 75, 72, 74, 73, 71, 70, 72, 69, 71, 70, 68, 67, 69,
          66, 68, 67, 65, 64, 66, 63, 65, 64, 62, 61, 63, 60, 62, 61, 59, 58, 60, 57, 59, 58, 56, 55, 57, 54, 56, 55,
          53, 52, 54, 51, 53, 59,
        ],
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.5)",
        tension: 0.3,
      },
      {
        label: "Pierre Poilievre",
        data: [
          20, 18, 21, 19, 22, 20, 21, 23, 22, 24, 25, 23, 26, 27, 25, 28, 26, 27, 29, 30, 28, 31, 29, 30, 32, 33, 31,
          34, 32, 33, 35, 36, 34, 37, 35, 36, 38, 39, 37, 40, 38, 39, 41, 42, 40, 43, 41, 42, 44, 45, 43, 46, 44, 45,
          47, 48, 46, 49, 47, 42,
        ],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
      },
      {
        label: "Jagmeet Singh",
        data: Array(60).fill(1),
        borderColor: "rgb(139, 92, 246)",
        backgroundColor: "rgba(139, 92, 246, 0.5)",
        tension: 0.3,
      },
      {
        label: "Justin Trudeau",
        data: Array(60).fill(0.5),
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.3,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (value: any) => value + "%",
          color: "rgba(255, 255, 255, 0.5)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.5)",
        },
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  }

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
            <span className="text-xl font-semibold"></span>
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

      {/* Market Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left and Center */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Header */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Canada flag"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl font-bold mb-2">Next Prime Minister of Canada after the election?</h1>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" />
                    <span>$17,025,472 Vol.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Oct 20, 2025</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-white">
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <FileText className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Code className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white">
                  <Link2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Candidates Summary */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Mark Carney 59%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Pierre Poilievre 42%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span>Jagmeet Singh &lt;1%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Justin Trudeau &lt;1%</span>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-[#2a2a38] rounded-lg p-4">
              <div className="h-[300px] relative">
                {/* @ts-ignore */}
                <Line options={options} data={data} />
              </div>

              {/* Time Selector */}
              <div className="flex items-center gap-2 mt-4 border-t border-gray-700 pt-4">
                {["1H", "6H", "1D", "1W", "1M", "ALL"].map((time) => (
                  <button
                    key={time}
                    className={`px-3 py-1 rounded-full text-sm ${selectedTimeframe === time ? "bg-white text-black" : "text-gray-400 hover:text-white"}`}
                    onClick={() => setSelectedTimeframe(time)}
                  >
                    {time}
                  </button>
                ))}
                <button className="ml-auto p-2 text-gray-400 hover:text-white">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <div className="flex items-center justify-between mb-2 text-sm text-gray-400 px-2">
                <div>OUTCOME</div>
                <div className="flex items-center gap-1">
                  % CHANCE <RefreshCw className="h-4 w-4" />
                </div>
              </div>

              {/* Mark Carney */}
              <div className="bg-[#2a2a38] rounded-lg mb-2 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Mark Carney"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Mark Carney</div>
                      <div className="text-sm text-gray-400">$2,228,373 Vol.</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">59%</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="bg-green-800 hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center">
                    Buy Yes 59¢
                  </button>
                  <button className="bg-red-900 hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center">
                    Buy No 42¢
                  </button>
                </div>
              </div>

              {/* Pierre Poilievre */}
              <div className="bg-[#2a2a38] rounded-lg mb-2 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Pierre Poilievre"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Pierre Poilievre</div>
                      <div className="text-sm text-gray-400">$3,246,316 Vol.</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">42%</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="bg-green-800 hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center">
                    Buy Yes 42¢
                  </button>
                  <button className="bg-red-900 hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center">
                    Buy No 59¢
                  </button>
                </div>
              </div>

              {/* Jagmeet Singh */}
              <div className="bg-[#2a2a38] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Jagmeet Singh"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Jagmeet Singh</div>
                      <div className="text-sm text-gray-400">$6,054,198 Vol.</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">&lt;1%</div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="bg-green-800 hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center">
                    Buy Yes 0.2¢
                  </button>
                  <button className="bg-red-900 hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center">
                    Buy No 99.9¢
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Panel - Right */}
          <div className="lg:col-span-1">
            <div className="bg-[#2a2a38] rounded-lg overflow-hidden sticky top-4">
              {/* Candidate Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Pierre Poilievre"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="font-medium">Pierre Poilievre</div>
                </div>
              </div>

              {/* Trading Tabs */}
              <div className="flex border-b border-gray-700">
                <button
                  className={`flex-1 py-3 text-center font-medium ${selectedTab === "buy" ? "text-white border-b-2 border-blue-500" : "text-gray-400"}`}
                  onClick={() => setSelectedTab("buy")}
                >
                  Buy
                </button>
                <button
                  className={`flex-1 py-3 text-center font-medium ${selectedTab === "sell" ? "text-white border-b-2 border-blue-500" : "text-gray-400"}`}
                  onClick={() => setSelectedTab("sell")}
                >
                  Sell
                </button>
                <div className="flex items-center px-4">
                  <button className="flex items-center gap-1 text-sm text-gray-400">
                    Market <ChevronRight className="h-4 w-4 rotate-90" />
                  </button>
                </div>
              </div>

              {/* Trading Options */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <button className="bg-green-500 hover:bg-green-600 py-3 rounded font-medium">Yes 42¢</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-3 rounded font-medium">No 59¢</button>
                </div>

                {/* Amount */}
                <div className="mb-6">
                  <div className="text-sm mb-2">Amount</div>
                  <div className="flex items-center justify-between bg-[#1a1a24] p-3 rounded">
                    <div className="text-2xl font-bold">$0</div>
                    <div className="text-3xl text-gray-400">$</div>
                  </div>
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">+$1</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">+$20</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">+$100</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">Max</button>
                </div>

                {/* Login Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded font-medium">
                  Login to Trade
                </button>

                {/* Terms */}
                <div className="text-xs text-gray-400 text-center mt-4">
                  By trading, you agree to the{" "}
                  <Link href="#" className="text-blue-400 hover:underline">
                    Terms of Use
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Clock component
function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

