"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockEmployees } from "@/lib/mock-data"
import { Plus, Mail, MapPin, Calendar, DollarSign } from "lucide-react"

interface Employee {
  id: string
  name: string
  email: string
  position: string
  department: string
  monthlySalary: number
  walletAddress: string
  joinDate: string
  status: "active" | "inactive"
  avatar?: string
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    monthlySalary: "",
    walletAddress: "",
  })

  const handleAddEmployee = () => {
    if (!newEmployee.name || !newEmployee.email || !newEmployee.position || !newEmployee.monthlySalary) {
      alert("Please fill in all required fields")
      return
    }

    const employee: Employee = {
      id: `emp-${Date.now()}`,
      name: newEmployee.name,
      email: newEmployee.email,
      position: newEmployee.position,
      department: newEmployee.department || "General",
      monthlySalary: Number.parseFloat(newEmployee.monthlySalary),
      walletAddress: newEmployee.walletAddress || `0x${Math.random().toString(16).substr(2, 40)}`,
      joinDate: new Date().toISOString().split("T")[0],
      status: "active",
    }

    setEmployees([...employees, employee])
    setNewEmployee({
      name: "",
      email: "",
      position: "",
      department: "",
      monthlySalary: "",
      walletAddress: "",
    })
    setIsDialogOpen(false)
  }

  const totalMonthlyCost = employees.reduce((sum, emp) => sum + emp.monthlySalary, 0)
  const activeEmployees = employees.filter((emp) => emp.status === "active").length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Employee Management
          </h1>
          <p className="text-slate-600 mt-1">Manage your team and payroll recipients</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm text-slate-500">Active Employees</div>
            <div className="text-2xl font-bold text-slate-900">{activeEmployees}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-500">Monthly Cost</div>
            <div className="text-2xl font-bold text-slate-900">${totalMonthlyCost.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Employee Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <Card key={employee.id} className="border-purple-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
                    {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg text-slate-900">{employee.name}</CardTitle>
                  <CardDescription className="text-slate-600">{employee.position}</CardDescription>
                </div>
                <Badge
                  variant={employee.status === "active" ? "default" : "secondary"}
                  className={
                    employee.status === "active"
                      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                      : "bg-slate-100 text-slate-700 border-slate-200"
                  }
                >
                  {employee.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Mail className="h-4 w-4" />
                <span className="truncate">{employee.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" />
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>Joined {new Date(employee.joinDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="font-semibold text-green-600">${employee.monthlySalary.toLocaleString()}/mo</span>
                </div>
                <div className="text-xs text-slate-500">
                  {employee.walletAddress.slice(0, 6)}...{employee.walletAddress.slice(-4)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Employee Button */}
      <div className="flex justify-center pt-6">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="w-full max-w-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add New Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>Add a new team member to your payroll system.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                  placeholder="Enter full name"
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                  placeholder="Enter email address"
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  value={newEmployee.position}
                  onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                  placeholder="Enter job position"
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={newEmployee.department}
                  onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                  placeholder="Enter department"
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="salary">Monthly Salary (USD) *</Label>
                <Input
                  id="salary"
                  type="number"
                  value={newEmployee.monthlySalary}
                  onChange={(e) => setNewEmployee({ ...newEmployee, monthlySalary: e.target.value })}
                  placeholder="Enter monthly salary"
                  className="border-purple-200 focus:border-purple-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="wallet">Wallet Address (Optional)</Label>
                <Input
                  id="wallet"
                  value={newEmployee.walletAddress}
                  onChange={(e) => setNewEmployee({ ...newEmployee, walletAddress: e.target.value })}
                  placeholder="0x... (auto-generated if empty)"
                  className="border-purple-200 focus:border-purple-400 font-mono text-sm"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="border-purple-300 hover:bg-purple-50 bg-transparent"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddEmployee}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Add Employee
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
