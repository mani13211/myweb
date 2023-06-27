import React from 'react'
import { useState } from 'react'
import {ImCross} from "react-icons/im"
import Link from 'next/link'
function Portfolio() {
    const [model, setmodel] = useState(false)
    const [tempimg, settempimg] = useState(null)
    const openmodel=(img)=>{
        settempimg(img)
        setmodel(true)

    }
  return (
    <>
       {model && (
      <div className="model">
        <div className='container position-relative'>
                <button className="position-absolute border-0 bg-transparent p-2 pe-3 " style={{"right":"10px"}} onClick={(() => setmodel((false)))} ><ImCross/> </button>
                <img className="img-fluid" src={tempimg}/>
        </div>
      </div>
    )}
    <div className='container-xl m-auto p-5'>
        <div className='row'>
            <div className='col-lg-4 col-sm-6'>
                <div  className='cards p-3 pb-0 card m-auto mb-3'  >
                    <div className='img-contaienr   mb-3' onClick={(()=>{openmodel("portfolio/pardan.png")})} >
                        <img className="img-fluid" src="portfolio/pardan.png"/>
                    </div>
                    <p className='mb-0'> Portfolio website for a sketch artist</p>
                    <Link href="https://pardan-lio1.vercel.app " target="_blank " style={{"color":"#ff6700"}} className='mb-3  fs-6 fw-semibold fst-italic '>Visit Site .. </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio