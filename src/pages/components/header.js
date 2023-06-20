import React from 'react'

function Header() {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className=" flex justify-center align-middle">
        <img className='scale-75' src="logo3.svg"/>
        <div><p className='text-2xl font-bold'>FusionWebz</p>
        <p className='text-sm '>Website for everyone</p>
        </div>
        
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">First </a>
        <a className="mr-5 hover:text-gray-900">Second </a>
        <a className="mr-5 hover:text-gray-900">Third </a>
        <a className="mr-5 hover:text-gray-900">Fourth </a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={(()=>{location.href='https://wa.me/+918146097261'})}>Contact
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Header