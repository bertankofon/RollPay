"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DocsPage() {
  const [scrollText, setScrollText] = useState("")

  useEffect(() => {
    const text =
      "Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon... "
    setScrollText(text)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Header */}
      <header className="border-b border-purple-800/50 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/rollpay-logo.png" alt="RollPay Logo" width={40} height={40} className="rounded-lg" />
              <Image src="/rollpay-text.png" alt="RollPay" width={120} height={30} className="h-8 w-auto" />
            </div>
            <Button
              asChild
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white bg-transparent"
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform skew-y-12"></div>
        </div>

        {/* Scrolling Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="whitespace-nowrap animate-scroll text-6xl md:text-8xl font-bold text-purple-300/20">
            {scrollText}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <Image
              src="/rollpay-logo.png"
              alt="RollPay Logo"
              width={120}
              height={120}
              className="mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Documentation
          </h1>
          <div className="text-4xl md:text-6xl font-bold mb-8 text-white animate-pulse">Rolling Soon...</div>
          <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our comprehensive documentation is being prepared.
            <br />
            Stay tuned for detailed guides and API references.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-xl px-8 py-4 text-lg"
            >
              <Link href="/app">Try the Dashboard</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
