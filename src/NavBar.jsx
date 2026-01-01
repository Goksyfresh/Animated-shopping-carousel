import React from 'react'
import icon from '../public/images/fav.png'
import { NavLinks } from './constants/NavLinks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const NavBar = () => {
    useGSAP(()=>{
       const navTween= gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top',  
            }
        })
            navTween.fromTo('nav',{backgroundColor:'transparent'},
                {
                    backgroundColor:'#00000050',
                     duration:1,
                    backdropFilter:'blur(10px)',
                    ease:'power1.inOut'
                }
    )
    },[])
    return (
        <nav>
            <div>
                <a href='#home' className='flex items-center gap-1'>
                    <img src={icon} className='h-[38px] w-[38px] object-contain' alt="" />
                    <p className='text-white font-modern-negra text-3xl'>Velvet Pour</p>
                </a>

              
                    <ul className='list-none flex items-center justify-center text-md text-white gap-4'>
                        {NavLinks.map((link) => (
                            <li key={link.id} className='cursor-pointer hover:text-gray-400'>
                                <a href={`#${link.id}`} className='text-white font-sans text-md'>{link.title}</a>
                            </li>
                        ))}
                    </ul>
            </div>
        </nav>
            )
}

            export default NavBar
