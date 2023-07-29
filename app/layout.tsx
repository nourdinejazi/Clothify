import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
const poppins = Poppins({ subsets: ['latin'] , weight : ['500' , '600' , '700']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider />
        <ToastProvider />
        {children}
        <Footer ></Footer>
      </body>
    </html>
    
  )
}
