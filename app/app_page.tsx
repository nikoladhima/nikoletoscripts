import { Download, Home, Play, FileTerminal } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                Synapse X Remake
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/showcase" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <Play className="w-4 h-4" />
                Showcase
              </Link>
              <Link href="/terms" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                <FileTerminal className="w-4 h-4" />
                Terms
              </Link>
              <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-4">
          Synapse X Remake
        </h1>
        <p className="text-xl text-gray-400 mb-12">✨ The Most Powerful Script Utility ✨</p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-400">Advanced protection systems keep you safe</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Optimized for maximum performance</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Features</h3>
            <p className="text-gray-400">Access to exclusive functions and capabilities</p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <Button
          className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 text-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Now
        </Button>
      </div>
    </div>
  )
}

