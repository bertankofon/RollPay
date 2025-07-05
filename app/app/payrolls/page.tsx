"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Download } from "lucide-react"
import { mockPayrolls } from "@/lib/mock-data"

export default function PayrollsPage() {
  const [payrolls] = useState(mockPayrolls)

  const handleFileUpload = () => {
    alert("File upload functionality would be implemented here")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payrolls</h1>
          <p className="text-gray-600 mt-1">Manage and track your payroll batches</p>
        </div>
        <Button onClick={handleFileUpload} className="flex items-center space-x-2">
          <Upload className="h-4 w-4" />
          <span>Upload Excel/CSV</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payroll Batches</CardTitle>
          <CardDescription>All payroll transactions and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Batch ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Employees</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Total USDC</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payrolls.map((payroll) => (
                  <tr key={payroll.batchId} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-mono text-sm">{payroll.batchId}</td>
                    <td className="py-3 px-4">{payroll.date}</td>
                    <td className="py-3 px-4">{payroll.employees}</td>
                    <td className="py-3 px-4">${payroll.totalUSDC.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={payroll.status === "Paid" ? "default" : "secondary"}
                        className={
                          payroll.status === "Paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {payroll.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
