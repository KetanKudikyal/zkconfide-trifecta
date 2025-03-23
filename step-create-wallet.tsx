"use client"

import { motion } from "framer-motion"
import { Loader2, Wallet } from "lucide-react"

import useWalletStore from "@/app/store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { API_URL } from "@/constants"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"

type WalletData = {
  walletAddress: string
}

type StepCreateWalletProps = {
  onComplete: (data: WalletData) => void
  isLoading: boolean
}

export function StepCreateWallet({ onComplete, isLoading }: StepCreateWalletProps) {
  const { setWallet, wallet } = useWalletStore()

  useEffect(() => {
    if (wallet) {
      onComplete({ walletAddress: wallet })
    }
  }, [wallet])
  const { isPending: isPendingCreateWallet, mutateAsync: mutateAsyncCreateWallet } = useMutation({
    mutationFn: async () => {
      const req = await fetch(API_URL + "/create-wallet", {
        method: "POST",
      })
      const res = await req.json();
      setWallet(res.address)
      return res;
    }
  })

  const handleCreateWallet = async () => {
    await mutateAsyncCreateWallet()
  }

  return (
    <div className="flex flex-col space-y-6 py-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mx-auto rounded-full bg-primary/10 p-6"
      >
        <Wallet className="h-10 w-10 text-primary" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 text-center"
      >
        <h3 className="text-xl font-medium">Create Your Wallet</h3>
        <p className="text-sm text-muted-foreground">You'll need a wallet to store your digital assets securely</p>
      </motion.div>

      {!wallet ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full"
        >
          <Button className="w-full" onClick={handleCreateWallet} disabled={isPendingCreateWallet || isLoading}>
            {isPendingCreateWallet && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create Wallet
          </Button>
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Your Wallet Address</div>
                <div className="break-all rounded-md bg-muted p-2 text-xs font-mono">{wallet}</div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={() => onComplete({ walletAddress: wallet })} disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </Button>
        </motion.div>
      )}
    </div>
  )
}

