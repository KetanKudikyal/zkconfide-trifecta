"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import useTypewriter from "@/hooks/useTypeWriter"
import { useMutation } from "@tanstack/react-query"
import { AnimatePresence, motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"


const defaultPrediction = {
  "id": "chatcmpl-8ef17d99623343cc993ff071dcbc6f38",
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "I'm unable to provide real-time data or access to current prediction market sources. However, I can guide you on how to find the current odds and provide a general explanation of how these odds are derived.\n\nTo find the current odds for the \"Bitcoin Up or Down on March 22\" market, you can check reputable prediction market sources such as:\n\n1.  PredictIt: A US-based prediction market that offers odds on various events, including cryptocurrency prices.\n2.  Betfair: A UK-based betting exchange that offers odds on various events, including cryptocurrency prices.\n3.  BitMEX: A cryptocurrency derivatives exchange that offers prediction markets on various cryptocurrency events.\n\nHere's a general explanation of how these odds are derived:\n\nPrediction market odds are typically derived from the collective opinions of market participants, who place bets on the outcome of an event. The odds are calculated based on the number of bets placed on each outcome and the amount of money wagered on each outcome.\n\nFor example, if there are 1000 bets placed on Bitcoin being up on March 22, and 500 bets placed on Bitcoin being down on March 22, with the total amount wagered on each outcome being equal, the odds would be:\n\nBitcoin Up on March 22: 55% \n\nBitcoin Down on March 22: 45%\n\nLast Updated: [Please check the source for the latest update timestamp]\n\nExplanation: Prediction market odds are derived from the collective opinions of market participants, who place bets on the outcome of an event. The odds are calculated based on the number of bets placed on each outcome and the amount of money wagered on each outcome.\n\nPlease note that these odds are hypothetical and may not reflect the actual odds available on prediction markets. To get the current odds, please check the sources mentioned above.\n\nIf you want to get the current odds, I recommend checking the sources mentioned above for the latest data.",
        "refusal": null,
        "role": "assistant",
        "audio": null,
        "function_call": null,
        "tool_calls": [],
        "reasoning_content": null
      },
      "stop_reason": null
    }
  ],
  "created": 1742732583,
  "model": "meta-llama/Llama-3.1-8B-Instruct",
  "object": "chat.completion",
  "service_tier": null,
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 385,
    "prompt_tokens": 160,
    "total_tokens": 545,
    "completion_tokens_details": null,
    "prompt_tokens_details": null
  },
  "signature": "MEUCIQCDAlc3YcwUrujEopYI2fQDYJerRWmNqGzl+KvYd/JY5gIgId/4sVXapeAboZrh+KIu+nAMtMFYkP33ZkeBs9Ozqw8=",
  "prompt_logprobs": null
}
const getPrompt = (market: string | null) => {
  if (!market) return null
  return `
Using the latest data available from reputable prediction market sources, please fetch the current odds for the “${market}” market. 

Provide the probability percentages or implied odds for both outcomes, include the timestamp when these odds were last updated, and briefly explain how these odds are derived. 

Present your response in a clear, multi-line format using newline characters (\n) to separate each piece of information. For example:

Bitcoin Up on March 22: [Probability]% \n
Bitcoin Down on March 22: [Probability]% \n
Last Updated: [Timestamp] \n
Explanation: [Brief explanation of odds derivation]
  `
}
export default function NillionCard({ market }: { market: string | null }) {
  const [isHovering, setIsHovering] = useState(false)
  const [showPredictions, setShowPredictions] = useState(false)
  const [predictionResult, setPredictionResult] = useState("")

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const prompt = getPrompt(market)
      // const res = await fetch("/api/nillion", {
      //   method: "POST",
      //   body: JSON.stringify({ messages: [{ role: "user", content: prompt }] }),
      // })
      // return res.json()
      setInterval(() => {
        return true
      }, 1000)
    },
    onSuccess: () => {
      const data = defaultPrediction
      const formattedData = data.choices[0].message.content
      setPredictionResult(formattedData)
    },
  })

  const { displayedText } = useTypewriter({ text: predictionResult, delay: 10 })


  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [displayedText])

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
                onClick={() => {
                  setShowPredictions(!showPredictions)
                  if (predictionResult) {
                    return
                  }
                  mutate()
                }}
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
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    ref={scrollRef}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3 max-h-[300px] overflow-y-auto p-3 rounded-md bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors"
                  >
                    <p style={{ whiteSpace: "pre-line" }}>
                      {isPending ? "Loading..." : displayedText}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}

