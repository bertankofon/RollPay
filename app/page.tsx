"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, ArrowRight, CheckCircle, Zap } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [isLaunching, setIsLaunching] = useState(false)

  const handleLaunchDashboard = () => {
    setIsLaunching(true)
    // Create USDC animation
    setTimeout(() => {
      window.location.href = "/app"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* USDC Animation Overlay */}
      {isLaunching && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
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
              <Image src="/usdc-logo.png" alt="USDC" width={32} height={32} className="opacity-80" />
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} className="rounded-lg" />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/docs">
              <Button variant="ghost" className="text-slate-600 hover:text-purple-600">
                View Documentation
              </Button>
            </Link>
            <Button
              onClick={handleLaunchDashboard}
              disabled={isLaunching}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6"
            >
              {isLaunching ? "Launching..." : "Access Dashboard"}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full text-purple-700 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Powered by{" "}
            <Image src="/zircuit-logo.png" alt="Zircuit" width={16} height={16} className="mx-1 rounded-full" /> Zircuit
            EIP-7702
          </div>
          <div className="mb-6">
            <Image src="/rollpay-text.png" alt="RollPay" width={400} height={120} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-600 mb-6">
            Enterprise Payroll Infrastructure with{" "}
            <Image src="/usdc-logo.png" alt="USDC" width={24} height={24} className="inline mx-1" /> USDC Paymaster
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy enterprise payroll with EIP-7702 smart accounts on{" "}
            <Image src="/zircuit-logo.png" alt="Zircuit" width={20} height={20} className="inline mx-1 rounded-full" />{" "}
            Zircuit. Pay fees in{" "}
            <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} className="inline mx-1" /> USDC while{" "}
            <Image src="/intmax-logo.png" alt="INTMAX" width={20} height={20} className="inline mx-1" /> INTMAX
            stateless rollup ensures complete transaction privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleLaunchDashboard}
              disabled={isLaunching}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              {isLaunching ? "Launching..." : "Launch Dashboard"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 px-8 py-3 text-lg bg-transparent hover:bg-purple-50"
              >
                View Documentation
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
              <div className="text-slate-600 font-medium">
                Avg. Gas Cost in{" "}
                <Image src="/usdc-logo.png" alt="USDC" width={16} height={16} className="inline mx-1" /> USDC
              </div>
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

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Enterprise Features</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built for financial institutions requiring the highest standards of security and compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-purple-200 shadow-sm hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-slate-900">Zero-Knowledge Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                <Image src="/intmax-logo.png" alt="INTMAX" width={20} height={20} className="inline mr-1" /> INTMAX
                stateless rollup technology ensures complete transaction privacy. Employee compensation data remains
                confidential while maintaining audit trails.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-sm hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-slate-900">
                <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} className="inline mr-1" /> USDC Paymaster
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                EIP-7702 smart account bundling with{" "}
                <Image src="/usdc-logo.png" alt="USDC" width={16} height={16} className="inline mx-1" /> USDC paymaster
                reduces transaction costs by up to 90%. Pay all gas fees in USDC for seamless operations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-sm hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-slate-900">Institutional Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                Multi-signature approvals, role-based access control, and comprehensive audit logging. Built to meet
                enterprise security requirements with{" "}
                <Image
                  src="/zircuit-logo.png"
                  alt="Zircuit"
                  width={16}
                  height={16}
                  className="inline mx-1 rounded-full"
                />{" "}
                Zircuit's security features.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Built on cutting-edge blockchain infrastructure for maximum efficiency and security.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image src="/zircuit-logo.png" alt="Zircuit" width={32} height={32} className="rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zircuit L2</h3>
              <p className="text-purple-100">High-performance Layer 2 network optimized for enterprise applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">7702</span>
              </div>
              <h3 className="text-xl font-bold mb-2">EIP-7702</h3>
              <p className="text-purple-100">
                Smart account abstraction with{" "}
                <Image src="/usdc-logo.png" alt="USDC" width={16} height={16} className="inline mx-1" /> USDC paymaster
                for seamless batch transaction processing
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image src="/intmax-logo.png" alt="INTMAX" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">INTMAX</h3>
              <p className="text-purple-100">Stateless rollup technology ensuring complete transaction privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white/80 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready for Enterprise Deployment?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions using RollPay for secure, efficient payroll management with{" "}
            <Image src="/usdc-logo.png" alt="USDC" width={20} height={20} className="inline mx-1" /> USDC payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleLaunchDashboard}
              disabled={isLaunching}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              {isLaunching ? "Launching..." : "Access Dashboard"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-700 px-8 py-3 text-lg bg-transparent hover:bg-purple-50"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={32} height={32} className="rounded-lg" />
            <Image src="/rollpay-text.png" alt="RollPay" width={120} height={36} />
          </div>
          <div className="text-center text-purple-100 mb-4">
            <p>© 2024 RollPay. Enterprise payroll infrastructure for the decentralized economy.</p>
          </div>
          <div className="text-center text-purple-200 text-sm">
            <p>
              Built by{" "}
              <a
                href="https://www.linkedin.com/in/bertankofon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 underline font-medium"
              >
                Bertan Kofon
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/iremkoci/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 underline font-medium"
              >
                Irem Koci
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
