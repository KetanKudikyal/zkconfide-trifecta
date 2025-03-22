"use client"
import Avvvatars from 'avvvatars-react'

import Navbar from "@/components/navbar"
import { Button } from '@/components/ui/button'
import useTypewriter from '@/hooks/useTypeWriter'
import { cn } from '@/lib/utils'
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
  Bookmark,
  Code,
  FileText,
  Link2,
  RefreshCw,
  Settings,
  Trophy
} from "lucide-react"
import { useSession } from 'next-auth/react'
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useState } from "react"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

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
export default function MarketPage() {
  const [selectedTab, setSelectedTab] = useState("buy")
  const [selectedTimeframe, setSelectedTimeframe] = useState("ALL")
  const { data: session } = useSession()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { id } = useParams()
  const outcome = searchParams.get("outcome")

  const handleBuy = (outcome: string) => {
    router.push(`/markets/${id}?outcome=${outcome}`)
  }

  const { displayedText, isComplete } = useTypewriter({ text: "Nillion is a community of traders who are passionate about the stock market. We are a group of traders who are passionate about the stock market. We are a group of traders who are passionate about the stock market.", delay: 100 })

  return (
    <div className="min-h-screen bg-[#1a1a24] text-white">
      <Navbar />
      <div className="container mx-auto px-4 mt-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                <Image
                  src="https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Fbitcoin-up-or-down-on-march-13-ppoEj3rBtGBr.jpg&w=256&q=100"

                  alt="Canada flag"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h1 className="text-2xl font-bold mb-2 hover:underline cursor-pointer">Next Prime Minister of Canada after the election?</h1>

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
                    <Avvvatars value="best_user13@gmail.com" />
                    <div>
                      <div className="font-medium">Mark Carney</div>
                      <div className="text-sm text-gray-400">$2,228,373 Vol.</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">59%</div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="bg-green-800 min-w-[200px] hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center">
                      Buy Yes 59¢
                    </button>
                    <button className="bg-red-900 min-w-[200px] hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center">
                      Buy No 42¢
                    </button>
                  </div>
                </div>
              </div>

              {/* Pierre Poilievre */}
              <div className="bg-[#2a2a38] rounded-lg mb-2 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avvvatars value="best_user@gmail.com" />
                    <div>
                      <div className="font-medium">Pierre Poilievre</div>
                      <div className="text-sm text-gray-400">$3,246,316 Vol.</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">42%</div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="bg-green-800 min-w-[200px] hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center">
                      Buy Yes 59¢
                    </button>
                    <button className="bg-red-900 min-w-[200px] hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center">
                      Buy No 42¢
                    </button>
                  </div>
                </div>
              </div>

              {/* Jagmeet Singh */}
              <div className="bg-[#2a2a38] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avvvatars value="best_user1@gmail.com" />
                    <div>
                      <div className="font-medium">Jagmeet Singh</div>
                      <div className="text-sm text-gray-400">$6,054,198 Vol.</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold">&lt;1%</div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <button className="bg-green-800 min-w-[200px] hover:bg-green-700 text-green-400 py-2 rounded flex items-center justify-center">
                      Buy Yes 59¢
                    </button>
                    <button className="bg-red-900 min-w-[200px] hover:bg-red-800 text-red-400 py-2 rounded flex items-center justify-center">
                      Buy No 42¢
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-[#2a2a38] rounded-lg overflow-hidden sticky top-4">
              <div className="p-4 ">
                <div className="flex items-center gap-3">
                  <Avvvatars value={"nillion@gmail.com"} />
                  <div className="font-medium">Nillion</div>
                </div>
                <p className="text-gray-400 mt-6">
                  {displayedText}
                </p>
              </div>
            </div>
            <div className="bg-[#2a2a38] rounded-lg overflow-hidden  mt-10 ">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <Avvvatars value={session?.user?.email ?? "best_user13@gmail.com"} />
                  <div className="font-medium">{session?.user?.name}</div>
                </div>
              </div>

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
              </div>

              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <button onClick={() => handleBuy("yes")} className={cn(" py-3 rounded font-medium bg-gray-600", outcome === "yes" && "bg-green-500  hover:bg-green-600")}>Yes 42¢</button>
                  <button onClick={() => handleBuy("no")} className={cn(" py-3 rounded font-medium bg-gray-600", outcome === "no" && "bg-red-500 hover:bg-red-600")}>No 59¢</button>
                </div>
                <div className="mb-6">
                  <div className="text-sm mb-2">Amount</div>
                  <div className="flex items-center justify-between bg-[#1a1a24] p-3 rounded">
                    <input type="number" className="bg-transparent outline-none w-full text-white" placeholder="$20" />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">+$1</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">+$20</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">+$100</button>
                  <button className="bg-gray-700 hover:bg-gray-600 py-2 rounded text-sm">Max</button>
                </div>
                {/* Login Button */}
                <Button
                  className="bg-gradient-to-r from-blue-500 w-full h-[50px]  cursor-pointer to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                  onClick={() => router.push("/login")}
                >
                  Trade
                </Button>
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
    </div >
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

