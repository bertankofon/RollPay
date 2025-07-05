"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, CreditCard, Users, Settings, Menu, X, Bell, User } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/app", icon: LayoutDashboard },
  { name: "Payrolls", href: "/app/payrolls", icon: CreditCard },
  { name: "Employees", href: "/app/employees", icon: Users },
  { name: "Settings", href: "/app/settings", icon: Settings },
]

export default function ClientAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="h-screen flex bg-slate-50 overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900 bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center h-16 px-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">R</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">RollPay</span>
              <div className="text-xs text-slate-400 font-medium">ENTERPRISE</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden ml-auto text-white hover:bg-slate-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-slate-800 text-white border-r-2 border-blue-500"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white",
                    )}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3 text-slate-300">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">Admin User</div>
              <div className="text-xs text-slate-400 truncate">admin@company.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-slate-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="hidden lg:block">
              <div className="text-sm text-slate-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>
            <Link href="/">
              <Button variant="outline" size="sm" className="border-slate-300 bg-transparent">
                Back to Landing
              </Button>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
