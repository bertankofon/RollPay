"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/hooks/use-wallet"
import { Wallet, TrendingUp, Users, DollarSign, Activity, CheckCircle, AlertCircle, Clock } from "lucide-react"
import Image from "next/image"

export default function OverviewPage() {
  const { isConnected, address, connect, disconnect } = useWallet()
  const [systemStatus, setSystemStatus] = useState({
    zircuit: "operational",
    intmax: "operational",
    usdc: "operational",
    paymaster: "operational",
  })

  const handleConnectWallet = async () => {
    try {
      await connect()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "degraded":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case "down":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Overview
          </h1>
          <p className="text-gray-600 mt-1">Welcome to your RollPay dashboard</p>
        </div>

        <div className="flex items-center space-x-4">
          {!isConnected ? (
            <Button
              onClick={handleConnectWallet}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-green-500 text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Connected
              </Badge>
              <Button variant="outline" onClick={disconnect}>
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Processed</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              $2.4M+
            </div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+8 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Gas Cost</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$0.50</div>
            <p className="text-xs text-muted-foreground">-23% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">99.9%</div>
            <p className="text-xs text-muted-foreground">SOC 2 Compliant</p>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Image src="/zircuit-logo.png" alt="Zircuit" width={24} height={24} />
                <span className="font-medium">Zircuit L2</span>
              </div>
              {getStatusIcon(systemStatus.zircuit)}
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Image src="/intmax-logo.png" alt="INTMAX" width={24} height={24} />
                <span className="font-medium">INTMAX</span>
              </div>
              {getStatusIcon(systemStatus.intmax)}
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Image src="/usdc-logo.png" alt="USDC" width={24} height={24} />
                <span className="font-medium">USDC</span>
              </div>
              {getStatusIcon(systemStatus.usdc)}
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-purple-600" />
                <span className="font-medium">Paymaster</span>
              </div>
              {getStatusIcon(systemStatus.paymaster)}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Image src="/zircuit-logo.png" alt="Zircuit" width={24} height={24} />
              </div>
              <h3 className="font-semibold mb-2">Zircuit L2</h3>
              <p className="text-sm text-gray-600">High-performance Layer 2 network</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">7702</span>
              </div>
              <h3 className="font-semibold mb-2">EIP-7702</h3>
              <p className="text-sm text-gray-600">Smart account abstraction</p>
            </div>

            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Image src="/intmax-logo.png" alt="INTMAX" width={24} height={24} />
              </div>
              <h3 className="font-semibold mb-2">INTMAX</h3>
              <p className="text-sm text-gray-600">Private transaction technology</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { type: "Payroll", amount: "$12,450", status: "Completed", time: "2 hours ago" },
              { type: "Employee Payment", amount: "$3,200", status: "Processing", time: "4 hours ago" },
              { type: "Bulk Transfer", amount: "$8,900", status: "Completed", time: "6 hours ago" },
              { type: "Payroll", amount: "$15,600", status: "Completed", time: "1 day ago" },
            ].map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm text-gray-600">{tx.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{tx.amount}</p>
                  <Badge variant={tx.status === "Completed" ? "default" : "secondary"}>{tx.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
