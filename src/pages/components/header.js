import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

function Header() {

  return (
    <div className='container'>
     <div className='p-1' style={{'font-size':"small"}}>Get latest coupnones</div>
      <div className='text-xs'>
    
      </div>
      
      <nav className="navbar navbar-expand-lg border-top">
        <div className="container-fluid m-0 p-0">
        <a className="d-flex  align-content-center logo-finalize" style={{ transform: 'scale(0.8)' }}>
            <img src="logo3.svg" />
            <div className='ms-1'><p className=' span mb-0 fw-bold'>FusionWebz</p>
              <p className='mb-0 btm'>Website for everyone</p>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{'font-size':".9rem"}}>
              <li className="nav-item">
                <Link className="nav-link active" href="/">Home</Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item ">
              <Link className="nav-link" href="portfolio">Portfolio</Link>
               
              </li>
              <li className="nav-item">
                <a className="nav-link ">About Us</a>
              </li>
            </ul>
            <Link href="/contact"><button className="btn btn-primary"  >Contact Us</button></Link>
            
              {/* <button className="btn btn-primary" onClick={(()=>{location.href='https://wa.me/+918146097261'})} >Contact Us</button> */}
           
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Header