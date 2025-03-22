"use client"

import Navbar from "@/components/navigation"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Lock, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              MEV Attacks like <span className="text-red-500">Sandwiching</span> Are Still Rampant
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Recently, a malicious actor exploited a Uniswap V3 swap with 100% slippage settings by front-running and
              back-running the transaction. This "sandwich attack" extracted value without any risk to the attacker,
              leaving users with significant losses.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link href="/markets">
                <button className="bg-transparent cursor-pointer border border-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-500/10 transition-colors">
                  Go to app
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-64 md:h-96 w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <SandwichAttackAnimation />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="bg-gray-900/50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Problem with Public Order Books</h2>
            <p className="text-lg text-gray-300">
              In decentralized finance (DeFi), public order books expose your transactions to malicious actors who can
              observe and manipulate them for profit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-red-500/20 p-3 rounded-full w-fit mb-6">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency Becomes Vulnerability</h3>
              <p className="text-gray-300">
                Public order books in DeFi platforms reveal your transaction details, allowing malicious actors to
                observe and exploit your trades before they're executed.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-red-500/20 p-3 rounded-full w-fit mb-6">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Betting Platforms at Risk</h3>
              <p className="text-gray-300">
                Similar risks exist in betting platforms and prediction markets, where high-stakes bets can be front-run
                to skew odds or manipulate the order book.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-red-500/20 p-3 rounded-full w-fit mb-6">
                <svg
                  className="w-6 h-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trust Compromised</h3>
              <p className="text-gray-300">
                These vulnerabilities compromise fairness, determinism, and user trust in the system, leading to
                financial losses and market inefficiencies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* zkConfide Introduction */}
      <section id="solution" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Introducing zkConfide</h2>
            <p className="text-lg text-gray-300">
              A revolutionary solution that brings privacy and security to betting and prediction markets, protecting
              users from MEV attacks and ensuring fair outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">How zkConfide Transforms the Process</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-4 mt-1">
                    <Shield className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Private Off-Chain Matching</h4>
                    <p className="text-gray-300">
                      Matches bets off-chain using a confidential (TEE) zk environment, preventing front-running
                      attacks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500/20 p-2 rounded-full mr-4 mt-1">
                    <Zap className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Secure AI Odds Generation</h4>
                    <p className="text-gray-300">
                      Generates AI odds securely inside a private module, ensuring they can't be manipulated by external
                      actors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500/20 p-2 rounded-full mr-4 mt-1">
                    <Lock className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Atomic zkProof Submission</h4>
                    <p className="text-gray-300">
                      Submits a zkProof of bet and outcome atomically, ensuring transparency and verifiability without
                      compromising privacy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500/20 p-2 rounded-full mr-4 mt-1">
                    <Server className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pseudonymous Execution</h4>
                    <p className="text-gray-300">
                      Uses server wallets to execute trades pseudonymously, protecting user identity and preventing
                      targeted attacks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-80 md:h-96 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ZkConfideAnimation />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="bg-gray-900/50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Public DeFi vs. zkConfide</h2>
            <p className="text-lg text-gray-300">
              See how zkConfide addresses the critical vulnerabilities present in traditional public DeFi platforms.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 text-sm md:text-base">
              <div className="bg-red-500/10 p-4 font-semibold text-center">Public DeFi Problem</div>
              <div className="bg-green-500/10 p-4 font-semibold text-center">zkConfide Alternative</div>
            </div>

            {comparisonData.map((item, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-gray-700">
                <div className="p-4 md:p-6 border-r border-gray-700 bg-gray-800/20">
                  <div className="flex items-start">
                    <div className="text-red-500 mr-3 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p>{item.problem}</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-gray-800/10">
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Changed Section */}
      <section id="changes" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Changed</h2>
            <p className="text-lg text-gray-300">
              zkConfide introduces fundamental improvements to the betting and prediction market ecosystem, ensuring
              security, privacy, and fairness for all users.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {changesData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Secure Betting?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Join zkConfide today and trade with confidence, knowing your transactions are protected from MEV attacks
              and manipulation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Get Started Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                zkConfide
              </span>
              <p className="text-gray-400 mt-2">Private AI Betting Protocol</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 zkConfide. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Sandwich Attack Animation Component
function SandwichAttackAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-full animate-pulse"></div>

      <div className="relative z-10 bg-gray-800/80 p-6 rounded-xl border border-red-500/50 shadow-lg max-w-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <span className="ml-2 font-semibold text-red-400">Sandwich Attack</span>
          </div>
          <div className="text-xs text-gray-400">Block #16842032</div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Front-run</span>
            <span className="text-red-400">+2.1 ETH</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">User Transaction</span>
            <span className="text-red-400">-3.5 ETH</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Back-run</span>
            <span className="text-red-400">+1.4 ETH</span>
          </div>
          <div className="h-px bg-gray-700 my-2"></div>
          <div className="flex justify-between items-center font-semibold">
            <span>Attacker Profit</span>
            <span className="text-green-400">+0.0 ETH</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-400">
          100% slippage allowed the attacker to extract maximum value without risk
        </div>
      </div>
    </div>
  )
}

// zkConfide Animation Component
function ZkConfideAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full animate-pulse"></div>

      <div className="relative z-10 bg-gray-800/80 p-6 rounded-xl border border-blue-500/50 shadow-lg max-w-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <span className="ml-2 font-semibold text-blue-400">zkConfide Protection</span>
          </div>
          <div className="text-xs text-gray-400">TEE Environment</div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Bet Matching</span>
            <span className="text-green-400">Private ✓</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">AI Odds Generation</span>
            <span className="text-green-400">Secure ✓</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Transaction Execution</span>
            <span className="text-green-400">Atomic ✓</span>
          </div>
          <div className="h-px bg-gray-700 my-2"></div>
          <div className="flex justify-between items-center font-semibold">
            <span>MEV Protection</span>
            <span className="text-green-400">100%</span>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-400">
          Zero knowledge proofs ensure verifiability without compromising privacy
        </div>
      </div>
    </div>
  )
}

