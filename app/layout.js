import './globals.css'
import { Inter } from 'next/font/google'
import ClientThemeProvider from '../components/ClientThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MOM - Mechanical Operations Manual',
  description: 'Mechanical Operations Manual for site mapping and project management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
      </body>
    </html>
  )
} 