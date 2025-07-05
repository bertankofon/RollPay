"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, DollarSign, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"
import { mockOverviewData } from "@/lib/mock-data"

export default function OverviewPage() {
  const { nextPayoutDate, employeeCount, estimatedGasUSD } = mockOverviewData

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

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Next Settlement</CardTitle>
            <Calendar className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{nextPayoutDate}</div>
            <CardDescription className="text-slate-500">Automated execution scheduled</CardDescription>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{employeeCount}</div>
            <CardDescription className="text-slate-500">Enrolled in payroll system</CardDescription>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Transaction Cost</CardTitle>
            <DollarSign className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">${estimatedGasUSD}</div>
            <CardDescription className="text-emerald-600">-23% vs last month</CardDescription>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">Monthly Volume</CardTitle>
            <TrendingUp className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">$45,000</div>
            <CardDescription className="text-emerald-600">+12% vs last month</CardDescription>
          </CardContent>
        </Card>
      </div>

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
                    <p className="text-sm font-medium text-slate-900">Zircuit Network</p>
                    <p className="text-xs text-slate-500">Layer 2 operational</p>
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
                    <p className="text-sm font-medium text-slate-900">INTMAX Rollup</p>
                    <p className="text-xs text-slate-500">Privacy layer active</p>
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
                    <p className="text-sm font-medium text-slate-900">Gas Optimization</p>
                    <p className="text-xs text-slate-500">EIP-7702 bundling enabled</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  Optimizing
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
