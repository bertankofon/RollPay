import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, TrendingUp, Lock, ArrowRight, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-900">RollPay</span>
              <div className="text-xs text-slate-500 font-medium">ENTERPRISE PAYROLL</div>
            </div>
          </div>
          <Link href="/app">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6">Access Dashboard</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            Enterprise-Grade Security
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Institutional Payroll
            <span className="block text-slate-600">Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy enterprise payroll with EIP-7702 smart accounts on Zircuit. INTMAX stateless rollup ensures complete
            transaction privacy while maintaining institutional compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
                Launch Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 px-8 py-3 text-lg bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-y">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900">$2.4M+</div>
              <div className="text-slate-600 font-medium">Total Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">99.9%</div>
              <div className="text-slate-600 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">$0.50</div>
              <div className="text-slate-600 font-medium">Avg. Gas Cost</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">SOC 2</div>
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
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-slate-900">Zero-Knowledge Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                INTMAX stateless rollup technology ensures complete transaction privacy. Employee compensation data
                remains confidential while maintaining audit trails.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-slate-900">Cost Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                EIP-7702 smart account bundling reduces transaction costs by up to 90%. Single transaction execution for
                entire payroll batches.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-slate-700" />
              </div>
              <CardTitle className="text-slate-900">Institutional Security</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                Multi-signature approvals, role-based access control, and comprehensive audit logging. Built to meet
                enterprise security requirements.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on cutting-edge blockchain infrastructure for maximum efficiency and security.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-400">Z</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Zircuit L2</h3>
              <p className="text-slate-300">High-performance Layer 2 network optimized for enterprise applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">7702</span>
              </div>
              <h3 className="text-xl font-bold mb-2">EIP-7702</h3>
              <p className="text-slate-300">Smart account abstraction for seamless batch transaction processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">IM</span>
              </div>
              <h3 className="text-xl font-bold mb-2">INTMAX</h3>
              <p className="text-slate-300">Stateless rollup technology ensuring complete transaction privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready for Enterprise Deployment?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions using RollPay for secure, efficient payroll management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
                Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 px-8 py-3 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">R</span>
            </div>
            <div>
              <span className="text-xl font-bold">RollPay</span>
              <div className="text-xs text-slate-400">ENTERPRISE PAYROLL</div>
            </div>
          </div>
          <div className="text-center text-slate-400">
            <p>© 2024 RollPay. Enterprise payroll infrastructure for the decentralized economy.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
