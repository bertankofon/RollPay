"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, DollarSign, Users, TrendingUp, CheckCircle } from "lucide-react"

export default function LandingPage() {
  const [showUSDCAnimation, setShowUSDCAnimation] = useState(false)

  const handleLaunchDashboard = () => {
    setShowUSDCAnimation(true)
    setTimeout(() => {
      window.location.href = "/app"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* USDC Animation Overlay */}
      {showUSDCAnimation && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="relative">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${Math.random() * 400 - 200}px`,
                  top: `${Math.random() * 400 - 200}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: "2s",
                }}
              >
                <Image src="/usdc-logo.png" alt="USDC" width={40} height={40} className="opacity-80" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} className="rounded-lg" />
              <Image src="/rollpay-text.png" alt="RollPay" width={120} height={30} className="h-8 w-auto" />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#technology"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Technology
              </Link>
              <Link
                href="/docs"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Documentation
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleLaunchDashboard}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm font-medium border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-300"
            >
              Powered by <Image src="/zircuit-logo.png" alt="Zircuit" width={16} height={16} className="inline mx-1" />{" "}
              Zircuit EIP-7702
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              The Future of
              <br />
              Payroll is Here
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Seamless crypto payroll with{" "}
              <Image src="/usdc-logo.png" alt="USDC" width={24} height={24} className="inline mx-1" /> USDC paymaster,
              <Image src="/intmax-logo.png" alt="INTMAX" width={24} height={24} className="inline mx-1" /> INTMAX
              private transactions, and pay fees in{" "}
              <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} className="inline mx-1" /> USDC
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleLaunchDashboard}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl px-8 py-4 text-lg"
              >
                Launch Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 px-8 py-4 text-lg bg-transparent"
              >
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                $2.4M+
              </div>
              <div className="text-slate-600 dark:text-slate-300">Total Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-slate-600 dark:text-slate-300">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                $0.50
              </div>
              <div className="text-slate-600 dark:text-slate-300">Avg. Gas Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                SOC 2
              </div>
              <div className="text-slate-600 dark:text-slate-300">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose RollPay?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Built for the modern workforce with cutting-edge blockchain technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Private Transactions</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Complete transaction privacy with{" "}
                  <Image src="/intmax-logo.png" alt="INTMAX" width={20} height={20} className="inline mx-1" /> INTMAX
                  stateless rollup technology
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white mr-4">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">USDC Paymaster</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Pay all fees in{" "}
                  <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} className="inline mx-1" /> USDC with our
                  integrated paymaster solution
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white mr-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Lightning Fast</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  High-performance Layer 2 network optimized for enterprise applications on{" "}
                  <Image src="/zircuit-logo.png" alt="Zircuit" width={20} height={20} className="inline mx-1" /> Zircuit
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Team Management</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Comprehensive employee management with automated payroll processing
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white mr-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Analytics</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Real-time insights and reporting for better financial decisions
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow border-0 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white mr-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Compliance</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  SOC 2 compliant with enterprise-grade security standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technology"
        className="py-20 px-4 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powered by Cutting-Edge Technology</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Built on the most advanced blockchain infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-700/50 text-white">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Image src="/zircuit-logo.png" alt="Zircuit" width={40} height={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Zircuit L2</h3>
                <p className="text-purple-100 leading-relaxed">
                  High-performance Layer 2 network optimized for enterprise applications
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-800/50 to-indigo-800/50 border-blue-700/50 text-white">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl font-bold">
                  7702
                </div>
                <h3 className="text-2xl font-bold mb-4">EIP-7702</h3>
                <p className="text-blue-100 leading-relaxed">
                  Smart account abstraction for seamless batch transaction processing
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-indigo-800/50 to-purple-800/50 border-indigo-700/50 text-white">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Image src="/intmax-logo.png" alt="INTMAX" width={40} height={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">INTMAX</h3>
                <p className="text-indigo-100 leading-relaxed">
                  Stateless rollup technology ensuring complete transaction privacy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/rollpay-logo.png" alt="RollPay Logo" width={32} height={32} className="rounded-lg" />
              <Image src="/rollpay-text.png" alt="RollPay" width={100} height={25} className="h-6 w-auto" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 mb-2">Built by</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/bertankofon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors font-medium"
                >
                  Bertan Kofon
                </a>
                <span className="text-slate-400">•</span>
                <a
                  href="https://www.linkedin.com/in/iremkoci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors font-medium"
                >
                  Irem Koci
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 RollPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
