"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Plus,
  ArrowUpRight,
  CheckCircle2,
  Wallet,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data
const stats = {
  totalBalance: 45250.75,
  monthlyPayroll: 28500.0,
  activeEmployees: 24,
  pendingPayments: 3,
}

const recentPayrolls = [
  { id: 1, date: "2024-01-15", amount: 28500, employees: 24, status: "completed" },
  { id: 2, date: "2024-01-01", amount: 28500, employees: 24, status: "completed" },
  { id: 3, date: "2023-12-15", amount: 27800, employees: 23, status: "completed" },
]

const recentEmployees = [
  { id: 1, name: "Sarah Johnson", role: "Senior Developer", avatar: "/placeholder-user.jpg", salary: 5500 },
  { id: 2, name: "Mike Chen", role: "Product Manager", avatar: "/placeholder-user.jpg", salary: 6200 },
  { id: 3, name: "Emily Davis", role: "UX Designer", avatar: "/placeholder-user.jpg", salary: 4800 },
]

export default function DashboardPage() {
  const { toast } = useToast()

  const handleFundTestUSDC = () => {
    toast({
      title: "Test USDC Funded!",
      description: "10,000 Test USDC has been added to your wallet.",
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
            <Wallet className="mr-2 h-4 w-4" />
            Fund Test USDC (10,000)
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Payroll
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalBalance.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.monthlyPayroll.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Next payment in 12 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeEmployees}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> new this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingPayments}</div>
            <p className="text-xs text-muted-foreground">Requires approval</p>
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
              {recentPayrolls.map((payroll) => (
                <div key={payroll.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
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
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm">Security Status</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Secure
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-blue-600" />
                <span className="text-sm">Transaction Speed</span>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Fast
              </Badge>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Gas Optimization</span>
                <span>94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Employees */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Employees</CardTitle>
          <CardDescription>Latest additions to your team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentEmployees.map((employee) => (
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
                  <p className="text-sm font-medium">${employee.salary.toLocaleString()}/mo</p>
                  <Button variant="ghost" size="sm">
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
