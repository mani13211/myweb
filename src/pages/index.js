import React, { useEffect ,useState} from "react"
import Head from "next/head"
import Slider from "react-slick"
import { FiSliders } from "react-icons/fi"
//import FAQ from "../pages/components/FAQ"

import Image from "next/image"
import {MdOutlineDesignServices,MdMobileFriendly,MdOutlineEditNote} from "react-icons/md"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
const Home = () => {
 
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
    slidesToScroll: 1,
    autoplay: true,
    arrows : false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    //pauseOnHover: true
  };
  // const [faqs, setFaqs] = useState([
  //   {
  //     question: "Can you help with website hosting and domain registration?",
  //     answer:
  //       "Absolutely! We offer website hosting services and can assist you with domain registration as well. Our hosting packages are reliable, secure, and tailored to meet your specific needs. We can help you choose the right domain name and handle all the technical aspects to ensure your website is up and running smoothly.",
  //     open: true
  //   },
  //   {
  //     question: "Can I update my website content myself after it's launched?",
  //     answer: " Yes, definitely! We provide user-friendly content management systems (CMS) that allow you to update and manage your website content with ease. We will provide training and support to familiarize you with the CMS and its functionalities. you will be able to add new pages, edit existing content, upload images, and more. We believe in empowering our clients to have control over their website content so that they can keep their website fresh and up to date.",
  //     open: false
  //   },
  //   {
  //     question:
  //       "Do you offer e-commerce website development?",
  //     answer: "Absolutely! We specialize in e-commerce website development. Whether you are starting an online store from scratch or looking to revamp your existing e-commerce website, we have the expertise to create a secure, user-friendly, and visually appealing online shopping experience. From product listings and shopping carts to secure payment gateways and inventory management, we can customize an e-commerce solution that meets your specific business needs.",
  //     open: false
  //   }
  // ]);

  // const toggleFAQ =  (index) => {
  //   setFaqs(
  //     faqs.map((faq, i) => {
  //       if (i === index) {
  //         faq.open = !faq.open;
  //       } else {
  //         faq.open = false;
  //       }

  //       return   faq;
  // }))}
