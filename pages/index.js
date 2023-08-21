import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import GiftHamper from '@/components/GiftHamper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div id='homepage'>

        <div id='title'>
          <Image src={"/facebook.png"} width={50} height={50}/>
          <span>Facebook Annual Giveaway</span>
        </div>

        <div id='mid'>You are one step away from claiming your gift 🎉</div>

        <div id='body'>
          <GiftHamper/>
        </div>
      </div>
    </>
  )
}
