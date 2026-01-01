import React, { act, useEffect } from 'react'
import Image1 from '../public/images/motion1.jpg'
import Image2 from '../public/images/motion2.jpg'
import Image3 from '../public/images/motion3.jpg'
import Image4 from '../public/images/motion4.jpg'
import Image5 from '../public/images/motion1.jpg'
import Image6 from '../public/images/motion2.jpg'
import Image7 from '../public/images/motion3.jpg'
import Image8 from '../public/images/motion4.jpg'
import Image9 from '../public/images/motion1.jpg'
import Image10 from '../public/images/motion2.jpg'
import Image11 from '../public/images/motion3.jpg'
import Image12 from '../public/images/motion4.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/all'
gsap.registerPlugin(CustomEase);
const ImageHoverAnimation = () => {

const [activeIndex, setActiveIndex] = React.useState(0);

CustomEase.create(
  "hop",
  "M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0"
);

useGSAP(() => {
  if (activeIndex !== null) {
    // Step 1: Collapse to center (fast)
    gsap.to('.client-image-wrapper', {
      clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        // Step 2: Expand from center (smooth)
        gsap.to('.client-image-wrapper', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    });
  } else {
    // When mouse leaves, collapse to center
    gsap.to('.client-image-wrapper', {
      clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
      duration: 0.4,
      ease: 'power2.inOut'
    });
  }
}, [activeIndex]);



  
    const clients = [{client:'Native Instruments, ',
        img:Image1
    }, {client:'Oura, ', img:Image2}, {client:'Hender Scheme, ', img:Image3}, {client:'B&O Play, ', img:Image4}, {client:'Nothing, ', img:Image5}, {client:'Gentle Monster, ', img:Image6}, {client:'Officine Panerai, ', img:Image7}, {client:'Polestar, ', img:Image8}, {client:'Fragment Design, ', img:Image9}, {client:'Superfuture, ', img:Image10}, {client:'Bang & Olufsen, ', img:Image11}, {client:'Aesop', img:Image12}];
  return (
    <div className="relative w-full min-h-screen bg-white">
      <nav className='fixed top-0 p-10 z-20 flex w-full justify-between items-start'>
        <div className="logo">
            <a className=' uppercase text-xl inline-block' href="#">Nord</a>
        </div>
        <div className="nav-links flex gap-6">
<a className=' uppercase text-xl inline-block' href="#">Home</a>
<a className=' uppercase text-xl inline-block' href="#">Projects</a>
<a className=' uppercase text-xl inline-block' href="#">About Us</a>
        </div>
      </nav>
      <section className="clients relative flex flex-col justify-end items-start  gap-8 w-full p-10 overflow-hidden min-h-screen">
        <div className="clients-preview absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full h-full z-0 pointer-events-none">
          
            <div 
            
             className="client-image-wrapper absolute w-full h-full top-0 left-0 overflow-hidden">

    <img 
    className='client-image absolute w-full h-full object-cover pointer-events-none '
    src={activeIndex !== null ? clients[activeIndex].img : ''} alt="Client Image"
    /> 
            </div>
      
        </div>
         <div className="clients-list w-[70%] relative flex flex-col justify-start gap-4" style={{ zIndex: 100 }}>
              <div className="client-header">
              <p className='relative text-[#acacac] z-10 uppercase text-xl'>Trusted Us</p>
            </div>
        <div className="client-name z-20">
          
         {clients.map((client, index) => 
         
            <span key={index} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(0)} className="class-list relative text-5xl cursor-pointer inline-block">
                {client.client}
            </span>
        
             
         )}
          
        </div>
        </div> 
      </section>
        <footer className='fixed bottom-0 flex w-full justify-between items-start z-20 p-10'>
        <p className=' uppercase text-xl inline-block'>Experiment503</p>
        <p className=' uppercase text-xl inline-block'>Developed by Oyegoat</p>
      </footer>
    </div>
  )
}

export default ImageHoverAnimation
