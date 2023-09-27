import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import { AppProvider } from "./Lib/AppContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A tv show tracking system',
  description: 'A tv show system that tracks the user watched shows together with their episdoes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <AppProvider>{children}</AppProvider>
        </body>
    </html>
  )
}
