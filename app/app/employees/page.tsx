"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Mail, Phone, MapPin, Calendar, DollarSign } from "lucide-react"

interface Employee {
  id: string
  name: string
  email: string
  phone: string
  address: string
  walletAddress: string
  salary: number
  position: string
  startDate: string
  avatar?: string
}

const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@company.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    walletAddress: "0x1234...5678",
    salary: 75000,
    position: "Frontend Developer",
    startDate: "2023-01-15",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "2",
    name: "Bob Smith",
    email: "bob@company.com",
    phone: "+1 (555) 987-6543",
    address: "456 Oak Ave, San Francisco, CA 94102",
    walletAddress: "0xabcd...efgh",
    salary: 85000,
    position: "Backend Developer",
    startDate: "2022-11-20",
    avatar: "/placeholder-user.jpg",
  },
  {
    id: "3",
    name: "Carol Davis",
    email: "carol@company.com",
    phone: "+1 (555) 456-7890",
    address: "789 Pine Rd, Austin, TX 73301",
    walletAddress: "0x9876...5432",
    salary: 90000,
    position: "Product Manager",
    startDate: "2023-03-10",
    avatar: "/placeholder-user.jpg",
  },
]

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>(mockEmployees)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    walletAddress: "",
    salary: "",
    position: "",
    startDate: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newEmployee: Employee = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      walletAddress: formData.walletAddress,
      salary: Number.parseFloat(formData.salary),
      position: formData.position,
      startDate: formData.startDate,
    }

    setEmployees((prev) => [...prev, newEmployee])
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      walletAddress: "",
      salary: "",
      position: "",
      startDate: "",
    })
    setIsDialogOpen(false)
  }

  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(salary)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Employee Management
          </h1>
          <p className="text-muted-foreground mt-2">Manage your team members and their payroll information</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <Card key={employee.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={employee.avatar || "/placeholder.svg"} alt={employee.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{employee.name}</CardTitle>
                  <CardDescription>{employee.position}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="truncate">{employee.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{employee.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="truncate">{employee.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Started {formatDate(employee.startDate)}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="font-semibold text-green-600">{formatSalary(employee.salary)}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {employee.walletAddress.slice(0, 6)}...{employee.walletAddress.slice(-4)}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="w-full max-w-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Employee
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Add New Employee
              </DialogTitle>
              <DialogDescription>Enter the employee details to add them to your payroll system.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    placeholder="Software Engineer"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="123 Main St, City, State 12345"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="walletAddress">Wallet Address</Label>
                  <Input
                    id="walletAddress"
                    value={formData.walletAddress}
                    onChange={(e) => handleInputChange("walletAddress", e.target.value)}
                    placeholder="0x1234...5678"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Annual Salary ($)</Label>
                  <Input
                    id="salary"
                    type="number"
                    value={formData.salary}
                    onChange={(e) => handleInputChange("salary", e.target.value)}
                    placeholder="75000"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Add Employee
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
