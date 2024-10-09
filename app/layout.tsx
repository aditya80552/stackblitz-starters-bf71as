import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/components/AuthProvider'
import ChatBot from '@/components/ChatBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alumni Connect',
  description: 'Connect, share, and grow with your alumni network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen p-4">{children}</main>
          <Footer />
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  )
}