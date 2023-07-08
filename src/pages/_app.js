
// import "../styles/globals.css"
import Header from './components/header'
import Footer from './components/footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import '@/styles/css/globals.css'
import "../styles/css/index.css"
import "../styles/css/contact.css"
import { ToastContainer } from 'react-toastify';

//import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"



export default function App({ Component, pageProps }) {
  return<>
  
  <Header/>
  <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
  <Component {...pageProps} /><Footer/>
  </> }
