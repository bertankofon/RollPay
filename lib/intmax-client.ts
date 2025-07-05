"use client"

import { INTMAX_CONFIG } from "./intmax-config"

// INTMAX Client wrapper
export class IntmaxClientWrapper {
  private client: any = null
  private isInitialized = false

  async initialize() {
    if (this.isInitialized) return this.client

    try {
      // INTMAX Client SDK import - dynamic import for client-side only
      const { IntmaxClient } = await import("@intmax/client")

      this.client = new IntmaxClient({
        network: INTMAX_CONFIG.network,
        rpcUrl: INTMAX_CONFIG.rpcUrl,
        apiUrl: INTMAX_CONFIG.apiUrl,
      })

      this.isInitialized = true
      console.log("INTMAX Client initialized successfully")
      return this.client
    } catch (error) {
      console.error("Failed to initialize INTMAX Client:", error)
      throw error
    }
  }

  async getClient() {
    if (!this.isInitialized) {
      await this.initialize()
    }
    return this.client
  }

  // Wallet connection methods
  async connectWallet(evmAddress: string) {
    const client = await this.getClient()
    try {
      // EVM address'i INTMAX address'e map etme
      const intmaxAddress = await client.getIntmaxAddress(evmAddress)
      return intmaxAddress
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      throw error
    }
  }

  // Balance check
  async getBalance(intmaxAddress: string) {
    const client = await this.getClient()
    try {
      const balance = await client.getBalance(intmaxAddress)
      return balance
    } catch (error) {
      console.error("Failed to get balance:", error)
      throw error
    }
  }

  // Create new wallet
  async createWallet() {
    const client = await this.getClient()
    try {
      // create.wallet equivalent
      const newWallet = await client.createWallet()
      return newWallet
    } catch (error) {
      console.error("Failed to create wallet:", error)
      throw error
    }
  }

  // Login with EVM account to create INTMAX wallet
  async loginWithEvmAccount(evmPrivateKey: string) {
    const client = await this.getClient()
    try {
      // client.login equivalent
      const intmaxWallet = await client.login(evmPrivateKey)
      return intmaxWallet
    } catch (error) {
      console.error("Failed to login with EVM account:", error)
      throw error
    }
  }

  // Multisend transfer
  async multisendTransfer(fromAddress: string, transfers: Array<{ to: string; amount: string }>) {
    const client = await this.getClient()
    try {
      const txHash = await client.multisend(fromAddress, transfers)
      return txHash
    } catch (error) {
      console.error("Failed to execute multisend:", error)
      throw error
    }
  }
}

// Singleton instance
export const intmaxClient = new IntmaxClientWrapper()
