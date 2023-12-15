import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/authOptions'
import { Toaster } from "react-hot-toast";
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
  title: 'Next TS App',
  description: 'Created by ifaz',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Header session={session} /> */}
          <Header />
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
