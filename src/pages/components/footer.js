import React from 'react'

function Footer() {
  return (
    <footer className='footer container  '>
      <div className='row p-4'>
        <div className='col-sm-6 mb-3 col-lg-3'>
          <a className="d-flex  align-content-center logo-finalize">
            <img src="logo3.svg" />
            <div className='ms-1'><p className=' span mb-0 fw-bold'>FusionWebz</p>
              <p className='mb-0 btm'>Website for everyone</p>
            </div>
          </a>
        </div>
        <div className='col-sm-6 col-lg-3'>
          <p style={{'font-size':"14px","font-weight":"600"}} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Links</p>
          <ul className=" " style={{'font-size':"14px"}} >
            <li>
              <a className="text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Portfolio</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Services</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">About Us</a>
            </li>
          </ul>
        </div>
        <div className='col-sm-6 col-lg-3'>
          <p style={{'font-size':"14px","font-weight":"600"}} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</p>
          <ul style={{'font-size':"14px"}}>
            <li>
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </ul>
        </div>
        <div className='col-sm-6 col-lg-3'>
          <p style={{'font-size':"14px","font-weight":"600"}} className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</p>
          <ul style={{'font-size':"14px"}}>
            <li>
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </ul>
        </div>

      </div>

      <div style={{'font-size':"small"}} className=' copyright border-top capitalize text-capitalize  w-100 p-2'>
        copyright by maninder singh
      </div>

    </footer>

  

  )
}

export default Footer