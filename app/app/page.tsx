"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DollarSign, AlertCircle, CheckCircle, Wallet, RefreshCw, Copy, Send, ArrowRight } from "lucide-react"
import { mockOverviewData, mockEmployees } from "@/lib/mock-data"
import { useWallet } from "@/hooks/use-wallet"
import { useState } from "react"
import Image from "next/image"

export default function OverviewPage() {
  const { nextPayoutDate, estimatedGasUSD } = mockOverviewData
  const { wallet, isLoading, error, connectWallet, disconnectWallet, clearError } = useWallet()
  const [isPayingOut, setIsPayingOut] = useState(false)
  const [zircuitBalance, setZircuitBalance] = useState(0)
  const [isFundingTestUSDC, setIsFundingTestUSDC] = useState(false)
  const [isBridgeDialogOpen, setIsBridgeDialogOpen] = useState(false)
  const [bridgeAmount, setBridgeAmount] = useState("")
  const [bridgeStep, setBridgeStep] = useState(0) // 0: input, 1: zircuit->eth, 2: eth->intmax, 3: success
  const [isBridging, setIsBridging] = useState(false)

  // Calculate real employee data
  const employeeCount = mockEmployees.length
  const totalMonthlyPayroll = mockEmployees.reduce((sum, employee) => sum + employee.monthlySalary, 0)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handlePaySalaries = async () => {
    if (!wallet.isConnected) {
      alert("Please connect your wallet first")
      return
    }

    setIsPayingOut(true)

    try {
      // Request MetaMask transaction
      if (typeof window.ethereum !== "undefined") {
        const transactionParameters = {
          to: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6", // Example payroll contract address
          from: wallet.address,
          value: "0x0", // 0 ETH since we're using USDC
          data: "0xa9059cbb000000000000000000000000742d35cc6634c0532925a3b8d4c9db96c4b4d8b6000000000000000000000000000000000000000000000000000000000000000a", // Example data for USDC transfer
        }

        const txHash = await window.ethereum.request({
          method: "eth_sendTransaction",
          params: [transactionParameters],
        })

        console.log("Transaction hash:", txHash)

        // Simulate waiting for confirmation
        await new Promise((resolve) => setTimeout(resolve, 3000))

        alert(
          `✅ Successfully initiated payroll payment!\nTransaction: ${txHash}\nAmount: $${totalMonthlyPayroll.toLocaleString()} to ${employeeCount} employees`,
        )
      }
    } catch (error: any) {
      if (error.code === 4001) {
        alert("Transaction was rejected by user")
      } else {
        alert("Payment failed. Please try again.")
      }
      console.error("Transaction error:", error)
    } finally {
      setIsPayingOut(false)
    }
  }

  const handleFundTestUSDC = async () => {
    if (!wallet.isConnected) {
      alert("Please connect your wallet first")
      return
    }

    setIsFundingTestUSDC(true)

    try {
      // Simulate funding test USDC to Zircuit
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setZircuitBalance(zircuitBalance + 1000)
      alert("✅ Successfully funded 1,000 test USDC to your Zircuit account!")
    } catch (error) {
      alert("Failed to fund test USDC. Please try again.")
    } finally {
      setIsFundingTestUSDC(false)
    }
  }

  const handleBridgeFunds = async () => {
    const amount = Number.parseFloat(bridgeAmount)
    if (isNaN(amount) || amount <= 0 || amount > zircuitBalance) {
      alert("Please enter a valid amount")
      return
    }

    try {
      // First, request MetaMask signature for bridge authorization
      if (typeof window.ethereum !== "undefined") {
        const message = `Authorize bridge of ${amount} USDC from Zircuit to INTMAX\nTimestamp: ${Date.now()}`

        await window.ethereum.request({
          method: "personal_sign",
          params: [message, wallet.address],
        })
      }
    } catch (error: any) {
      if (error.code === 4001) {
        alert("Bridge authorization was rejected")
        return
      } else {
        alert("Failed to authorize bridge. Please try again.")
        return
      }
    }

    setIsBridging(true)
    setBridgeStep(1)

    try {
      // Step 1: Zircuit to Ethereum (longer duration)
      await new Promise((resolve) => setTimeout(resolve, 5000)) // 5 seconds
      setBridgeStep(2)

      // Step 2: Ethereum to INTMAX (longer duration)
      await new Promise((resolve) => setTimeout(resolve, 5000)) // 5 seconds
      setBridgeStep(3)

      // Update balances
      setZircuitBalance((prev) => prev - amount)

      // Update INTMAX balance in wallet state
      if (wallet.isConnected) {
        wallet.balance += amount
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      alert("Bridge failed. Please try again.")
      setBridgeStep(0)
    } finally {
      setIsBridging(false)
    }
  }

  const resetBridge = () => {
    setBridgeStep(0)
    setBridgeAmount("")
    setIsBridging(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio Overview
          </h1>
          <p className="text-slate-600 mt-1">Real-time payroll analytics and performance metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            <CheckCircle className="w-3 h-3 mr-1" />
            System Operational
          </Badge>
        </div>
      </div>

      {/* INTMAX Wallet Connection */}
      <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="w-5 h-5" />
            <span>Multi-Chain Wallet Connection</span>
          </CardTitle>
          <CardDescription>Connect your MetaMask wallet to access Zircuit and INTMAX features</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert className="mb-4 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                {error}
                <Button variant="ghost" size="sm" onClick={clearError} className="ml-2 h-auto p-0 text-red-600">
                  Dismiss
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {!wallet.isConnected ? (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-slate-600 mb-4">
                  Connect your MetaMask wallet to start using RollPay's privacy-preserving payroll system
                </p>
                <Button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full max-w-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Wallet className="w-4 h-4 mr-2" />
                      Connect MetaMask
                    </>
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600">EVM Address</label>
                  <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg">
                    <code className="text-sm font-mono text-slate-900 flex-1 truncate">{wallet.address}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(wallet.address!)}
                      className="h-auto p-1"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-600">INTMAX Address</label>
                  <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg">
                    <code className="text-sm font-mono text-slate-900 flex-1 truncate">{wallet.intmaxAddress}</code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(wallet.intmaxAddress!)}
                      className="h-auto p-1"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Multi-chain Balances */}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image src="/zircuit-logo.png" alt="Zircuit" width={20} height={20} />
                    <span className="text-sm font-medium text-green-900">Zircuit Balance</span>
                  </div>
                  <p className="text-2xl font-bold text-green-900">{zircuitBalance.toFixed(2)} USDC</p>
                  <Button
                    onClick={handleFundTestUSDC}
                    disabled={isFundingTestUSDC}
                    size="sm"
                    className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    {isFundingTestUSDC ? (
                      <>
                        <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                        Funding...
                      </>
                    ) : (
                      "Fund Test USDC"
                    )}
                  </Button>
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image src="/ethereum-logo.png" alt="Ethereum" width={20} height={20} />
                    <span className="text-sm font-medium text-blue-900">Ethereum Bridge</span>
                  </div>
                  <p className="text-sm text-blue-700">Intermediate Layer</p>
                  <p className="text-xs text-blue-600 mt-1">EIP-7702 Smart Accounts</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Image src="/intmax-logo.png" alt="INTMAX" width={20} height={20} />
                    <span className="text-sm font-medium text-purple-900">INTMAX Balance</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-900">{wallet.balance.toFixed(2)} USDC</p>
                  <Dialog
                    open={isBridgeDialogOpen}
                    onOpenChange={(open) => {
                      setIsBridgeDialogOpen(open)
                      if (!open) {
                        resetBridge()
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="mt-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        onClick={() => setIsBridgeDialogOpen(true)}
                      >
                        Move Funds to Payroll
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Bridge Funds to INTMAX</DialogTitle>
                        <DialogDescription>
                          Transfer USDC from Zircuit to INTMAX for payroll operations
                        </DialogDescription>
                      </DialogHeader>

                      {bridgeStep === 0 && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="amount">Amount (USDC)</Label>
                            <Input
                              id="amount"
                              type="number"
                              placeholder="Enter amount"
                              value={bridgeAmount}
                              onChange={(e) => setBridgeAmount(e.target.value)}
                              max={zircuitBalance}
                              className="border-purple-200 focus:border-purple-400"
                            />
                            <p className="text-xs text-slate-500">
                              Available: {zircuitBalance.toFixed(2)} USDC on Zircuit
                            </p>
                          </div>
                          <DialogFooter>
                            <Button
                              variant="outline"
                              onClick={() => setIsBridgeDialogOpen(false)}
                              className="border-purple-300 hover:bg-purple-50 bg-transparent"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={handleBridgeFunds}
                              disabled={
                                !bridgeAmount ||
                                Number.parseFloat(bridgeAmount) <= 0 ||
                                Number.parseFloat(bridgeAmount) > zircuitBalance
                              }
                              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                            >
                              Start Bridge
                            </Button>
                          </DialogFooter>
                        </div>
                      )}

                      {bridgeStep === 1 && (
                        <div className="space-y-6 py-8">
                          <div className="text-center">
                            <h3 className="text-lg font-semibold mb-6">Bridging from Zircuit to Ethereum</h3>
                            <div className="flex items-center justify-center space-x-8 relative">
                              <div className="relative">
                                <Image src="/zircuit-logo.png" alt="Zircuit" width={64} height={64} />
                              </div>

                              {/* Flying USDC Animation */}
                              <div className="flex-1 relative h-16 flex items-center">
                                <div className="absolute inset-0 flex items-center">
                                  <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-30"></div>
                                </div>
                                <div className="absolute left-0 animate-[flyRight_3s_ease-in-out_infinite] z-10">
                                  <Image
                                    src="/usdc-logo.png"
                                    alt="USDC"
                                    width={32}
                                    height={32}
                                    className="drop-shadow-lg"
                                  />
                                </div>
                                <ArrowRight className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-600 animate-pulse" />
                              </div>

                              <div className="relative">
                                <Image src="/ethereum-logo.png" alt="Ethereum" width={64} height={64} />
                              </div>
                            </div>
                            <p className="text-sm text-slate-600 mt-6">Processing {bridgeAmount} USDC transfer...</p>
                            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                              <p className="text-xs text-blue-700">
                                Using EIP-7702 Smart Account for gas-free transactions
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {bridgeStep === 2 && (
                        <div className="space-y-6 py-8">
                          <div className="text-center">
                            <h3 className="text-lg font-semibold mb-6">Bridging from Ethereum to INTMAX</h3>
                            <div className="flex items-center justify-center space-x-8 relative">
                              <div className="relative">
                                <Image src="/ethereum-logo.png" alt="Ethereum" width={64} height={64} />
                              </div>

                              {/* Flying USDC Animation */}
                              <div className="flex-1 relative h-16 flex items-center">
                                <div className="absolute inset-0 flex items-center">
                                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"></div>
                                </div>
                                <div className="absolute left-0 animate-[flyRight_3s_ease-in-out_infinite] z-10">
                                  <Image
                                    src="/usdc-logo.png"
                                    alt="USDC"
                                    width={32}
                                    height={32}
                                    className="drop-shadow-lg"
                                  />
                                </div>
                                <ArrowRight className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-purple-600 animate-pulse" />
                              </div>

                              <div className="relative">
                                <Image src="/intmax-logo.png" alt="INTMAX" width={64} height={64} />
                              </div>
                            </div>
                            <p className="text-sm text-slate-600 mt-6">Finalizing private transfer to INTMAX...</p>
                            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                              <p className="text-xs text-purple-700">
                                Enabling zero-knowledge privacy for payroll transactions
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {bridgeStep === 3 && (
                        <div className="space-y-6 py-8">
                          <div className="text-center">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-green-900 mb-2">Bridge Successful!</h3>
                            <p className="text-sm text-slate-600 mb-4">
                              {bridgeAmount} USDC has been successfully transferred to your INTMAX payroll account
                            </p>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <p className="text-sm text-green-800">
                                ✅ Funds are now available for private payroll transactions
                              </p>
                              <p className="text-xs text-green-600 mt-1">
                                Gas fees paid in USDC • Zero-knowledge privacy enabled
                              </p>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button
                              onClick={() => {
                                resetBridge()
                                setIsBridgeDialogOpen(false)
                              }}
                              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                            >
                              Done
                            </Button>
                          </DialogFooter>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <div>
                  <p className="text-sm font-medium text-purple-900">Connected Wallet</p>
                  <p className="text-xs text-purple-700">Multi-chain payroll ready</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={disconnectWallet}
                    className="border-purple-300 text-purple-700 hover:bg-purple-100 bg-transparent"
                  >
                    Disconnect
                  </Button>
                </div>
              </div>

              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Multi-Chain Wallet Connected
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Monthly Payroll Summary */}
      <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5" />
            <span>Monthly Payroll Summary</span>
          </CardTitle>
          <CardDescription>Current month's payroll overview and payment actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-slate-600">Total Monthly Payroll</p>
              <p className="text-3xl font-bold text-slate-900">${totalMonthlyPayroll.toLocaleString()}</p>
              <p className="text-sm text-slate-500 mt-1">
                {employeeCount} employees • Next payment: {nextPayoutDate}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                onClick={handlePaySalaries}
                disabled={!wallet.isConnected || isPayingOut}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                {isPayingOut ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Pay Salaries
                  </>
                )}
              </Button>
              {!wallet.isConnected && <p className="text-xs text-slate-500 text-center">Connect wallet to pay</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Transaction Activity */}
        <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-slate-900">Recent Transactions</CardTitle>
            <CardDescription>Latest payroll batch executions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">BATCH-001 Executed</p>
                    <p className="text-xs text-slate-500">12 employees • $45,000 USDC</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">2h ago</div>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                    Completed
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">BATCH-002 Pending</p>
                    <p className="text-xs text-slate-500">Scheduled for Jan 15, 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">1d ago</div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                    Pending
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Employee Added</p>
                    <p className="text-xs text-slate-500">Eva Brown enrolled in payroll</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">3d ago</div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                    Updated
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="border-purple-200 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-slate-900">System Status</CardTitle>
            <CardDescription>Infrastructure health and performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">INTMAX Network</p>
                    <p className="text-xs text-slate-500">Privacy layer operational</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Online
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Zircuit Bridge</p>
                    <p className="text-xs text-slate-500">EIP-7702 smart accounts</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Multisend Service</p>
                    <p className="text-xs text-slate-500">Batch payments ready</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Ready
                </Badge>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Network Uptime</span>
                  <span className="text-sm font-bold text-slate-900">99.97%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                    style={{ width: "99.97%" }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes flyRight {
          0% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateX(50%) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
