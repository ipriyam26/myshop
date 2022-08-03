import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Drawer from '../components/Drawer';
import ShopCartCard from '../components/ShopCartCard';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.style.background = '#395B64'
  
   
  }, [])
  

  return ( <>
  <Navbar/>
  <Component {...pageProps} />

  <Footer/>
  </>);
}

export default MyApp
