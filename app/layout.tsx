import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import DynamicSolanaWalletProvider from '@/components/providers/DynamicSolanaWalletProvider'
import { Toaster } from 'sonner'

const lexend = Lexend({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'BrokieAI',
  description: 'BrokieAI is a no-code platform for creating and managing AI agents.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lexend.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicSolanaWalletProvider>
            {children}
          </DynamicSolanaWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

