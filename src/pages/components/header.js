import React from 'react'

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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item ">
              <a className="nav-link" href="#">Portfolio</a>
               
              </li>
              <li className="nav-item">
                <a className="nav-link ">About Us</a>
              </li>
            </ul>
              <button className="btn btn-primary" onClick={(()=>{location.href='https://wa.me/+918146097261'})} >Contact Us</button>
           
          </div>
        </div>
      </nav>

      {/* <header className="text-gray-600 body-font">
    <div className=' container m-auto flex justify-between text-xs p-1 text-center border-b-2 '>
      <div>Get latest coupnones</div>
      <div className='text-xs'>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-4 h-4" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      </div>
      </div>
   
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
      <a className=" flex justify-center align-middle">
        <img className='scale-75' src="logo3.svg"/>
        <div><p className='text-2xl font-bold'>FusionWebz</p>
        <p className='text-sm '>Website for everyone</p>
        </div>
        
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">Home </a>
        <a className="mr-5 hover:text-gray-900">Services </a>
        <a className="mr-5 hover:text-gray-900">Protfolio   </a>
        <a className="mr-5 hover:text-gray-900">About Us  </a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={(()=>{location.href='https://wa.me/+918146097261'})}>Contact
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header> */}
    </div>
  )
}

export default Header