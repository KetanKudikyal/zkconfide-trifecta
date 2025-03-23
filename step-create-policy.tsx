"use client"

import { motion } from "framer-motion"
import { Check, FileText, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

import useWalletStore from "@/app/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useMutation } from "@tanstack/react-query"

type PolicyData = {
  policyId: string
}

type StepCreatePolicyProps = {
  onComplete: (data: PolicyData) => void
  isLoading: boolean
}

export function StepCreatePolicy({ onComplete, isLoading }: StepCreatePolicyProps) {
  const [policyName, setPolicyName] = useState("")
  const [policyType, setPolicyType] = useState("standard")
  const [isCreating, setIsCreating] = useState(false)
  const { wallet, setPolicyId, policyId } = useWalletStore()

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/create-policy-2", {
        method: "POST",
        body: JSON.stringify({ name: policyName, maxAmount: policyType, owner: wallet }),
      })
      return res.json()
    },
    onSuccess: (data) => {
      setPolicyId(data.id)
      setIsCreating(false)
    },
    onError: (error) => {
      debugger
      console.error(error)
    },
  })

  useEffect(() => {
    if (policyId) {
      onComplete({ policyId })
    }
  }, [policyId])

  const handleCreatePolicy = () => {
    if (!policyName) return

    setIsCreating(true)

    // Simulate policy creation
    mutate()
  }

  return (
    <div className="flex flex-col space-y-6 py-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mx-auto rounded-full bg-primary/10 p-6"
      >
        <FileText className="h-10 w-10 text-primary" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 text-center"
      >
        <h3 className="text-xl font-medium">Create Your Policy</h3>
        <p className="text-sm text-muted-foreground">Set up a policy to define how your assets are managed</p>
      </motion.div>

      {!policyId ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="policy-name">Policy Name</Label>
            <Input
              id="policy-name"
              placeholder="Enter policy name"
              value={policyName}
              onChange={(e) => setPolicyName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Policy Amount</Label>
            <RadioGroup value={policyType} onValueChange={setPolicyType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="100" id="100" />
                <Label htmlFor="100" className="cursor-pointer">
                  100 USDC
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="200" id="200" />
                <Label htmlFor="200" className="cursor-pointer">
                  200 USDC
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="300" id="300" />
                <Label htmlFor="300" className="cursor-pointer">
                  300 USDC
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button className="w-full" onClick={handleCreatePolicy} disabled={!policyName || isCreating || isLoading}>
            {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Policy
          </Button>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
          <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-green-500 p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div className="font-medium">Policy Created Successfully</div>
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-sm">
                  <span className="font-medium">Policy ID:</span> {policyId}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Name:</span> {policyName}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Type:</span> {policyType.charAt(0).toUpperCase() + policyType.slice(1)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={() => onComplete({ policyId })} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Complete Setup
          </Button>
        </motion.div>
      )}
    </div>
  )
}

