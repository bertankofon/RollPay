"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Eye, DollarSign } from "lucide-react"

export default function LandingPage() {
  const [usdcAnimation, setUsdcAnimation] = useState(false)

  const handleLaunchDashboard = () => {
    setUsdcAnimation(true)
    setTimeout(() => {
      window.location.href = "/app"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* USDC Animation Overlay */}
      {usdcAnimation && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Image src="/usdc-logo.png" alt="USDC" width={40} height={40} className="animate-spin" />
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} />
            <Image src="/rollpay-text.png" alt="RollPay" width={120} height={30} />
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/docs" className="text-white hover:text-purple-300 transition-colors">
              View Documentation
            </Link>
            <Button
              onClick={handleLaunchDashboard}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Launch Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            The Future of
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Payroll</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Powered by <Image src="/zircuit-logo.png" alt="Zircuit" width={24} height={24} className="inline mx-1" />
            Zircuit EIP-7702, using{" "}
            <Image src="/usdc-logo.png" alt="USDC" width={24} height={24} className="inline mx-1" />
            USDC paymaster, pay fees in USDC,{" "}
            <Image src="/intmax-logo.png" alt="INTMAX" width={24} height={24} className="inline mx-1" />
            INTMAX private transactions
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleLaunchDashboard}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              $2.4M+
            </div>
            <div className="text-gray-300">Total Processed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-300">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              $0.50
            </div>
            <div className="text-gray-300">Avg. Gas Cost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              SOC 2
            </div>
            <div className="text-gray-300">Compliant</div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Built on Cutting-Edge Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-purple-800 to-blue-800 border-purple-600">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Image src="/zircuit-logo.png" alt="Zircuit" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Zircuit L2</h3>
              <p className="text-gray-300">High-performance Layer 2 network optimized for enterprise applications</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-blue-800 border-purple-600">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">7702</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">EIP-7702</h3>
              <p className="text-gray-300">Smart account abstraction for seamless batch transaction processing</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800 to-blue-800 border-purple-600">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Image src="/intmax-logo.png" alt="INTMAX" width={32} height={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">INTMAX</h3>
              <p className="text-gray-300">Stateless rollup technology ensuring complete transaction privacy</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Why Choose RollPay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-600/50">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-300">Enterprise-grade security with multi-sig wallets</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-600/50">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Fast</h3>
              <p className="text-gray-300">Lightning-fast transactions with low fees</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-600/50">
            <CardContent className="p-6 text-center">
              <Eye className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Private</h3>
              <p className="text-gray-300">Complete privacy with INTMAX technology</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-600/50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cost-Effective</h3>
              <p className="text-gray-300">Pay fees in USDC with transparent pricing</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-purple-800">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/bertankofon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Bertan Kofon
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/iremkoci/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Irem Koci
            </a>
          </p>
          <div className="flex justify-center items-center space-x-6">
            <Image src="/zircuit-logo.png" alt="Zircuit" width={24} height={24} />
            <Image src="/intmax-logo.png" alt="INTMAX" width={24} height={24} />
            <Image src="/usdc-logo.png" alt="USDC" width={24} height={24} />
            <Image src="/ethereum-logo.png" alt="Ethereum" width={24} height={24} />
          </div>
        </div>
      </footer>
    </div>
  )
}
