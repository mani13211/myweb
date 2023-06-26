import React, { useEffect, useState } from "react"
import Head from "next/head"
import Script from "next/script"
import Slider from "react-slick"
import { FiSliders } from "react-icons/fi"
import Image from "next/image"
import { MdOutlineDesignServices, MdMobileFriendly, MdOutlineEditNote } from "react-icons/md"
const Home = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false,
    slidesToScroll: 1,
     autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false
  };

  const [model, setmodel] = useState(true)


  return (<>


    <Head>
      <title>FusionWebz - Professional Website Creation Services</title>
      <meta name="google-site-verification" content="EFqwTpYdM_W33vPB1iL8IMcVPXuz42x6ZXNmro-MnjQ" />

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
    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></Script>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></Script>

    {model && (
      <div className="model">
        <div className="model-body">
          <p> this website is under construction</p>
          <button className="btn btn-primary  " onClick={(() => setmodel((false)))}> Get it</button>
        </div>

      </div>
    )}

    <section className="text-gray-600 body-font slider ">
      <div className="container">
        <Slider  {...settings}>
          <div className="container p-0">
            <div className="row">
              <div className="col-md-6">
                <div className="wrapper">
                  <h1 className="">Welcome to FusionWebs</h1>
                  <p className="mb-8 max-w-md leading-relaxed text-gray-300">At FusionWebs, we believe that every business deserves a stunning online presence. We specialize in creating beautiful, functional websites that help our clients succeed in the digital world. Whether you are a small startup or a large enterprise, we have got you covered.</p>

                  <button className="rounded-0 btn btn-primary btn-lg">Get Started</button>

                </div>

              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
          <div className="container p-0">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <div className="wrapper">
                  <h1 className="">Professional Website Design</h1>
                  <p className="">Stand out from the crowd with a professionally designed website that reflects your brand identity. Our team of expert designers will work closely with you to create a visually appealing and user-friendly website that engages your visitors and drives conversions. Let us bring your vision to life.</p>

                  <button className="rounded-0 btn btn-primary btn-lg">Check Portfolio</button>

                </div>

              </div>
            </div>
          </div>
          <div className="container p-0">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <h1 className="">Affordable Web Solutions</h1>
                <p className="">We believe that high-quality web design should not break the bank. Our affordable web solutions ensure that you get the best value for your investment. Whether you need a simple brochure website or a complex e-commerce platform, we offer competitive pricing without compromising on quality.</p>
                <div className="flex justify-center">
                  <button className="rounded-0 btn btn-primary btn-lg">Request a Quote</button>

                </div>

              </div>

            </div>
          </div>
        </Slider>
      </div>


    </section>
    <section className="">
      im linker
    </section>
    <section className="aboutsection">
      <div className="row contianer">
        <div className="col-md-6 p-3">

          <img src="/codeman1.jpg" className="img-fluid mb-3" alt="Picture1" />
        </div>
        <div className="col-md-6 ">
          <span> Welcome to FusionWebs – </span>
          <h3 className="mb-3"> Your Gateway to a Dynamic Online Presence!</h3>
          <p className="leading-relaxed text-gray-300 mb-3">Our mission is simple yet powerful: to make high-quality website solutions accessible to everyone. We believe that every business deserves a visually stunning, user-friendly, and results-driven website that sets them apart from the competition. We are committed to delivering exceptional web experiences that not only meet our clients unique needs but also exceed their expectations.</p>
          <button className="btn btn-primary mb-3"> Lets start</button>
        </div>
      </div>
    </section>
    <section className="accordians">
      <div className="flex flex-wrap w-full  mb-4  text-center">
        <div className="text-center subtitle-faq "><div className="div div1"></div>Faq<div className="div div2"></div></div>
        <h3 className="">Frequently asked questions</h3>

      </div>
      <div className="accordion accordian-container container" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Can you help with website hosting and domain registration?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Absolutely!</strong>   We offer website hosting services and can assist you with domain registration as well. Our hosting packages are reliable, secure, and tailored to meet your specific needs. We can help you choose the right domain name and handle all the technical aspects to ensure your website is up and running smoothly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Do you provide website maintenance services?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Yes,</strong>  we offer comprehensive website maintenance services to keep your website running smoothly. Our maintenance packages include routine updates, security patches, regular backups, and technical support. We understand that websites require continuous attention to ensure optimal performance and security. With our ongoing maintenance services, you can focus on your core business while we take care of keeping your website up-to-date and secure.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Can I update my website content myself after its launched?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Yes, definitely!</strong>  We provide user-friendly content management systems (CMS) that allow you to update and manage your website content with ease. We will provide training and support to familiarize you with the CMS and its functionalities. You will be able to add new pages, edit existing content, upload images, and more. We believe in empowering our clients to have control over their website content so that they can keep their website fresh and up to date.
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className="getintouchseaction p-3">

      <div className=" text-center text-white px-5 py-2">
        <h4 className="mb-3">
          Get in Touch
        </h4>
        <p className="mb-3">Feel free to ask us about our portfolio and previous client projects. We are proud of the work we have done and would be happy to share it with you.</p>
        <button className="  btn btn-primary">Contact Us</button>
      </div>
    </section>
    {/*
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
    */}








  </>

  )
}
export default Home
