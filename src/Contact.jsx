import React from 'react'
import footerRightLeaf from '../public/images/footer-right-leaf.png'
import footerLeftLeaf from '../public/images/footer-left-leaf.png'
import { openingHours, socials } from './constants/NavLinks'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact = () => {
    useGSAP(()=>{
         const textSplit = new SplitText('.content h2',{
        type:'words'
    })
    const footerTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:'#contact',
            start:"top center",
        },
        ease:"power1.inOut"
    })

    footerTimeline.from(textSplit.words,{
        opacity:0,
        yPercent:100,
        stagger:0.02
    })

     footerTimeline.from('#contact h3, #contact p',{
        opacity:0,
        yPercent:100,
        stagger:0.02
    })
     footerTimeline.to('#f-right-leaf',{
        y:-50,
       duration:1,
       ease:'power1.inOut'
    })
    footerTimeline.to('#f-left-leaf',{
        y:50,
       duration:1,
       ease:'power1.inOut'
    })
    },[])
   
  return (
  <footer id="contact">
<img src={footerRightLeaf} alt="Right leaf decoration" id='f-right-leaf' />
<img src={footerLeftLeaf} alt="Left leaf decoration" id='f-left-leaf' />
<div className="content">
    <h2>Where to Find Us</h2>
    <div>
        <h3>Visit Our Bar</h3>
        <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
    </div>
    <div>
        <h3>Contact Us</h3>
        <p>(123) 456-7890</p>
        <p>contact@ourbar.com</p>
    </div>
    <div>
        <h3>Open Everyday</h3>
        {openingHours.map((time)=>(
            <p key={time.day}>
                {time.day} : {time.time}
            </p>
        ))}
    </div>
    <div>
        <h3>Socials</h3>
        <div className="flex-center gap-5">
            {socials.map((social)=>(
                <a key={social.name} href={social.url} target='blank' rel='noopener noreferrer' aria-label={social.name}>
                    <img src={social.icon} alt="" />
                </a>
            ))}
        </div>
    </div>
</div>
  </footer>
  )
}

export default Contact