// Comparison Data
const comparisonData = [
  {
    problem: "Public order books reveal your transaction",
    solution: "Bets are matched off-chain in zk-execution",
  },
  {
    problem: "Bots front-run to manipulate pricing",
    solution: "Odds are generated inside secure AI modules",
  },
  {
    problem: "Final transaction is subject to block builder games",
    solution: "zkProof of bet & outcome is submitted atomically",
  },
  {
    problem: "Public wallet ties to user identity",
    solution: "Server wallets execute pseudonymously",
  },
  {
    problem: "Manipulatable slippage/execution windows",
    solution: "Policy-bound execution in server wallet ensures fairness",
  },
]

// What We Changed Data
const changesData = [
  {
    title: "No Slippage-Based Traps",
    description:
      "Eliminate vulnerabilities from slippage settings that can be exploited by malicious actors to extract value from your transactions.",
  },
  {
    title: "No Order Flow Leakage",
    description:
      "Your betting intentions remain private until execution, preventing front-running and other forms of market manipulation.",
  },
  {
    title: "Off-Chain Execution in TEE",
    description:
      "Bets are created, matched, and executed off-chain in a Trusted Execution Environment with zero-knowledge proofs for security.",
  },
  {
    title: "Verified Outcomes with zk-Proofs",
    description:
      "Event outcomes are verified and settled using zero-knowledge proofs, ensuring transparency and fairness without compromising privacy.",
  },
  {
    title: "Confidential AI Odds Generation",
    description:
      "AI odds are generated in a confidential Trusted Execution Environment, protected from external manipulation attempts.",
  },
  {
    title: "Policy-Enforced Server Wallets",
    description:
      "Server wallets enforce policies that protect users by default, preventing exploitative practices and ensuring fair execution.",
  },
]

