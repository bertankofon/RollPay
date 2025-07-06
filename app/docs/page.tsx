"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Image src="/rollpay-logo.png" alt="RollPay Logo" width={80} height={80} className="mx-auto mb-4" />
          <Image src="/rollpay-text.png" alt="RollPay" width={200} height={50} className="mx-auto" />
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-8">
          <div className="animate-scroll whitespace-nowrap text-4xl font-bold text-white">
            Rolling Soon... Rolling Soon... Rolling Soon... Rolling Soon...
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Our comprehensive documentation is coming soon. Stay tuned for detailed guides and API references.
        </p>

        <Link href="/">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
