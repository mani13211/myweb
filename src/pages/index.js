import React from "react"
import Head from "next/head"


const Home=()=> {
  <Head>

  <title>WebBuilder.com - Professional Website Creation Services</title>
  <meta name="description" content="WebBuilder.com offers professional website creation services for individuals and businesses. Get a visually stunning and user-friendly website that helps you establish a strong online presence. Contact us for custom web design and development solutions."></meta>
  <meta name="keywords" content="web builder, website creation, professional web design, web development, online presence, custom websites"/>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
 
</Head>
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-12  sm:py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="undraw_hero.png" />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
    
  )
}
export default  Home
