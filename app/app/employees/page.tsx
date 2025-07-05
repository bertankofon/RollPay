"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { mockEmployees } from "@/lib/mock-data"

export default function EmployeesPage() {
  const [employees] = useState(mockEmployees)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600 mt-1">Manage your employee information and payroll details</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Employee</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee Directory</CardTitle>
          <CardDescription>All employees enrolled in the payroll system</CardDescription>
          <div className="relative max-w-sm mt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">INTMAX ID</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Monthly Salary</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{employee.name}</td>
                    <td className="py-3 px-4 text-gray-600">{employee.email}</td>
                    <td className="py-3 px-4 font-mono text-sm text-gray-500">{employee.intmaxId}</td>
                    <td className="py-3 px-4">${employee.monthlySalary.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        Edit
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
