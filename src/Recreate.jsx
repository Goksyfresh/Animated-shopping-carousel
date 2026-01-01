import React, { useState } from 'react'
import ShoppingBag from '../public/images/Bag.png'
import SearchIcon from '../public/images/icons_search.png'
import NextLinkIcon from '../public/images/next-link.png'
import BestSeller from './BestSeller'
import armchair from '../public/images/sakarias-armchair.png'
import baltsar from '../public/images/baltsar.png'
import anjay from '../public/images/anjay.png'
import nyantuy from '../public/images/yantuy.png'
import testimony1 from '../public/images/testimony1.png'
import group1 from '../public/images/group1.png'
import group2 from '../public/images/group2.png'
import group3 from '../public/images/group3.png'
import testimonial1 from '../public/images/testimonial1.png'
import testimonial2 from '../public/images/testimonial2.png'
import testimonial3 from '../public/images/testimonial3.png'
import avatar1 from '../public/images/avatar1.png'
import avatar2 from '../public/images/avatar2.png'
import avatar3 from '../public/images/avatar3.png'
import star from '../public/images/star.png'
import facebookLogo from '../public/images/facebook.png'
import twitterLogo from '../public/images/twitter.png'
import instagramLogo from '../public/images/instagram.png'
import { useGSAP } from '@gsap/react'
import { SplitText, ScrollTrigger} from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(SplitText)
const Recreate = () => {
    const [activeBestSeller, setActiveBestSeller]= useState(0)

    
   
    const bestSellers = ['Chair', 'Beds', 'Sofa', 'Lamp'];

    const handleClick = (index) =>{
        setActiveBestSeller(index)
    }

   
    useGSAP(()=>{
 const splitLines = new SplitText('#headerTypo',{
        type:'lines', linesClass: 'line', mask:'lines'
    })

    const scrollTl = gsap.timeline(
      {
        scrollTrigger:{
          trigger:"#bestSeller",
          start:"top top",

        }
      }
     
    )
    scrollTl.fromTo('#chairs div',{
      opacity:0
    },{
      opacity:1,
      stagger:0.05,
      duration:1,
      ease:"power1.inOut"
    })
    
    gsap.fromTo(splitLines.lines,{
        opacity:0,
        y:20,
    },{
        opacity:1,
        y:0,
        duration:1,
        ease:'power2.inOut',
        stagger:0.5
    })
    gsap.fromTo('.typography p',{
        opacity:0
    },{
        opacity:1, duration:1, ease:"power2.out", delay:1.5
    })
    },[])
    
  return (
    <div>
      <section className='hero relative w-[100%] h-[100vh] p-7'>
<nav className='flex justify-between items-center '>
    <div className='text-white font-bold text-sm lg:text-xl'>
        Panto
    </div>
    <div>
        <ul className='flex gap-8 justify-center text-white text-[10px] lg:text-sm items-center'>
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    </div>
    <div>
        <img src={ShoppingBag} alt="" className='lg:w-6 lg:h-6 w-4 h-4 object-cover'/>
    </div>
</nav>
<div className='typography m-20 flex text-center flex-col items-center justify-center'>
   
<h1 id='headerTypo' className='text-white font-bold text-2xl lg:text-8xl'>Make Your Interior More Minimalistic & Modern</h1>
   
            <p className='text-white mt-2 lg:text-xl text-[10px] w-[75%]'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
  

    <div className='searchButton mt-2 bg-[rgba(255, 255, 255,, 0.2)] backdrop-blur-2xl lg:w-[320px] lg:h-[40px] w-[200px] p-4 border-white-1 rounded-full flex items-center justify-between'> 
        <p className='text-white lg:text-xl text-sm'>Search furniture</p>
        <div className='searchContainer bg-[#E58411] border-0 w-7 h-7 rounded-4xl flex justify-center items-center'><img src={SearchIcon} alt="Search Icon" className='w-3 h-3' /></div>
    </div>
</div>
      </section> 
      <div className=' details h-[50vh] lg:flex justify-center px-10 py-4 items-center gap-4'>
        <h1 className='font-bold text-xl lg:text-2xl mr-10'>Why Choosing Us</h1>
        <div className='flex flex-col items-start'>
        
 <h3 className='font-bold  text-[18px] lg:text-xl mb-2'>Luxury Facilities</h3>
            <p className='text-sm text-[#1E1E1E]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            <div className='flex justify-center items-center mt-2 gap-2'><p className='lg:text-sm text-[14px]'>More Info</p>
            <img src={NextLinkIcon} alt="" />
            </div>
           
        </div>
         <div className='flex flex-col items-start'>
            <h3 className='font-bold text-[18px] lg:text-xl text-xl mb-2'>Affordable Price</h3>
            <p className='text-sm text-[#1E1E1E]'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
            <div className='flex justify-center items-center mt-2 gap-2'><p className='lg:text-sm text-[14px]'>More Info</p>
            <img src={NextLinkIcon} alt="" />
            </div>
        </div>
   
      <div className='flex flex-col items-start'>
            <h3 className='font-bold text-[18px] lg:text-xl text-xl mb-2'>Many Choices</h3>
            <p className='text-sm text-[#1E1E1E]'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
            <div className='flex justify-between items-center mt-2 gap-2'><p className='lg:text-sm text-[14px]'>More Info</p>
            <img src={NextLinkIcon} alt="" />
            </div>
        </div>
      </div>
      <section id='bestSeller' className='flex justify-center items-center w-full h-full flex-col px-6 py-18 bg-[#F7F7F7]'>
        <h1 className='font-bold text-2xl '>Best Selling Products</h1>
        <div className='bg-[#EEEEEE] py-1 px-2 rounded-full mt-5'>
            <ul className='flex justify-center items-center text-[#1E1E1E] text-sm gap-7'>
                {bestSellers.map((item, index)=>(
                    <li className={index==activeBestSeller? 'bg-white p-2 px-4 rounded-full': 'px-2'} onClick={()=>handleClick(index)} key={index}>{item}</li>
                ))}

            </ul>
        </div>
        <div id='chairs' className='lg:flex justify-center items-center gap-6 mt-8'>
          <div> <BestSeller img={armchair} title='Skarias Armchair' price='392'/></div>
          <div><BestSeller img={baltsar} title='Baltsar Chair' price='299'/></div>
          <div><BestSeller img={anjay} title='Anjay Chair' price='519'/></div>
          <div>      <BestSeller img={nyantuy} title='Nyantuy Chair' price='921'/></div>
        </div>
       <div className='flex justify-center items-center gap-2 mt-8'>
        <p className='text-[#E58411]'>View All</p>
        <img src={NextLinkIcon} alt="" />
       </div>
      </section>
      <section className='py-10 md:py-20 lg:py-40 px-4 md:px-6 lg:px-10 xl:px-0 w-full'>
      <div className='flex flex-col lg:flex-row justify-between mb-10 items-center gap-8 lg:gap-0'>
        <div className='relative w-full lg:w-auto flex justify-center lg:justify-start'>
          <div className='bg-[#F7F7F7] rounded-xl w-[300px] h-[260px] md:w-[400px] md:h-[350px] lg:w-[475px] lg:h-[412px] hidden lg:block absolute -top-10 md:-top-16 lg:-top-20 -left-8 md:-left-12 lg:-left-15 z-0'/> 
          <div className='bg-[#F7F7F7] rounded-xl w-[300px] h-[190px] md:w-[420px] md:h-[255px] lg:w-[495px] lg:h-[300px] absolute hidden lg:block top-16 md:top-20 lg:top-22 -right-8 md:-right-12 lg:-right-15 z-0'/>
          <div className='w-[320px] md:w-[480px] lg:w-[600px] h-auto lg:h-[420px] z-10 relative top-0 -left-1 md:-left-2 lg:-left-3'>
            <img src={testimony1} className='w-full h-auto rounded-lg' alt="" />
          </div>
        </div>
        
        <div className='w-full lg:w-[40%] flex flex-col justify-center items-start px-4 lg:px-0'>
          <p className='text-[#E58411] font-semibold mb-4 text-sm md:text-base'>EXPERIENCES</p>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl w-full md:w-[80%] lg:w-[60%] mb-4'>
            We Provide You The Best Experience
          </h1>
          <p className='text-[#1E1E1E] text-sm md:text-base w-full md:w-[90%] lg:w-[70%] mb-4'>
            You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
          </p>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-[#E58411]'>More Info</p>
            <img src={NextLinkIcon} className='w-4 h-4' alt="" />
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row justify-between mt-10 md:mt-16 lg:mt-20 items-center gap-8 lg:gap-0'>
        <div className='w-full lg:w-[40%] flex flex-col px-4 md:ml-6 lg:ml-14 items-start'>
          <p className='text-[#E58411] font-semibold mb-4 text-sm md:text-base'>MATERIALS</p>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl w-full md:w-[80%] lg:w-[60%] mb-4'>
            Very Serious Materials For Making Furniture
          </h1>
          <p className='text-[#1E1E1E] text-sm md:text-base w-full md:w-[90%] lg:w-[70%] mb-4'>
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
          </p>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-[#E58411]'>More Info</p>
            <img src={NextLinkIcon} className='w-4 h-4' alt="" />
          </div>
        </div>
        
        <div className='relative flex items-center justify-center gap-2'>
          <div className='bg-[#F7F7F7] rounded-xl w-[260px] h-[270px] md:w-[340px] md:h-[350px] lg:w-[405px] lg:h-[420px] absolute hidden lg:block -top-10 md:-top-16 lg:-top-20 -right-1 z-0'/> 
          <div className='z-10 flex flex-col items-center justify-center relative gap-2'>
            <img src={group1} className='w-[120px] md:w-[160px] lg:w-[200px] rounded-lg' alt="" />
            <img src={group2} className='w-[120px] md:w-[160px] lg:w-[200px] rounded-lg' alt="" />
          </div>
          <div className='z-10'>
            <img src={group3} className='w-[150px] h-[300px] md:w-[160px] lg:w-[250px] rounded-lg' alt="" />
          </div>
        </div>
      </div>
    </section>
      <section className='flex flex-col items-center justify-center'>
        <h1 className='uppercase text-[#E58411] font-semibold'>testimonials</h1>
        <p className='font-bold text-2xl mt-2 mb-4'>Our Client Reviews</p>

        <div className='flex flex-col lg:flex-row justify-center items-center mb-20 gap-4 mt-10'> 
            <div className='relative'>
                 <img src={testimonial1} className='lg:w-[350px] lg:h-[450px] w-[300px] h-[375px] object-cover' alt="" />
                  
            <div className='absolute flex flex-col items-center justify-center p-2 px-4 bg-white rounded-2xl bottom-3 -translate-x-1/2 left-1/2 lg:h-[200px] lg:w-[330px] h-[175px] w-[275px]'>
            <div className='p-2 rounded-full -top-8 bg-white absolute'>
<img src={avatar1} alt="" />
            </div>
            <h1 className='font-bold text-xl mt-6'>Bang Upin</h1>
            <p className='text-sm text-[#1E1E1E] mt-1 lg:mt-2'>Pedagang Asongang</p>

            <p className='text-[#1E1E1E] text-center mt-1 lg:mt-2'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
<img src={star} className= 'w-[80px] h-[15px] mt-2 lg:mt-4' alt="" />
            </div>
            </div>

               <div className='relative'>
                 <img src={testimonial2} className='lg:w-[350px] lg:h-[450px] w-[300px] h-[375px] object-cover' alt="" />
                  
            <div className='absolute flex flex-col items-center justify-center p-2 px-4 bg-white rounded-2xl bottom-3 -translate-x-1/2 left-1/2 lg:h-[200px] lg:w-[330px] h-[175px] w-[275px]'>
            <div className='p-2 rounded-full -top-8 bg-white absolute'>
<img src={avatar2} alt="" />
            </div>
            <h1 className='font-bold text-xl mt-6'>Ibuk Sujikan</h1>
            <p className='text-sm text-[#1E1E1E] mt-1 lg:mt-2'>Ibu Rumah Tangga</p>

            <p className='text-[#1E1E1E] text-sm text-center mt-1 lg:mt-2'>“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“</p>
<img src={star} className= 'w-[80px] h-[15px] mt-2 lg:mt-4' alt="" />
            </div>
            </div>
             <div className='relative'>
                 <img src={testimonial3} className='lg:w-[350px] lg:h-[450px] w-[300px] h-[375px] object-cover' alt="" />
                  
            <div className='absolute flex flex-col items-center justify-center p-2 px-4 bg-white rounded-2xl bottom-3 -translate-x-1/2 left-1/2 lg:h-[200px] lg:w-[330px] h-[175px] w-[275px]'>
            <div className='p-2 rounded-full -top-8 bg-white absolute'>
<img src={avatar3} alt="" />
            </div>
            <h1 className='font-bold text-xl mt-6'>Mpok Ina</h1>
            <p className='text-sm text-[#1E1E1E] mt-1 lg:mt-2'>Karyawan Swasta</p>

            <p className='text-[#1E1E1E] text-center mt-1 lg:mt-2'>“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“</p>
<img src={star} className= 'w-[80px] h-[15px] mt-2 lg:mt-4' alt="" />
            </div>
            </div>
        </div>
      </section>
       <div className='bg-[#F7F7F7] w-full px-6 md:px-12 lg:px-20 py-10 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10'>
          {/* Brand */}
          <div className='flex flex-col gap-4 items-start'>
            <h1 className='font-bold text-xl'>Panto</h1>
            <p className='text-[#1E1E1E] text-sm lg:text-[15px]'>
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Services */}
          <ul className='flex flex-col gap-2'>
            <li className='text-[#F6973F] font-semibold text-base lg:text-[17px] mb-2'>Services</li>
            <li className='text-sm'>Email Marketing</li>
            <li className='text-sm'>Campaigns</li>
            <li className='text-sm'>Branding</li>
          </ul>

          {/* Furniture */}
          <ul className='flex flex-col gap-2'>
            <li className='text-[#F6973F] font-semibold text-base lg:text-[17px] mb-2'>Furniture</li>
            <li className='text-sm'>Beds</li>
            <li className='text-sm'>Chair</li>
            <li className='text-sm'>All</li>
          </ul>

          {/* Follow Us */}
          <ul className='flex flex-col items-start gap-3'>
            <li className='text-[#F6973F] font-semibold text-base lg:text-[17px] mb-2'>Follow Us</li>
            <li>
              <div className='flex items-center gap-2'>
                <img src={facebookLogo} className='w-4 h-4' alt="Facebook" />
                <span className='text-sm'>Facebook</span>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <img src={twitterLogo} className='w-4 h-4' alt="Twitter" />
                <span className='text-sm'>Twitter</span>
              </div>
            </li>
            <li>
              <div className='flex items-center gap-2'>
                <img src={instagramLogo} className='w-4 h-4' alt="Instagram" />
                <span className='text-sm'>Instagram</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className='flex flex-col md:flex-row w-full mt-8 gap-4 md:gap-0 items-center justify-between text-sm text-[#1E1E1E]'>
          <p>Copyright © 2021</p>
          <div className='flex gap-6'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
         </div>
  )
}

export default Recreate
