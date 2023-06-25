
// import "../styles/globals.css"
import Header from './components/header'
import Footer from './components/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '@/styles/globals.css'
//import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"



export default function App({ Component, pageProps }) {
  return<><Header/><Component {...pageProps} /><Footer/>
  </> }
