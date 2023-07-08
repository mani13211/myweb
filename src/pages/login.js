import React from 'react'
import Head from 'next/head'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var jwt = require('jsonwebtoken');
const  Login=()=> {
    const router = useRouter()
    useEffect(() => {
        if( localStorage.getItem("token")){
          router.push("/admin")
        }
      }, [])
const [name, setname] = useState("")
const [password, setpassword] = useState("")


  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    const data={name:name,password:password}
    try {
        const response = await fetch( `${process.env.NEXT_PUBLIC_HOST}/api/login`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const result = await response.json();
        console.log(result)
        if(result.success == true){
            
            localStorage.setItem("token",result.token)
            
            toast.success( result.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(() => {
                    router.push("/admin")
                    
                }, 1000);
                

        }else{
            toast.error( result.message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }
       
        console.log("Success:", result.message);
      } catch (error) {
        console.error("Error:", error);
      }
    setname("")
    setpassword("")


  }

  return (
    <>
    
    <div className=' container m-auto'>
       
        <form  className=' w-50 m-auto'onSubmit={handleSubmit} >
        <p className='mb-3  fw-bold fs-3'>Login here</p>
            <div className='mb-3'>
                <label className="form-label" htmlFor='email'>Email</label>
                <input type="text" value={name} className='form-control' onChange={((e)=>{setname(e.target.value)})} name="email" id="email"/>
            </div>
            <div className='mb-3'>
                <label className="form-label" htmlFor='password'>Password</label>
                <input type="password"  value={password} className='form-control' onChange={((e)=>{setpassword(e.target.value)})} name="password" id="password"/>
            </div>
            <div className='mb-3 mt-3 text-end'><button className='btn btn-primary'>Submit</button></div>
            <hr/>
        </form>
        
       

    </div>
    </>
  )
 
}

export default Login