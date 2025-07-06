"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} className="rounded-lg" />
          </div>
          <div className="flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="relative group bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-300 hover:border-purple-400 text-purple-700 hover:text-purple-800 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 px-6 py-2 rounded-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles className="w-4 h-4 mr-2 relative z-10 group-hover:animate-pulse" />
                  <span className="relative z-10 font-medium">How It Works</span>
                  <Zap className="w-4 h-4 ml-2 relative z-10 group-hover:animate-bounce" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-6">How RollPay Works</DialogTitle>
                </DialogHeader>
                <div className="flex justify-center p-4">
                  <Image
                    src="/how-it-works-diagram.jpeg"
                    alt="RollPay Architecture Diagram"
                    width={900}
                    height={700}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                    priority
                  />
                </div>
                <div className="mt-6 text-center px-4">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    RollPay leverages INTMAX's stateless rollup technology and Zircuit's EIP-7702 smart accounts to
                    enable private, gas-efficient payroll transactions with seamless off-ramp capabilities.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Image src="/rollpay-text.png" alt="RollPay" width={400} height={120} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-600 mb-6">Enterprise Payroll Infrastructure</h2>
          <div className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <div className="flex flex-wrap justify-center gap-4 text-lg font-medium">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Private Payrolls
              </span>
              <span className="text-slate-400">•</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Zero Gas Fees
              </span>
              <span className="text-slate-400">•</span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Instant Settlement
              </span>
            </div>
          </div>
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

      {/* Powered By Section */}
      <section className="container mx-auto px-4 py-16">
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
                src="/zircuit-text.png"
                alt="Zircuit"
                width={160}
                height={50}
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
            <p className="text-xl font-light italic mb-2 font-sans">2025 ETHGlobal Cannes</p>
            <div className="flex items-center justify-center gap-2 text-xl">
              <a
                href="https://www.linkedin.com/in/bertankofon/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif hover:text-white transition-colors duration-200 hover:underline"
              >
                Bertan Köfön
              </a>
              <span className="text-purple-300">&</span>
              <a
                href="https://www.linkedin.com/in/iremkoci/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif hover:text-white transition-colors duration-200 hover:underline"
              >
                İrem Koçi
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
