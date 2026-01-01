import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const ScaleTransition = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const scalingDivRef = useRef(null);

  useGSAP(() => {
    const scalingTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:section1Ref.current,
            start:'top top',
               pin: true,
        scrub: true,
        end: 'bottom top'
        },
     
    })

    scalingTimeline.to(scalingDivRef.current, {
        scale: 10,
        borderRadius: '0%',
        duration: 1,
        ease: 'power1.inOut'
    })
    
  }, []);

  return (
    <div className="bg-black">
      {/* SECTION 1 - The section that gets scaled up */}
      <section 
        ref={section1Ref}
        className="relative h-screen w-full flex items-center justify-center bg-purple-900"
      >
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-white text-6xl font-bold mb-4">
            First Section
          </h1>
          <p className="text-white/80 text-xl">
            Scroll down to see the magic happen
          </p>
        </div>

        {/* THE SCALING DIV - This is what grows */}
        <div 
          ref={scalingDivRef}
          className="absolute inset-0 m-auto w-[300px] h-[300px] bg-black rounded-2xl flex items-center justify-center"
        >
          {/* <p className="text-white text-2xl font-bold">
            I will scale up!
          </p> */}
        </div>
      </section>

      {/* SECTION 2 - The destination section */}
      <section 
        ref={section2Ref}
        className="relative h-screen w-full flex items-center justify-center bg-black"
      >
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-white text-6xl font-bold mb-4">
            Second Section
          </h1>
          <p className="text-white/80 text-xl">
            The scaled div becomes this section's background
          </p>
        </div>
      </section>

      {/* Extra section for scrolling space */}
      <section className="h-screen w-full flex items-center justify-center bg-slate-900">
        <h2 className="text-white text-4xl">Keep scrolling...</h2>
      </section>
    </div>
  );
};

export default ScaleTransition;