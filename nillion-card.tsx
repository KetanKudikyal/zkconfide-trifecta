"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatePresence, motion } from "framer-motion"
import { LineChart, Sparkles, TrendingUp, Zap } from "lucide-react"
import { useState } from "react"

export default function NillionCard() {
  const [isHovering, setIsHovering] = useState(false)
  const [showPredictions, setShowPredictions] = useState(false)

  const predictions = [
    { icon: TrendingUp, text: "Market growth expected to increase by 12% in Q3" },
    { icon: Zap, text: "Energy sector showing strong recovery signals" },
    { icon: LineChart, text: "Tech stocks predicted to stabilize by end of month" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full "
    >
      <Card
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700 p-4 rounded-xl shadow-xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-70" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTIgMGgydjJoLTJ2LTJ6bS0yIDRoMnYyaC0ydi0yem00LTR2Mmgtdnp6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-2">
            <motion.div whileHover={{ rotate: 5 }} className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 blur-sm opacity-40" />
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 text-amber-900 font-bold text-md shadow-lg border border-amber-200/30">
                NI
              </div>
            </motion.div>
            <motion.h2
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300"
              animate={{
                backgroundPosition: isHovering ? ["0% 0%", "100% 0%"] : "0% 0%",
              }}
              transition={{ duration: 3, repeat: isHovering ? Number.POSITIVE_INFINITY : 0 }}
            >
              Nillion
            </motion.h2>
          </div>
          <div className="flex justify-center ">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-lg border border-white/10 transition-all duration-300"
                onClick={() => setShowPredictions(!showPredictions)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {showPredictions ? "Hide predictions" : "Get predictions"}
                  <motion.span
                    animate={{
                      rotate: isHovering ? [0, 15, -15, 0] : 0,
                      scale: isHovering ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 1,
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.span>
                </span>

                {/* Button glow effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-md group-hover:opacity-75 opacity-0 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </div>

          <AnimatePresence>
            {showPredictions && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 overflow-hidden"
              >
                <div className="space-y-4 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                  <h3 className="text-center text-lg font-medium text-slate-200 mb-4">Latest Predictions</h3>

                  {predictions.map((prediction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="flex items-start gap-3 p-3 rounded-md bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-2 rounded-md">
                        <prediction.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <p className="text-sm text-slate-300">{prediction.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}

