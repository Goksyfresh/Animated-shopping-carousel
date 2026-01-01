import aboutImg1 from '../public/images/abt1.png'
import aboutImg2 from '../public/images/abt2.png'
import aboutImg3 from '../public/images/abt5.png'
import aboutImg4 from '../public/images/abt3.png'
import aboutImg5 from '../public/images/abt4.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const About = () => {
    useGSAP(()=>{
        const aboutTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top center',
        }
    })

    const titleSplit = new SplitText('#about h2',{type:'words'})

    aboutTimeline.from(titleSplit.words,{
        opacity:0,
        yPercent:100,
        stagger:0.07,
        duration:1.2,
        ease:'expo.out',
    })
    aboutTimeline.from('.top-grid div, .bottom-grid div',{
        opacity:0,
        duration:1,
        ease:'expo.out',
        stagger:0.2,
    
    }, '-=0.5')
    },[])
  return (
    <div id='about'>
      <div className='mb-16 md:px-0 px-5'>
        <div className="content">
            <div className='md:col-span-8'>
                <p className="badge">Best Cocktails</p>
                <h2>Where every detail matters <span className='text-white'>-</span> from muddle to garnish</h2>
            </div>
            <div className="sub-content">
                <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                <div>
                    <p className='md:text-3xl text-xl font-bold'>
                        <span>4.5</span>/5
                    </p>
                    <p className='text-sm text-white-100'>
                        More than +12000 customers
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="top-grid">
        <div className='md:col-span-3'>
            <div className='noisy'/>
            <img src={aboutImg1} alt="" />
        </div>
          <div className='md:col-span-6'>
            <div className='noisy'/>
            <img src={aboutImg2} alt="" />
        </div>
          <div className='md:col-span-3'>
            <div className='noisy'/>
            <img src={aboutImg3} alt="" />
        </div>
      </div>
      <div className="bottom-grid">
          <div className='md:col-span-8'>
            <div className='noisy'/>
            <img src={aboutImg4} alt="" />
        </div>
          <div className='md:col-span-4'>
            <div className='noisy'/>
            <img src={aboutImg5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
