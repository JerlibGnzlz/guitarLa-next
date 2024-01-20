import { Caveat } from 'next/font/google'
import "./globals.css";
import Navbar from '../components/navbar';


const caveat = Caveat({
  subsets: ['cyrillic-ext', "latin"],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={caveat.className}>
      <body >

        <Navbar />
        {children}
      </body>
    </html>
  );
}
