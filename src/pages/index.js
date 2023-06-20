import React from "react"
import Head from "next/head"


const Home=()=> {
  <Head>

<title>FusionWebz - Professional Website Creation Services</title>

<meta name="description" content="FusionWebz offers professional website creation services for individuals and businesses. We design and develop visually stunning and user-friendly websites to help you establish a strong online presence. Contact us for custom web design solutions."/>
<meta name="keywords" content="website creation,fusionwebz, professional web design, web development, online presence, custom websites"/>
<meta property="og:title" content="FusionWebz - Professional Website Creation Services"/>
<meta property="og:description" content="FusionWebz offers professional website creation services for individuals and businesses. We design and develop visually stunning and user-friendly websites to help you establish a strong online presence. Contact us for custom web design solutions."/>
{/* include company images */}
<meta property="og:image" content="https://fusionwebz.com/banner1.png"/>
<meta property="og:url" content="https://fusionwebz.com"/>

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
 
</Head>
  return (<>
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-12  sm:py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="undraw_hero.png" />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Website for anyone</h1>
        <p className="mb-8 leading-relaxed">FusionWebz offers professional website creation services for individuals and businesses. We design and develop visually stunning and user-friendly websites to help you establish a strong online presence. Contact us for custom web design solutions.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={(()=>{location.href='https://wa.me/+918146097261'})}>Contact us</button>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        </div>
      </div>
    </div>
  </section>
  {/* <section>
    <img className="banner" src="banner1.png" />

  </section> */}
  </>
    
  )
}
export default  Home
