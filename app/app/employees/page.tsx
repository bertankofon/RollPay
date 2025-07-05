"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Plus, Search, Edit, DollarSign } from "lucide-react"
import { mockEmployees, type Employee } from "@/lib/mock-data"

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intmaxId: "",
    monthlySalary: "",
  })

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalMonthlySalary = employees.reduce((sum, employee) => sum + employee.monthlySalary, 0)

  const handleAddEmployee = () => {
    if (!formData.name || !formData.email || !formData.intmaxId || !formData.monthlySalary) {
      return
    }

    const newEmployee: Employee = {
      id: (employees.length + 1).toString(),
      name: formData.name,
      email: formData.email,
      intmaxId: formData.intmaxId,
      monthlySalary: Number.parseFloat(formData.monthlySalary),
    }

    setEmployees([...employees, newEmployee])
    setFormData({ name: "", email: "", intmaxId: "", monthlySalary: "" })
    setIsAddDialogOpen(false)
  }

  const handleEditEmployee = (employee: Employee) => {
    setEditingEmployee(employee)
    setFormData({
      name: employee.name,
      email: employee.email,
      intmaxId: employee.intmaxId,
      monthlySalary: employee.monthlySalary.toString(),
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdateEmployee = () => {
    if (!editingEmployee || !formData.name || !formData.email || !formData.intmaxId || !formData.monthlySalary) {
      return
    }

    const updatedEmployees = employees.map((emp) =>
      emp.id === editingEmployee.id
        ? {
            ...emp,
            name: formData.name,
            email: formData.email,
            intmaxId: formData.intmaxId,
            monthlySalary: Number.parseFloat(formData.monthlySalary),
          }
        : emp,
    )

    setEmployees(updatedEmployees)
    setFormData({ name: "", email: "", intmaxId: "", monthlySalary: "" })
    setIsEditDialogOpen(false)
    setEditingEmployee(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employees</h1>
          <p className="text-gray-600 mt-1">Manage your employee information and payroll details</p>
        </div>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add Employee</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
              <DialogDescription>Enter the employee details to add them to your payroll system.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="intmaxId">INTMAX Address</Label>
                <Input
                  id="intmaxId"
                  value={formData.intmaxId}
                  onChange={(e) => setFormData({ ...formData, intmaxId: e.target.value })}
                  placeholder="T6rZy11KtFN2Zo2yJP15So7L1cMMaQtsiNc96Lyi7dc2ffiMcP7JU5J7tUZ2w3QgpB6w2ipKHpCQb3yDZGhaWUK84KStp3F"
                  className="font-mono text-xs"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="salary">Monthly Salary (USD)</Label>
                <Input
                  id="salary"
                  type="number"
                  value={formData.monthlySalary}
                  onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value })}
                  placeholder="4500"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddEmployee}>
                Add Employee
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{employee.name}</td>
                    <td className="py-3 px-4 text-gray-600">{employee.email}</td>
                    <td className="py-3 px-4 font-mono text-xs text-gray-500 max-w-[200px] truncate">
                      {employee.intmaxId}
                    </td>
                    <td className="py-3 px-4">${employee.monthlySalary.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" onClick={() => handleEditEmployee(employee)}>
                        <Edit className="h-4 w-4 mr-1" />
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

      {/* Total Monthly Salary Card */}
      <Card className="border-slate-200 bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-slate-600">Total Monthly Payroll</CardTitle>
          <DollarSign className="h-4 w-4 text-slate-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-slate-900">${totalMonthlySalary.toLocaleString()}</div>
          <p className="text-xs text-slate-500 mt-1">Total monthly salary for {employees.length} employees</p>
        </CardContent>
      </Card>

      {/* Edit Employee Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Employee</DialogTitle>
            <DialogDescription>Update the employee details.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@company.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-intmaxId">INTMAX Address</Label>
              <Input
                id="edit-intmaxId"
                value={formData.intmaxId}
                onChange={(e) => setFormData({ ...formData, intmaxId: e.target.value })}
                placeholder="T6rZy11KtFN2Zo2yJP15So7L1cMMaQtsiNc96Lyi7dc2ffiMcP7JU5J7tUZ2w3QgpB6w2ipKHpCQb3yDZGhaWUK84KStp3F"
                className="font-mono text-xs"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-salary">Monthly Salary (USD)</Label>
              <Input
                id="edit-salary"
                type="number"
                value={formData.monthlySalary}
                onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value })}
                placeholder="4500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleUpdateEmployee}>
              Update Employee
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
