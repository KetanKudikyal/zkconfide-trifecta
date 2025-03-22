"use client"

import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"

type SignInData = {
  email: string
  name: string
}

type StepSignInProps = {
  onComplete: (data: SignInData) => void
  isLoading: boolean
}

export function StepSignIn({ onComplete, isLoading }: StepSignInProps) {
  const { data: session, status } = useSession()
  const { isPending, mutateAsync } = useMutation({
    mutationFn: () => signIn("google")
  })

  useEffect(() => {
    if (status === "authenticated") {
      onComplete({
        email: session?.user?.email || "",
        name: session?.user?.name || "",
      })
    }
  }, [status])
  const handleGoogleSignIn = async () => {
    await mutateAsync()
    onComplete({
      email: "user@example.com",
      name: "John Doe",
    })
  }

  return (
    <div className="flex flex-col items-center space-y-6 py-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="rounded-full bg-primary/10 p-6"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 text-center"
      >
        <h3 className="text-xl font-medium">Sign in to continue</h3>
        <p className="text-sm text-muted-foreground">Connect with your Google account to proceed with the setup</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        <Button
          variant="outline"
          className="w-full justify-start space-x-2"
          onClick={handleGoogleSignIn}
          disabled={isPending || isLoading}
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
          )}
          <span>Sign in with Google</span>
        </Button>
      </motion.div>
    </div>
  )
}

