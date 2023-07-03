import React from 'react'
import { useEffect } from 'react'
import Head from "next/head"
 function Contact() {
//   useEffect(() => {
//     var element = document.getElementById("__next");
//     element.classList.add("contactpage");
  
//   }, [])
  
  return (<>
 <div className='contactpage'></div>
  <div div className='p-3 mb-3'>
   <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
  </Head>
  <div className='container w-75 text-sm-center m-auto p-2 mb-3  text-center mb-3'><h2>Get in touch</h2>
  <p className='fs-6'>We would love to hear from you! Whether you have a question, a suggestion, or simply want to say hello, we're here to listen. Our team is dedicated to providing the best possible support and assistance. So go ahead and get in touch with us using the contact information provided below.</p>
  </div>
  
    <div className='contact-form-div bg-white container rounded-4 p-3 mb-3' style={{"    box-shadow":" 0px 4px 10px -4px #ccc"}}>
      <div className='row flex-md-row-reverse g-2'>
      <div className='col-md-8'>
          <form className='p-3'>
            <div className='row mb-3'>
              <div className='col-sm-6 mb-3'>
                <label className="form-label" htmlFor="fname">First Name</label>
                <input type='text' name="fname" required className='form-control' id="fname" />
              </div>
              <div className='col-sm-6 mb-3'>
                <label className="form-label" htmlFor="lname">Last Name</label>
                <input type='text' name="lname" required className='form-control' id="lname" />
              </div>
              <div className=' col-sm-6 mb-3'>
                <label className="form-label" htmlFor="Email">Email</label>
                <input type="email" placeholder="name@example.com" name="Email" required className='form-control' id="Email" />
              </div>
              <div className=' col-sm-6 mb-3'>
                <label className="form-label" htmlFor="phone">Phone</label>
                <input type="tel" placeholder="+91123456789" name="phone" className='form-control' id="phone" />
              </div>
              <div className=' col-sm-12 mb-3'>
                <label className="fs-6 text-capitalize mb-3 fw-semibold">i required some help about</label>
                <div className='row ps-2'>
                  <div className="form-check col-sm-6 col-md-6 col-xl-3 ">
                    <input className="form-check-input" type="radio" name="queryabout" id="sitedevelop" />
                    <label className="form-check-label" htmlFor="sitedevelop">
                      Website development
                    </label>
                  </div>
                  <div className="form-check col-sm-6 col-md-6 col-xl-3 ">
                    <input className="form-check-input" type="radio" name="queryabout" id="pricing" />
                    <label className="form-check-label" htmlFor="pricing">
                      Pricing
                    </label>
                  </div>
                  <div className="form-check  col-sm-6 col-md-6 col-xl-3 ">
                    <input className="form-check-input" type="radio" name="queryabout" id="sitedesign" />
                    <label className="form-check-label" htmlFor="sitedesign">
                      Website design
                    </label>
                  </div>
                  
                  <div className="form-check col-sm-6 col-md-6 col-xl-3 ">
                    <input className="form-check-input" type="radio" name="queryabout" id="others" defaultChecked />
                    <label className="form-check-label" htmlFor="others">
                      Others
                    </label>
                  </div>
                </div>
              </div>
              <div className=' col-sm-12 mb-3'>
                <label className="form-label fw-semibold" htmlFor="message">Message</label>
                <textarea type="text" rows={"4"} placeholder="I need some help about" name="message" required className='form-control' id="message" />
              </div>
            </div>
            <button className='btn btn-primary mb-3 me-0 float-end ' type="Submit">Send Messsage</button>
          </form>
        </div>
        <div className='col-md-4 form-gradien rounded-4'>
          <div className=' p-3 text-light'>
          <div><h4>Get in touch</h4>
          <p> We look forward to connecting with you and helping in any way we can.</p></div>
          <div className=''>
            <b className='text-small'>Email</b>
            <p>Manims211@gmail.com</p>
          </div>
          <div className=''>
            <b className='text-small'>Call us at </b>
            <p>+917986626162<br/>+917986626162</p>
          </div>
          <div className=''>
            <b className='text-small'>Our timing</b>
            <p>09:00AM to 06:30 PM</p>
          </div>
          <div className=''>
            <b className='text-small'>Social Media </b>
            <div className='d-flex w-50'>
            <div className='me-3 fs-5' ><i className="bi bi-instagram"></i></div>
            <div className='me-3 fs-5' ><i class="bi bi-linkedin"></i></div>
            <div className='me-3 fs-5' > <i class="bi bi-whatsapp"></i></div> 
           
            </div>
            
          </div>
          </div>
        </div>
       
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact