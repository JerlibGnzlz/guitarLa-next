import { Caveat } from 'next/font/google'
import "./style/globals.css"
import Header from '../components/header';
import Footer from '../components/footer';


const caveat = Caveat({
  subsets: ['cyrillic-ext'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={caveat.className}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
