// INTMAX Configuration
export const INTMAX_CONFIG = {
  // Test network configuration - production'da değiştirilecek
  network: "testnet",
  rpcUrl: "https://testnet-rpc.intmax.io",
  chainId: 4689, // INTMAX testnet chain ID

  // API endpoints
  apiUrl: "https://testnet-api.intmax.io",

  // Contract addresses (testnet)
  contracts: {
    bridge: "0x...", // Bridge contract address
    token: "0x...", // USDC token address on INTMAX
  },
} as const

export type IntmaxConfig = typeof INTMAX_CONFIG
