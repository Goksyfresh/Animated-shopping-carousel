import React, { use, useRef } from 'react'
import noise from '../public/images/noise.png'
import leftLeaf from '../public/images/hero-left-leaf.png'
import rightLeaf from '../public/images/hero-right-leaf.png'
import video from '../public/videos/output.mp4'
import mainHero from '../public/images/drink1.png'
import arrow from '../public/images/arrow.png' 
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const videoRef = useRef()

    const isMobile = useMediaQuery({maxWidth:767})
    useGSAP(()=>{
        const heroSplit= new SplitText('#title',{type:'chars, words'})
        const paraSplit = new SplitText('.subtitle',{type:'lines', linesClass:'lineChildren'})

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars,{
            yPercent:100,
            stagger:0.06,
            duration:1.8,
            ease:'expo.out',
        })

        gsap.from(paraSplit.lines,{
            yPercent:100,
            stagger:0.06,
            opacity:0,
            delay:0.5,
            duration:1.8,
            ease:'expo.out',
        })
        gsap.timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub:true,
            }
        })
        .to('.left-leaf',{y:-200},0)
        .to('.right-leaf',{y: 200},0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start: startValue,
                end: endValue,
                scrub:true,
                pin:true,
            }
        })
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                ease: 'none',
            }, 0);
        }
    },[])
  return (
    <>
    <section id='hero' className='noisy flex-center'>
  <h1 id='title' className="text-white font-modern-negra text-[235px] absolute top-7 left-1/2 -translate-x-1/2 uppercase">Mojito</h1>
  <img src={leftLeaf} className='left-leaf' alt="" />
  <img src={rightLeaf} className='right-leaf' alt="" />
{/* <img src={mainHero} className='absolute left-1/2 -translate-x-1/2 bottom-0'/> */}
<div className="body">
    <div className="content">
 <div className='hidden md:block space-y-5'>
<p>Cool.Crisp.Classic</p>
<p className='subtitle'>Sip the Spirit <br /> of Summer</p>
</div>
<div className="view-cocktails">
<p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
</p>
<a href="#cocktails">View Cocktails</a>
</div>

    </div>
   
</div>


<img src={arrow} className='absolute right-10 top-60' alt="" />
</section>
<div className="video absolute inset-0">
    <video src={video} playsInline muted ref={videoRef}></video>
</div>
</>
 
  )
}

export default Hero