const [model, setmodel] = useState(true)

  
  return (<>


<Head>
    <title>FusionWebz - Professional Website Creation Services</title>

    <meta name="description" content="FusionWebz offers professional website creation services for individuals and businesses. We design and develop visually stunning and user-friendly websites to help you establish a strong online presence. Contact us for custom web design solutions." />
    <meta name="keywords" content="website creation,fusionwebz, professional web design, web development, online presence, custom websites" />
    <meta property="og:title" content="FusionWebz - Professional Website Creation Services" />
    <meta property="og:description" content="FusionWebz offers professional website creation services for individuals and businesses. We design and develop visually stunning and user-friendly websites to help you establish a strong online presence. Contact us for custom web design solutions." />
    {/* include company images */}
    <meta property="og:image" content="https://fusionwebz.com/banner1.png" />
    <meta property="og:url" content="https://fusionwebz.com" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
  </Head>

{model && (
  <div className="model">
  <div className="model-body">
    <p> this website is under construction</p>
        <button className="inline-flex text-white bg-orange-500 border-0 py-1 px-6 focus:outline-none hover:bg-orange-600 rounded " onClick={(()=>setmodel((false)))}> Get it</button>
  </div>

</div>
)}
  
    <section className="text-gray-600 body-font slider">
      <div>
        <Slider  {...settings}>
          <div className="parent h-[80vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png')] bg-no-repeat bg-cover">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome to FusionWebs
                  {/* <br className="hidden lg:inline-block" />readymade gluten */}
                </h1>
                <p className="mb-8 max-w-md leading-relaxed text-gray-300">At FusionWebs, we believe that every business deserves a stunning online presence. We specialize in creating beautiful, functional websites that help our clients succeed in the digital world. Whether you are a small startup or a large enterprise, we have got you covered.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Get Started</button>
                  {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
              </div>
            </div>
          </div>
          <div className="parent h-[80vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png')] bg-no-repeat bg-cover">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Professional Website Design
                  {/* <br className="hidden lg:inline-block" />readymade gluten */}
                </h1>
                <p className="mb-8 text-gray-400 leading-relaxed">Stand out from the crowd with a professionally designed website that reflects your brand identity. Our team of expert designers will work closely with you to create a visually appealing and user-friendly website that engages your visitors and drives conversions. Let us bring your vision to life.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Explore Our Portfolio</button>
                  {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="parent h-[80vh] bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png')] bg-no-repeat bg-cover">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="" />
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Affordable Web Solutions</h1>
                <p className="mb-8 text-gray-400 leading-relaxed">We believe that high-quality web design should not break the bank. Our affordable web solutions ensure that you get the best value for your investment. Whether you need a simple brochure website or a complex e-commerce platform, we offer competitive pricing without compromising on quality.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Request a Quote</button>
                  {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>


    </section>
    <section className="px-0 py-2 sm: px-5 py-5">
      <div className="m-auto p-4 md:container md:p-6">
        <div className="container mb-5">
          <h2 className="text-center mb-3   text-2xl sm:text-3xl capitalize">website for everyone</h2>
          <p className="text-gray-500 mb-5  text-sm  md:w-4/5 m-auto text-center capitalize">Our mission is simple yet powerful: to make high-quality website solutions accessible to everyone. We believe that every business deserves a visually stunning, user-friendly, and results-driven website that sets them apart from the competition. We are committed to delivering exceptional web experiences that not only meet our clients  unique needs but also exceed their expectations.</p>
        </div>



        <div className="flex flex-wrap justify-center  my-0 mx-2 sm:my-4 sm:mx-4 ">

          <div className="xl:w-1/4 max-w-sm min-w-min lg:w-1/3 text-center md:w-1/2 sm:w-1/2 w-max py-2  px-0 sm:px-4  sm:py-4">
            <div className="bg-gray-100 w-[300px] md:w-[350px]  p-6 rounded-lg">
              <div className="w-max m-auto ">
                <div className="w-14 sm:w-20 sm:h-20 h-14 inline-flex items-center justify-center rounded-full bg-orange-500 text-orange-100 mb-5 flex-shrink-0">
                  <MdOutlineDesignServices className="text-xl sm:text-3xl" />
                  
                </div>
              </div>

              <h3 className="tracking-widest text-orange-500 text-xs font-medium title-font"> Professional Web Design</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Engaging and User-Friendly Website</h2>
              <p className="leading-relaxed text-base">Our expert designers create visually stunning and intuitive websites that leave a lasting impression on your visitors. We focus on seamless user experiences, compelling visuals, and effective call-to-actions to drive conversions.</p>
              <button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-5  focus:outline-none hover:bg-orange-600 rounded">Button</button>
            </div>
          </div>
          <div className="xl:w-1/4 max-w-sm min-w-min lg:w-1/3 text-center md:w-1/2 sm:w-1/2 w-max py-4 px-0 sm:px-4  sm:py-4">
            <div className="bg-gray-100  w-[300px] md:w-[350px]  p-6 rounded-lg">
              <div className="w-max m-auto ">
                <div className="w-14 sm:w-20 sm:h-20 h-14 inline-flex items-center justify-center rounded-full bg-orange-500 text-orange-100 mb-5 flex-shrink-0">
                  <MdMobileFriendly className="text-xl sm:text-3xl" />
                </div>
              </div>

              <h3 className="tracking-widest text-orange-500 text-xs font-medium title-font">Responsive & Mobile-Friendly</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Reach Customers on Any Device</h2>
              <p className="leading-relaxed text-base">With mobile usage on the rise, we ensure your website looks and functions flawlessly on all devices. Our responsive designs adapt to different screen sizes, providing a consistent and engaging experience for your audience.</p>
              <button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-5  focus:outline-none hover:bg-orange-600 rounded">Button</button>
            </div>
          </div>
          <div className="xl:w-1/4 max-w-sm min-w-min lg:w-1/3 text-center md:w-1/2 sm:w-1/2 w-max py-4  px-0 sm:px-4  sm:py-4">
            <div className="bg-gray-100 w-[300px] md:w-[350px] p-6 rounded-lg">
              <div className="w-max m-auto ">
                <div className="w-14 sm:w-20 sm:h-20 h-14 inline-flex items-center justify-center rounded-full bg-orange-500 text-orange-100 mb-5 flex-shrink-0">
                  <MdOutlineEditNote className="text-xl sm:text-3xl" />
                </div>
              </div>

              <h3 className="tracking-widest text-orange-500 text-xs font-medium title-font">Tailored to Your Needs</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4"> Unique Designs for Your Brand</h2>
              <p className="leading-relaxed text-base"> We believe in creating websites that reflect your brands personality and stand out from the competition. Our team works closely with you to understand your goals and preferences, crafting custom designs that align with your visio</p>
              <button className="flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-5  focus:outline-none hover:bg-orange-600 rounded">Button</button>
            </div>
          </div>


        </div>

      </div>
    </section>

    <section className="text-gray-600 body-font overflow-hidden bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png')] bg-no-repeat bg-cover">
      <div className="container px-5  py-12 sm:py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">

          <Image src="/codeman1.jpg" width={400} height={500} alt="Picture1" />




          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">


            <h2 className="text-sm title-font text-gray-400 tracking-widest">Welcome to FusionWebs – </h2>
            <h1 className="text-gray-100 text-3xl title-font font-medium mb-4"> Your Gateway to a Dynamic Online Presence!</h1>

            <p className="leading-relaxed text-gray-300 mb-4">Our mission is simple yet powerful: to make high-quality website solutions accessible to everyone. We believe that every business deserves a visually stunning, user-friendly, and results-driven website that sets them apart from the competition. We are committed to delivering exceptional web experiences that not only meet our clients unique needs but also exceed their expectations.</p>

            <div className="flex">
              <button className="flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Button</button>

            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="text-gray-600 body-font">
      <div className="container px-5  py-12 sm:py-24 mx-auto">
        <div className="flex flex-wrap w-full  mb-4 sm:mb-12 flex-col items-center text-center">
          <div className="lg:w-1/2 w-full leading-relaxed text-gray-500 flex items-center justify-center text-start "><div className="bg-gray-400 w-32 h-1 me-1"></div>Faq<div className="bg-gray-400 w-32 h-1 ms-1"></div></div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Frequently asked questions</h1>

        </div>
         <div className="faqs  p-2 sm:p-4">
        {/* {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))} */}
      </div>
      </div>
    </section>
    <section className=" p-8 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/dd/Code_presentation_background.png')] bg-no-repeat bg-cover">

      <div className="container text-center text-white px-5 py-2">
        <h2 className="text-xl mb-3">
        Get in Touch
        </h2>
        <p className="mb-3">Feel free to ask us about our portfolio and previous client projects. We are proud of the work we have done and would be happy to share it with you.</p>
        <button className="  flex mx-auto mt-6 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded">Contact Us</button>
      </div>
    </section>


 


  </>

  )
}
export default Home
