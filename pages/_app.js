//import '@styles/globals.css'
import '@styles/style.scss'
import Head from 'next/head'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application

