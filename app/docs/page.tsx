"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} className="rounded-lg" />
            <Image src="/rollpay-text.png" alt="RollPay" width={120} height={36} />
          </div>
          <Link href="/">
            <Button variant="ghost" className="text-slate-600 hover:text-purple-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Rolling Soon Animation */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-2xl mx-4 border-purple-200 shadow-lg">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <Image src="/rollpay-logo.png" alt="RollPay Logo" width={80} height={80} className="rounded-lg" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 mb-6">
              <div className="rolling-text">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon...
                </span>
              </div>
            </div>
            <p className="text-slate-600 mb-6">
              Our comprehensive documentation is currently being prepared. Stay tuned for detailed guides on integrating
              RollPay's enterprise payroll infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Return to Home
                </Button>
              </Link>
              <Link href="/app">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 bg-transparent"
                >
                  Try Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes roll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .rolling-text {
          animation: roll 15s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  )
}
