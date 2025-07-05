"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DollarSign, AlertCircle, CheckCircle, Wallet, RefreshCw, Copy, Send } from "lucide-react"
import { mockOverviewData, mockEmployees } from "@/lib/mock-data"
import { useWallet } from "@/hooks/use-wallet"
import { useState } from "react"

export default function OverviewPage() {
  const { nextPayoutDate, estimatedGasUSD } = mockOverviewData
  const { wallet, isLoading, error, connectWallet, disconnectWallet, clearError } = useWallet()
  const [isPayingOut, setIsPayingOut] = useState(false)

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

    // Simulate payment process
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // 2 second delay
      alert(`Successfully initiated payment of $${totalMonthlyPayroll.toLocaleString()} to ${employeeCount} employees!`)
    } catch (error) {
      alert("Payment failed. Please try again.")
    } finally {
      setIsPayingOut(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Portfolio Overview</h1>
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
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Wallet className="w-5 h-5" />
            <span>INTMAX Wallet Connection</span>
          </CardTitle>
          <CardDescription>Connect your MetaMask wallet to access INTMAX features</CardDescription>
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
                <Button onClick={connectWallet} disabled={isLoading} className="w-full max-w-sm">
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

              <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div>
                  <p className="text-sm font-medium text-emerald-900">INTMAX Balance</p>
                  <p className="text-2xl font-bold text-emerald-900">{wallet.balance.toFixed(2)} USDC</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={disconnectWallet}
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 bg-transparent"
                  >
                    Disconnect
                  </Button>
                </div>
              </div>

              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                Wallet Connected
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Monthly Payroll Summary */}
      <Card className="border-slate-200 bg-white">
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
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
        <Card className="border-slate-200 bg-white">
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
        <Card className="border-slate-200 bg-white">
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
                    <p className="text-sm font-medium text-slate-900">Multisend Service</p>
                    <p className="text-xs text-slate-500">Batch payments ready</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Zircuit Bridge</p>
                    <p className="text-xs text-slate-500">Coming soon</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Planned
                </Badge>
              </div>

              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Network Uptime</span>
                  <span className="text-sm font-bold text-slate-900">99.97%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "99.97%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
