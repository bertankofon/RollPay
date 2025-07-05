// INTMAX Configuration
export const INTMAX_CONFIG = {
  network: "testnet", // or "mainnet"
  rpcUrl: "https://testnet-rpc.intmax.io",
  apiUrl: "https://testnet-api.intmax.io",
  explorerUrl: "https://testnet-explorer.intmax.io",
  chainId: 1337, // INTMAX testnet chain ID
  supportedTokens: {
    USDC: {
      address: "0x...", // USDC token address on INTMAX
      decimals: 6,
      symbol: "USDC",
    },
  },
}

// Mock configuration for development
export const MOCK_CONFIG = {
  enabled: true, // Set to false when real INTMAX integration is ready
  mockDelay: 1000, // Simulate network delay
  mockBalances: {
    "0x1234...": "1000.50", // Mock balances for testing
    "0x5678...": "2500.75",
  },
}
