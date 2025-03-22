"use client"

import type React from "react"

import { AnimatePresence, motion } from "framer-motion"
import { Check } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { StepCreatePolicy } from "./step-create-policy"
import { StepCreateWallet } from "./step-create-wallet"
import { StepSignIn } from "./step-sign-in"

type UserData = {
  email: string
  name: string
  walletAddress?: string
  policyId?: string
}

export function MultiStepModal() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)

  const totalSteps = 3

  const handleStepComplete = (step: number, data: Partial<UserData>) => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setUserData((prev) => ({ ...prev, ...data }) as UserData)
      setCurrentStep(step + 1)
      setIsLoading(false)
    }, 1000)
  }

  const resetModal = () => {
    setCurrentStep(1)
    setUserData(null)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        className="bg-gradient-to-r from-blue-500  cursor-pointer to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        onClick={() => setOpen(true)}>Open Onboarding</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Complete Your Setup</DialogTitle>
          </DialogHeader>

          <div className="mb-6">
            <div className="flex justify-between">
              {Array.from({ length: totalSteps }).map((_, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${currentStep > idx + 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep === idx + 1
                        ? "border-primary text-primary"
                        : "border-muted text-muted-foreground"
                      }`}
                  >
                    {currentStep > idx + 1 ? <Check className="h-5 w-5" /> : <span>{idx + 1}</span>}
                  </div>
                  <span className={`mt-2 text-xs ${currentStep >= idx + 1 ? "text-primary" : "text-muted-foreground"}`}>
                    {idx === 0 ? "Sign In" : idx === 1 ? "Create Wallet" : "Create Policy"}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-4">
              <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
                <div
                  className="h-full bg-primary transition-all rounded-md duration-300"
                  style={{ width: `${Math.min(((currentStep - 1) / (totalSteps - 1)) * 100, 100)}%` }} />
              </div>
            </div>
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <StepContent key="step1">
                  <StepSignIn onComplete={(data) => handleStepComplete(1, data)} isLoading={isLoading} />
                </StepContent>
              )}

              {currentStep === 2 && (
                <StepContent key="step2">
                  <StepCreateWallet onComplete={(data) => handleStepComplete(2, data)} isLoading={isLoading} />
                </StepContent>
              )}

              {currentStep === 3 && (
                <StepContent key="step3">
                  <StepCreatePolicy onComplete={(data) => handleStepComplete(3, data)} isLoading={isLoading} />
                </StepContent>
              )}

              {currentStep > totalSteps && (
                <StepContent key="complete">
                  <div className="flex flex-col items-center justify-center space-y-4 py-10 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Setup Complete!</h3>
                    <p className="text-muted-foreground">You've successfully completed all steps.</p>
                    <Button
                      onClick={() => {
                        resetModal()
                        setOpen(false)
                      }}
                    >
                      Close
                    </Button>
                  </div>
                </StepContent>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </div >
  )
}

function StepContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

