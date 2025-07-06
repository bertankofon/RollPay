"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DollarSign, Users, TrendingUp, Clock, CheckCircle, Wallet, Shield, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data
const overviewData = {
  totalBalance: 125000,
  totalEmployees: 47,
  monthlyPayroll: 89500,
  pendingPayments: 3,
  recentPayrolls: [
    { id: 1, date: "2024-01-15", amount: 89500, status: "completed", employees: 47 },
    { id: 2, date: "2023-12-15", amount: 87200, status: "completed", employees: 45 },
    { id: 3, date: "2023-11-15", amount: 85800, status: "completed", employees: 44 },
  ],
  recentEmployees: [
    { id: 1, name: "Alice Johnson", role: "Senior Developer", salary: 8500, avatar: "/placeholder-user.jpg" },
    { id: 2, name: "Bob Smith", role: "Product Manager", salary: 7200, avatar: "/placeholder-user.jpg" },
    { id: 3, name: "Carol Davis", role: "UX Designer", salary: 6800, avatar: "/placeholder-user.jpg" },
  ],
}

export default function DashboardPage() {
  const { toast } = useToast()

  const handleFundTestUSDC = () => {
    toast({
      title: "Test USDC Funded",
      description: "10,000 Test USDC has been added to your wallet!",
      duration: 3000,
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleFundTestUSDC}
            variant="outline"
            className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
          >
            Fund Test USDC
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${overviewData.totalBalance.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">USDC on Zircuit</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overviewData.totalEmployees}</div>
                <p className="text-xs text-muted-foreground">Active payroll recipients</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${overviewData.monthlyPayroll.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{overviewData.pendingPayments}</div>
                <p className="text-xs text-muted-foreground">Awaiting processing</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Payrolls */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Payrolls</CardTitle>
                <CardDescription>Your latest payroll transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {overviewData.recentPayrolls.map((payroll) => (
                    <div key={payroll.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{payroll.date}</p>
                          <p className="text-xs text-muted-foreground">{payroll.employees} employees</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">${payroll.amount.toLocaleString()}</p>
                        <Badge variant="secondary" className="text-xs">
                          {payroll.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current system performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wallet className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Wallet Connection</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Connected
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">INTMAX Privacy</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Gas Optimization</span>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Enabled
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Employees */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Employees</CardTitle>
              <CardDescription>Latest additions to your payroll</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {overviewData.recentEmployees.map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                        <AvatarFallback>
                          {employee.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{employee.name}</p>
                        <p className="text-xs text-muted-foreground">{employee.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${employee.salary.toLocaleString()}/month</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed payroll analytics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
