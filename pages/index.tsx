import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'

const Home: NextPage = () => {
  return (
    <div>
      <nav className="flex ">
    <Image src={logo} height={50} width={50} alt="Logo" ></Image>
        <ul>
          <li>Home</li>
          <li>TShirt</li>
          <li>Hoodie</li>
          <li>Mugs</li>
          <li>Sticker</li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
