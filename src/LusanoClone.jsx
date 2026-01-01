import furniture2 from '../public/images/furniture2.avif'
import furniture1 from '../public/images/furniture1.avif'
import furniture3 from '../public/images/furniture3.avif'
import furniture4 from '../public/images/furniture4.avif'
import furniture5 from '../public/images/furniture5.avif'
import furniture6 from '../public/images/furniture6.avif'       
import furniture7 from '../public/images/furniture7.avif'
import furniture8 from '../public/images/furniture8.avif'
import furniture9 from '../public/images/furniture9.avif'
import furniture10 from '../public/images/furniture10.avif'
import furniture11 from '../public/images/furniture11.avif'
import furniture12 from '../public/images/furniture12.avif'       
import { GiHamburgerMenu } from "react-icons/gi";
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import furnitureNext from '../public/images/nextFurniture.avif'

const LusanoClone = () => {
    const products = [
        {
            name: 'Selma Upholstered Bed',
            images: [furniture1, furniture2, furniture3, furniture4, furniture5, furniture6]
        },
        {
            name: 'Selma Side Table',
            images: [furniture7, furniture8, furniture9, furniture10, furniture11, furniture12]
        }
    ]
    const [activeProduct, setActiveProduct] = useState(0)
      const [isTransitioning, setIsTransitioning] = useState(false)
    console.log('Active Product:', activeProduct)
    const images = products[activeProduct].images
    console.log('Images for Active Product:', images)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const imagesRef = useRef([])
    const containerRef = useRef()
    const nextImageRef = useRef()
    const Onclick =()=>{
       if (isTransitioning) return // Prevent multiple clicks
        
        setIsTransitioning(true)
        
        const container = containerRef.current
        const nextImage = nextImageRef.current
        if (!container || !nextImage) return
        
        // Kill all ScrollTriggers first
        ScrollTrigger.getAll().forEach(st => st.kill())
        
        const tl = gsap.timeline({
            onComplete: () => {
                // Update state after animation completes
                setCurrentImageIndex(0)
                setActiveProduct((prev) => (prev + 1) % products.length)
                setIsTransitioning(false)
                
                // Force scroll to top
                window.scrollTo(0, 0)
                
                // Refresh ScrollTrigger
                setTimeout(() => {
                    ScrollTrigger.refresh()
                }, 100)
            }
    })
    
        // // Step 1: Fade out everything except next image (0.8 seconds)
        tl.to(['.line', '.line2', '.divider', '#image', '#number', '#range', '#scroll', '#deets', '#np', '#time'], {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
        
           // Step 2: Fade out all images in container
        .to(imagesRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
        }, "-=0.2")
        // Step 3: Scale up the next image from its position to container size
        tl.to(nextImage, {
            scale: 5,
            y: -500,
            duration: 1.2,
            ease: 'power3.Out'
        },"-=0.1")
        
        // Step 4: Fade in all elements
        .set([ '.line', '.line2', '.divider', '#image', '#np', '#number', '#deets', '#range', '#scroll', '#time'], {
            opacity: 1
        })
          .set(imagesRef.current, {
            opacity: 1
        },'+=0.2')
       
  }
    
     useEffect(() => {
        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        
        return () => lenis.destroy();
      }, []);
    useGSAP(()=>{
       const ctx = gsap.context(() => {
            const split = new SplitText('.line', { type: 'lines', linesClass: 'line', mask:'lines' });
            const split2 = new SplitText('.line2', { type: 'lines', linesClass: 'line', mask:'lines' });
             gsap.set(nextImageRef.current, {
            scale: 1,
            y: 0
       }) // slight delay before resetting

          
            gsap.set(split.lines, {
                opacity: 0, 
                y: 20,
            })
            gsap.set('.divider', {
                opacity: 0, 
                y: 20,
            })
            gsap.set(split2.lines, {
                opacity: 0, 
                y: 20,
            })
            gsap.set('#image', {
                opacity: 0, 
                height: 0,
            })

            ScrollTrigger.create({
                trigger: "#section",
                start: "top top",
                end: `+=${window.innerHeight * 6}`,
                markers:true,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress
                    const container = containerRef.current
                    
                    if (container) {
                        const maxScroll = container.scrollHeight - container.clientHeight
                        const scrollAmount = progress * maxScroll

                        const imageHeight = 650
                        const gapHeight = 8
                        const itemHeight = imageHeight + gapHeight
                        const topOffset = 60
                        
                        const adjustedScroll = scrollAmount + topOffset
                        const activeIndex = Math.floor(adjustedScroll / itemHeight)
                        const clampedIndex = Math.min(Math.max(activeIndex, 0), images.length - 1)
                        setCurrentImageIndex(clampedIndex)
                        
                        gsap.to(container, {
                            y: -scrollAmount,
                         opacity:1
                        
                        })
                    }
                    
                    gsap.to(split.lines, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.inOut',
                        stagger: 0.05,
                    })
                    gsap.to(split2.lines, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.inOut',
                        stagger: 0.05,
                    })
                    gsap.to('.divider', {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.inOut',
                    })
                    gsap.to('#image', {
                        opacity: 1,
                        height: 120,
                        duration: 1.5,
                        ease: 'power3.inOut'
                    })
                }
            })
        })
        
        // Cleanup function - context.revert() handles everything
        return () => {
            ctx.revert()
        }
    },[activeProduct, images.length])
  return (
    <div id='section' className='bg-[#f7f4ef] flex justify-between px-4' style={{ minHeight: '100vh' }}>
        <div className='flex flex-col flex-1 mt-4 items-start mb-4 justify-between'>
         <div className='flex flex-col text-[#4a2214] w-[50%] items-start gap-4'> 
                    <h1 className='line uppercase text-[#4a2214] font-semibold'>Lusano</h1>
      <p id='close' className='line text-[#4a2214] font-garamond underline'>Close</p>
      <div id='data' className='flex justify-between text-[#4a2214] gap-3 items-start'>
        <span className='line font-'>i</span>
        <p className='line'>Tailored upholstery meets clean wood structure. Designed for minimal living. Built-in storage, push to open drawers with inlay leather, brings comfort and clarity to the modern bedroom.</p> </div>
        <p className='line ml-3' id='serial'>Serial Number and Certificate of Auhenticity, Year 2025. Handcrafted in Los Angeles</p>  </div>
        <div id='walnut' className='text-[#4a2214] flex items-center gap-3'>
            <span className='line'>ii</span>
            <p className='line'>Natural Walnut</p>
        </div>
        <div className='text-[#4a2214] flex items-start flex-col gap-2'>
            <p id='detail' className='line'>(Detail)</p>
            <div className='flex gap-4 items-end'>
                <img id='image' src={furniture2} className='w-[100px] h-[120px] object-cover' alt="" />
                <p id='download' className='line underline'>Download Spec Sheet</p>
                <p id='underline' className='line underline'>Finishes</p>
            </div>
        </div>
     
        </div>
     <div className='flex relative flex-col flex-1 items-center mt-4' style={{ position: 'relative', height: '100%' }}>
              <div className='flex relative items-center text-[#4a2214] gap-6 mb-4 border-0 rounded-xl px-8 py-1' style={{ 
          zIndex: 100,
          background: 'rgba(221, 213, 206, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          <GiHamburgerMenu />
          <p>{products[activeProduct].name}</p>
        </div>
          <div ref={containerRef} className='w-[600px] h-full items-center flex flex-col gap-2'  style={{ 
    position: 'absolute',  // ← Key change
   top: '60px',                // ← Hits top of parent
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10              // ← Lower than hamburger
  }}>
            {images.map((img, index) => (
              <img 
                key={index}
                ref={(el) => imagesRef.current[index] = el}
                src={img} 
                className='w-[600px] h-[800px] object-cover'
                style={{ willChange: 'transform' }}
                alt="" 
              />
            ))}
            <p id='np' className='text-sm text-[#4a2214]'>Next Product</p>
                <img onClick={Onclick} id='next' ref={nextImageRef} src={furnitureNext} className='w-[100px] h-[105px] object-cover mt-2' alt="" style={{ transformOrigin: 'center', zIndex: 1000  }} />
            {/* <div onClick={Onclick} className='w-full mt-10 relative flex flex-col bg-[#f7f4ef] items-center cursor-pointer hover:opacity-80 transition-opacity' style={{ height:'200px', minHeight:'200px' }} >
                <p id='np' className='text-sm text-[#4a2214]'>Next Product</p>
                <img id='next' ref={nextImageRef} src={furnitureNext} className='w-[100px] h-[105px] object-cover mt-2' alt="" style={{ transformOrigin: 'center', zIndex: 1000  }} />
            </div> */}
        </div>
    
       
      </div>
      <div className='flex flex-col mt-4 mb-4 flex-1 justify-between text-[#4a2214] items-end'>
        <div className='flex justify-between gap-15 items-center'>
          <p id='number' className='line2 text-6xl'>{String(currentImageIndex + 1).padStart(2, '0')}</p>
          <ul className='flex flex-col items-end gap-4'>
            <li id='time'><span>13:16</span> Los Angeles</li>
            <li className='line2' id='range'>{String(currentImageIndex + 1).padStart(3,'0')}-{String(images.length).padStart(3,'0')}</li>
            <li className='line2' id='scroll'>(Scroll)</li>
          </ul>
        </div>
        <div id='deets'>
          <h1 id='title' className='line2 text-2xl mb-4'>{products[activeProduct].name}</h1>
          
          <div id='style'>
            <div className='flex justify-between items-center'>
              <p className='line2'>Style</p>
              <p className='line2'>5.05</p>
            </div>
            <div className='divider h-[2px] bg-[#4a2214]' />
          </div>

          <div id='size'>
            <div className='flex justify-between items-center'>
              <p className='line2'>Size</p>
              <p className='line2'>CA King +</p>
            </div>
            <div className=' divider h-[2px] bg-[#4a2214]' />
          </div>

          <div id='dimensions'>
            <div className='flex justify-between items-center'>
              <p className='line2'>Dimensions</p>
              <p className='line2'>138"W x 90"D x 42"H</p>
            </div>
            <div className='divider h-[2px] bg-[#4a2214]' />
          </div>

          <div id='com'>
            <div className='flex justify-between items-center'>
              <p className='line2'>COM / COL</p>
              <p className='line2'>13 YDS / 234 SF</p>
            </div>
            <div className=' divider h-[2px] bg-[#4a2214]' />
          </div>

          <div id='materials'>
            <div className='flex justify-between items-center'>
              <p className='line2'>Materials</p>
              <p className='line2'>Options +</p>
            </div>
            <div className='divider h-[2px] bg-[#4a2214]' />
          </div>

          <div id='button' className='bg-[#4a2214] px-10 py-2 mt-4 cursor-pointer hover:bg-[#5a3224] transition-colors'>
            <p className='text-white'>Inquire About Product</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LusanoClone
