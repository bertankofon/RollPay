"use client"

import { useState, useEffect, useCallback } from "react"
import { intmaxClient } from "@/lib/intmax-client"

export interface IntmaxWallet {
  evmAddress: string
  intmaxAddress: string
  balance: string
  isConnected: boolean
}

export function useIntmax() {
  const [wallet, setWallet] = useState<IntmaxWallet | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Initialize INTMAX client
  useEffect(() => {
    const initClient = async () => {
      try {
        await intmaxClient.initialize()
      } catch (err) {
        setError("Failed to initialize INTMAX client")
        console.error(err)
      }
    }
    initClient()
  }, [])

  // Connect wallet
  const connectWallet = useCallback(async (evmAddress: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const intmaxAddress = await intmaxClient.connectWallet(evmAddress)
      const balance = await intmaxClient.getBalance(intmaxAddress)

      setWallet({
        evmAddress,
        intmaxAddress,
        balance: balance.toString(),
        isConnected: true,
      })
    } catch (err) {
      setError("Failed to connect wallet")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Refresh balance
  const refreshBalance = useCallback(async () => {
    if (!wallet) return

    setIsLoading(true)
    try {
      const balance = await intmaxClient.getBalance(wallet.intmaxAddress)
      setWallet((prev) => (prev ? { ...prev, balance: balance.toString() } : null))
    } catch (err) {
      setError("Failed to refresh balance")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }, [wallet])

  // Create new employee wallet
  const createEmployeeWallet = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const newWallet = await intmaxClient.createWallet()
      return newWallet
    } catch (err) {
      setError("Failed to create employee wallet")
      console.error(err)
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Multisend payment
  const sendMultiplePayments = useCallback(
    async (transfers: Array<{ to: string; amount: string }>) => {
      if (!wallet) throw new Error("Wallet not connected")

      setIsLoading(true)
      setError(null)

      try {
        const txHash = await intmaxClient.multisendTransfer(wallet.intmaxAddress, transfers)
        await refreshBalance() // Refresh balance after transfer
        return txHash
      } catch (err) {
        setError("Failed to send payments")
        console.error(err)
        throw err
      } finally {
        setIsLoading(false)
      }
    },
    [wallet, refreshBalance],
  )

  return {
    wallet,
    isLoading,
    error,
    connectWallet,
    refreshBalance,
    createEmployeeWallet,
    sendMultiplePayments,
    clearError: () => setError(null),
  }
}
