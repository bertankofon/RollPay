"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const handleFundTestUSDC = () => {
    // This would integrate with your wallet/funding logic
    alert("10,000 Test USDC funded to your wallet!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} className="rounded-lg" />
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={handleFundTestUSDC}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent"
            >
              Fund Test USDC
            </Button>
            <Link href="/app">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6">
                Access Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Enterprise-Grade Security
          </div>
          <div className="mb-6">
            <Image src="/rollpay-text.png" alt="RollPay" width={400} height={120} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-600 mb-6">Enterprise Payroll Infrastructure</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy enterprise payroll with EIP-7702 smart accounts on Zircuit. INTMAX stateless rollup ensures complete
            transaction privacy while maintaining institutional compliance.
          </p>
          <div className="flex justify-center">
            <Link href="/app">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Launch Dashboard <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white/80 backdrop-blur-sm py-16 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                $2.4M+
              </div>
              <div className="text-slate-600 font-medium">Total Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-slate-600 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                $0.50
              </div>
              <div className="text-slate-600 font-medium">Avg. Gas Cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SOC 2
              </div>
              <div className="text-slate-600 font-medium">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Powered By</h2>
          <p className="text-lg text-slate-600">Built on cutting-edge blockchain infrastructure</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          {/* Zircuit */}
          <a
            href="https://zircuit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-xl hover:bg-white/50 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/zircuit-logo.png"
                alt="Zircuit Logo"
                width={60}
                height={60}
                className="rounded-lg group-hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/zircuit-text.png"
                alt="Zircuit"
                width={120}
                height={40}
                className="group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">EIP-7702 Smart Accounts</h3>
              <p className="text-slate-600 text-sm">
                High-performance Layer 2 network optimized for enterprise applications
              </p>
            </div>
          </a>

          {/* INTMAX */}
          <a
            href="https://intmax.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-6 rounded-xl hover:bg-white/50 transition-all duration-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/intmax-logo.png"
                alt="INTMAX Logo"
                width={60}
                height={60}
                className="rounded-lg group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                INTMAX
              </span>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Stateless Rollup</h3>
              <p className="text-slate-600 text-sm">Complete transaction privacy with zero-knowledge technology</p>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={32} height={32} className="rounded-lg" />
            <Image src="/rollpay-text.png" alt="RollPay" width={120} height={36} />
          </div>
          <div className="text-center text-purple-100">
            <p>© 2024 RollPay. Enterprise payroll infrastructure for the decentralized economy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
