import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/port.css'
import '../styles/fonts.css'
import '../styles/globals.css'
import '../styles/wholestyle.css'
import '../styles/mbl.css'
import '../styles/devops.css'
import {gsap} from 'gsap/dist/gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useEffect} from 'react'
import Script from 'next/script'
gsap.registerPlugin(ScrollTrigger);

config.autoAddCss = false

export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");  
    <Script type="module" src="/sc.js"></Script>
  },[])

  
  
  
  

  
  return <Component {...pageProps} />
}
