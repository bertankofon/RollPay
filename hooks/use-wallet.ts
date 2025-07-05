"use client"

import { useState, useCallback } from "react"

interface WalletState {
  address: string | null
  isConnected: boolean
  intmaxAddress: string | null
  balance: number
}

export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    isConnected: false,
    intmaxAddress: null,
    balance: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === "undefined") {
        throw new Error("MetaMask is not installed. Please install MetaMask to continue.")
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please connect your MetaMask wallet.")
      }

      const address = accounts[0]

      // Generate a mock INTMAX address based on the EVM address
      const intmaxAddress = generateIntmaxAddress(address)

      setWallet({
        address,
        isConnected: true,
        intmaxAddress,
        balance: 0, // Always start with 0 balance as requested
      })
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet")
    } finally {
      setIsLoading(false)
    }
  }, [])

  const disconnectWallet = useCallback(() => {
    setWallet({
      address: null,
      isConnected: false,
      intmaxAddress: null,
      balance: 0,
    })
    setError(null)
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    wallet,
    isLoading,
    error,
    connectWallet,
    disconnectWallet,
    clearError,
  }
}

// Generate a mock INTMAX address based on EVM address
function generateIntmaxAddress(evmAddress: string): string {
  const base = "T6rZy11KtFN2Zo2yJP15So7L1cMMaQtsiNc96Lyi7dc2ffiMcP7JU5J7tUZ2w3QgpB6w2ipKHpCQb3yDZGhaWUK84KStp3F"
  // Use the last 4 characters of EVM address to make it unique
  const suffix = evmAddress.slice(-4)
  return base.slice(0, -4) + suffix.toUpperCase()
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: any
  }
}
