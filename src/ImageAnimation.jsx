import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';
import Image1 from '../public/images/motion1.jpg'
import Image2 from '../public/images/motion2.jpg'
import Image3 from '../public/images/motion3.jpg'
import Image4 from '../public/images/motion4.jpg'
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const ImageSequenceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const textRef = useRef([]);
   const splitInstances = useRef([]);
   const previousIndex = useRef(0);

  // Your data array
 const slides = [
    {
      image: Image1,
      title: 'Mountain Serenity',
      description: 'Where earth meets sky in perfect harmony. Peaks rise above the clouds, their ancient faces carved by wind and time. A sanctuary of stone and silence.'
    },
    {
      image: Image2,
      title: 'Ocean Dreams',
      description: 'Endless blue horizons calling your name. Waves whisper secrets from distant shores, their rhythm eternal and hypnotic. Here, the world dissolves into salt and sky.'
    },
    {
      image: Image3,
      title: 'Forest Whispers',
      description: 'Nature speaks in silent green symphonies. Ancient trees stand as guardians of stories untold, their canopy filtering light into emerald gold. Step softly through this living cathedral.'
    },
    {
      image: Image4,
      title: 'Desert Solitude',
      description: 'Golden sands stretching into infinity. The sun paints dunes in shades of amber and fire, while silence wraps around you like a warm embrace. In this vast emptiness.'
    }
  ];
   useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return () => lenis.destroy();
  }, []);
  useGSAP(() => {
    // Set initial states
    imageRefs.current.forEach((img, i) => {
      gsap.set(img, {
        opacity: i === 0 ? 1 : 0,
        scale: i === 0 ? 1 : 1.1
      });
    }); // Split text for each element and store instances
    textRef.current.forEach((text, i) => {
      if (text) {
        const split = new SplitText(text, { type: 'lines', linesClass: 'line', mask:'lines' });
        splitInstances.current[i] = split;
        
        // Set initial state
        gsap.set(split.lines, {
          yPercent: i === 0 ? 0 : 100,
          opacity: i === 0 ? 1 : 0
        });


      }
    });
    // Set initial container opacity (keep containers always visible for overflow purposes)
    textRef.current.forEach((text, i) => {
      if (text) {
        gsap.set(text, {
          opacity: 1
        });
      }
    });


    ScrollTrigger.create({
      trigger: '.image-section',
      start: 'top top',
      end: `+=${window.innerHeight * slides.length}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      
      onUpdate: (self) => {
        const progress = self.progress;
        const activeIndex = Math.min(Math.floor(progress * slides.length), slides.length - 1);
        
        setCurrentIndex(activeIndex);

        imageRefs.current.forEach((img, i) => {
          if (i === activeIndex) {
            gsap.to(img, {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: "power2.out"
            });
          } else {
            gsap.to(img, {
              opacity: 0,
              scale: 1.3,
              duration: 1.5,
              ease: "power2.out"
            });
          }
        });
          // Only animate text lines when index changes
        if (activeIndex !== previousIndex.current) {
          // Animate out previous text lines
          if (splitInstances.current[previousIndex.current]) {
            gsap.to(splitInstances.current[previousIndex.current].lines, {
              yPercent: -100,
              opacity: 0,
              stagger: 0.08,
              duration: 0.5,
              ease: "power2.inOut"
            });
          }
          
           if (splitInstances.current[activeIndex]) {
            gsap.fromTo(splitInstances.current[activeIndex].lines,
              {
                yPercent: 100,
                opacity: 0
              },
              { 
                yPercent: 0, 
                opacity: 1, 
                stagger: 0.2, 
                duration: 1.5, 
                ease: "power2.out" 
              }
            );
          
          }
          
          previousIndex.current = activeIndex;
        }

        

      
      }
    });
  }, []);

  return (
    <div>
      {/* Intro Section */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
        <h1 style={{ color: 'white', fontSize: '4rem' }}>Scroll to Explore</h1>
      </section>

      {/* Image Sequence Section */}
      <section className="image-section" style={{ height: '100vh', position: 'relative' }}>
        {/* Background Images */}
        {slides.map((slide, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={slide.image}
            alt={slide.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ))}

        {/* Overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
        }} />

        {/* Text Content */}
        <div className='relative flex-col justify-center items-center w-[55%] p-12'>
            {slides.map((slide, i) => (
<p ref={(el)=> (textRef.current[i]= el)} key={i} id="image-description" className='text-white text-5xl absolute opacity-0 overflow-hidden'>
            {slide.description}
          </p>
             ) )}
          
         
          <div style={{ marginTop: '2rem', fontSize: '1rem', opacity: 0.7 }}>
            {currentIndex + 1} / {slides.length}
          </div>
        </div>
      </section>

      {/* Outro Section */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
        <h1 style={{ color: 'white', fontSize: '4rem' }}>Journey Complete ✨</h1>
      </section>
    </div>
  );
};

export default ImageSequenceSection;