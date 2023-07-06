import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Script from 'next/script'
function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
 }
const  Admin=()=> {
const [name, setname] = useState("")
const [email, setemail] = useState("")

const onSignIn=(googleUser)=> {
    console.log("i m working")
    var profile = googleUser.getBasicProfile();
    setname(profile.getName())
    setemail(profile.getEmail())
  }

  return (
    <><Head>
        <meta name="google-signin-client_id" content=""></meta>
    </Head>
    <div id="g_id_onload"
         data-client_id="744676894194-f7jaich4inaqdibgf2se1kfno531p3g2.apps.googleusercontent.com"
         data-ux_mode="redirect"
         data-login_uri="http://localhost:3000/profile">
        
    </div>
    <Script src="https://accounts.google.com/gsi/client" async defer></Script>
    <div className=' container m-auto'>
       
        <form  className=' w-50 m-auto'>
        <p className='mb-3  fw-bold fs-3'>Login here</p>
            <div className='mb-3'>
                <label className="form-label" htmlFor='email'>Email</label>
                <input type="text" className='form-control' onChange={((e)=>{e.target.value})} name="email" id="email"/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='password'>Password</label>
                <input type="password" className='form-control' onChange={((e)=>{e.target.value})} name="password" id="password"/>
            </div>
            <div className='mb-3 mt-3 text-end'><button className='btn btn-primary'>Submit</button></div>
            <hr/>
        </form>
        
        <div className='w-50 mb-3 m-auto'>

            <div className="g_id_signin" data-type="standard" > Sign in with google</div>
        </div>


        <div className='data'>
            <h5>feteched data is</h5>
            <p > Name is :<b id="name">{name}</b> </p>
            <p > email is :<b id="email">{email}</b> </p>

        </div>
        {/* <a href="#" onClick={signOut()}>Sign out</a> */}

    </div>
    </>
  )
 
}

export default Admin