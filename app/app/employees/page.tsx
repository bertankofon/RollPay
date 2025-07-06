"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Search, Mail, Phone, MapPin, DollarSign } from "lucide-react"

interface Employee {
  id: string
  name: string
  email: string
  phone: string
  position: string
  department: string
  salary: number
  walletAddress: string
  status: "active" | "inactive"
  avatar?: string
}

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      position: "Software Engineer",
      department: "Engineering",
      salary: 85000,
      walletAddress: "0x1234...5678",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@company.com",
      phone: "+1 (555) 987-6543",
      position: "Product Manager",
      department: "Product",
      salary: 95000,
      walletAddress: "0x8765...4321",
      status: "active",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      phone: "+1 (555) 456-7890",
      position: "Designer",
      department: "Design",
      salary: 75000,
      walletAddress: "0x9876...1234",
      status: "inactive",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    salary: "",
    walletAddress: "",
  })

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddEmployee = () => {
    if (newEmployee.name && newEmployee.email && newEmployee.walletAddress) {
      const employee: Employee = {
        id: Date.now().toString(),
        name: newEmployee.name,
        email: newEmployee.email,
        phone: newEmployee.phone,
        position: newEmployee.position,
        department: newEmployee.department,
        salary: Number.parseInt(newEmployee.salary) || 0,
        walletAddress: newEmployee.walletAddress,
        status: "active",
      }

      setEmployees([...employees, employee])
      setNewEmployee({
        name: "",
        email: "",
        phone: "",
        position: "",
        department: "",
        salary: "",
        walletAddress: "",
      })
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Employees
          </h1>
          <p className="text-gray-600 mt-1">Manage your team and payroll</p>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Employee Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      {employee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{employee.name}</CardTitle>
                    <p className="text-sm text-gray-600">{employee.position}</p>
                  </div>
                </div>
                <Badge variant={employee.status === "active" ? "default" : "secondary"}>{employee.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{employee.email}</span>
              </div>
              {employee.phone && (
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{employee.phone}</span>
                </div>
              )}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-600">${employee.salary.toLocaleString()}/year</span>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500">Wallet Address</p>
                <p className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{employee.walletAddress}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Employee Button - Fixed at bottom */}
      <div className="fixed bottom-6 right-6">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Employee</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={newEmployee.phone}
                    onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={newEmployee.position}
                    onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                    placeholder="Software Engineer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={newEmployee.department}
                    onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
                    placeholder="Engineering"
                  />
                </div>
                <div>
                  <Label htmlFor="salary">Annual Salary</Label>
                  <Input
                    id="salary"
                    type="number"
                    value={newEmployee.salary}
                    onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
                    placeholder="85000"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="walletAddress">Wallet Address</Label>
                <Input
                  id="walletAddress"
                  value={newEmployee.walletAddress}
                  onChange={(e) => setNewEmployee({ ...newEmployee, walletAddress: e.target.value })}
                  placeholder="0x1234...5678"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleAddEmployee}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Add Employee
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
