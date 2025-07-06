"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useWallet } from "@/hooks/use-wallet"
import { Wallet, Users, DollarSign, TrendingUp, Clock, CheckCircle, Zap, Shield } from "lucide-react"
import Image from "next/image"

export default function OverviewPage() {
  const { isConnected, address, connect, disconnect } = useWallet()
  const [isLoading, setIsLoading] = useState(false)

  const handleConnectWallet = async () => {
    setIsLoading(true)
    try {
      await connect()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const stats = [
    {
      title: "Total Employees",
      value: "12",
      change: "+2 this month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Monthly Payroll",
      value: "$45,600",
      change: "+8.2% from last month",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Transactions",
      value: "156",
      change: "+12 this week",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      title: "Success Rate",
      value: "99.8%",
      change: "All time high",
      icon: CheckCircle,
      color: "text-emerald-600",
    },
  ]

  const recentTransactions = [
    {
      id: "1",
      employee: "Alice Johnson",
      amount: "$3,200",
      status: "completed",
      date: "2024-01-15",
      hash: "0x1234...5678",
    },
    {
      id: "2",
      employee: "Bob Smith",
      amount: "$4,100",
      status: "completed",
      date: "2024-01-15",
      hash: "0xabcd...efgh",
    },
    {
      id: "3",
      employee: "Carol Davis",
      amount: "$3,800",
      status: "pending",
      date: "2024-01-15",
      hash: "0x9876...5432",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your payroll.</p>
        </div>
        <div className="flex items-center space-x-4">
          {!isConnected ? (
            <Button
              onClick={handleConnectWallet}
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Wallet className="mr-2 h-4 w-4" />
              {isLoading ? "Connecting..." : "Connect Wallet"}
            </Button>
          ) : (
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Connected
              </Badge>
              <Button variant="outline" onClick={disconnect} className="text-sm bg-transparent">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Quick Actions */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="mr-2 h-5 w-5 text-yellow-500" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              <Users className="mr-2 h-4 w-4" />
              Add New Employee
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <DollarSign className="mr-2 h-4 w-4" />
              Process Payroll
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-500" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Latest payroll transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {transaction.employee
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.employee}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{transaction.amount}</p>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={transaction.status === "completed" ? "default" : "secondary"}
                        className={transaction.status === "completed" ? "bg-green-100 text-green-800" : ""}
                      >
                        {transaction.status === "completed" ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-green-500" />
              System Status
            </CardTitle>
            <CardDescription>Network and service health</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Zircuit Network</span>
                <Badge className="bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Online
                </Badge>
              </div>
              <Progress value={99} className="h-2" />
              <p className="text-xs text-muted-foreground">99.9% uptime</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">INTMAX Privacy</span>
                <Badge className="bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Active
                </Badge>
              </div>
              <Progress value={100} className="h-2" />
              <p className="text-xs text-muted-foreground">Full privacy enabled</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">USDC Paymaster</span>
                <Badge className="bg-green-100 text-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Ready
                </Badge>
              </div>
              <Progress value={95} className="h-2" />
              <p className="text-xs text-muted-foreground">Gas fees in USDC</p>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Powered By</CardTitle>
            <CardDescription>Advanced blockchain infrastructure</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <Image src="/zircuit-logo.png" alt="Zircuit" width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm font-medium">Zircuit L2</p>
                <p className="text-xs text-muted-foreground">High Performance</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <Image src="/intmax-logo.png" alt="INTMAX" width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm font-medium">INTMAX</p>
                <p className="text-xs text-muted-foreground">Private Transactions</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <Image src="/usdc-logo.png" alt="USDC" width={40} height={40} className="mx-auto mb-2" />
                <p className="text-sm font-medium">USDC</p>
                <p className="text-xs text-muted-foreground">Stable Payments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
