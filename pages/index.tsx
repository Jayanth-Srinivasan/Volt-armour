import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Landing from '@/components/Landing'
import Header from '@/components/layouts/Header'


const mont = Montserrat({
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function Home() {
  return (
    <main
      className={`bg-[#000000] ${mont.variable}`}
    >
      <Header/>
      <Landing />
    </main>
  )
}
