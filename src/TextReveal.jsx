import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextRevealScroll = () => {
  const titleRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const wordRevealRef = useRef(null);

  useGSAP(() => {
    // YOUR TEXT REVEAL ANIMATIONS HERE
    
    // CHALLENGE 1: Fade + Slide Up Title
    // Animate titleRef from invisible & below to visible & in place
    // Think about: opacity (0 to 1), y (50 to 0)
    const scrollTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:titleRef.current,
            start:'top 80%',
            scrub: true,
        }
    })
    scrollTimeline.fromTo(titleRef.current,{
        opacity:0,
        y:50
    },{
        opacity:1,
        y:0,
        ease:"power2.out"
    })
    
    // CHALLENGE 2: Line-by-Line Paragraph Reveal
    // Each <p> in paragraph1Ref should reveal one after another
    // Hint: Use gsap.utils.toArray() to select all paragraphs
    // Then animate with stagger
    const lines = gsap.utils.toArray(paragraph1Ref.current.querySelectorAll('p'));
    const paraTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:paragraph1Ref.current, 
            start:'top 80%',
            scrub: true,
        }
    });
    paraTimeline.fromTo(lines, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        ease: "power2.out"
    });
    
    // CHALLENGE 3: Word-by-Word Reveal
    // Each <span> in wordRevealRef reveals individually
    // Think about: How to select all spans? What stagger value creates nice rhythm?
    const words = gsap.utils.toArray(wordRevealRef.current.querySelectorAll('span'));
    const wordTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:wordRevealRef.current,
            start:'top 80%',
            scrub: true,  
        }
    });
    wordTimeline.fromTo(words, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out"
    });
    
    // CHALLENGE 4: Clip-Path Reveal (Advanced)
    // paragraph2Ref uses clip-path to "wipe" text into view
    // From: clip-path: inset(0 100% 0 0) - hidden right
    // To: clip-path: inset(0 0% 0 0) - fully visible
    // CHALLENGE 4: Clip-Path Reveal (Advanced)
const clipTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: paragraph2Ref.current,
        start: 'top 80%',
        scrub: true,
    }
});

clipTimeline.fromTo(paragraph2Ref.current, {
    clipPath: 'inset(0 100% 0 0)', // Hidden from right
}, {
    clipPath: 'inset(0 0% 0 0)',   // Fully visible
    ease: 'power2.out'
});
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Intro */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black">
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold mb-4">
            Text Reveal Magic
          </h1>
          <p className="text-white/70 text-2xl">
            Scroll to see text appear in different ways
          </p>
        </div>
      </section>

      {/* CHALLENGE 1: Fade + Slide Title */}
      <section id='fadeTrigger' className="min-h-screen flex items-center justify-center bg-black py-20">
        <div className="container mx-auto px-5">
          <h2 
            ref={titleRef}
            className="text-white text-6xl font-bold text-center mb-20"
          >
            Fade & Slide Title
          </h2>
          <p className="text-white/50 text-center text-sm">
            Challenge 1: Make this title fade in while sliding up
          </p>
        </div>
      </section>

      {/* CHALLENGE 2: Line by Line Paragraphs */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-slate-900 py-20">
        <div className="container mx-auto px-5 max-w-3xl">
          <h3 className="text-white text-4xl font-bold mb-10 text-center">
            Line by Line Story
          </h3>
          <div ref={paragraph1Ref} className="space-y-6">
            <p className="text-white/80 text-xl">
              Once upon a time, in a digital realm far away...
            </p>
            <p className="text-white/80 text-xl">
              There lived a developer who loved animations.
            </p>
            <p className="text-white/80 text-xl">
              They discovered the power of scroll-triggered reveals.
            </p>
            <p className="text-white/80 text-xl">
              And their websites were never boring again.
            </p>
          </div>
          <p className="text-white/50 text-center text-sm mt-10">
            Challenge 2: Make each paragraph appear one after another with stagger
          </p>
        </div>
      </section>

      {/* CHALLENGE 3: Word by Word Reveal */}
      <section className="min-h-screen flex items-center justify-center bg-slate-900 py-20">
        <div className="container mx-auto px-5 max-w-4xl">
          <h3 className="text-white text-4xl font-bold mb-10 text-center">
            Word by Word Magic
          </h3>
          <div ref={wordRevealRef} className="text-center">
            <p className="text-white text-3xl leading-relaxed">
              <span className="inline-block mx-2">Every</span>
              <span className="inline-block mx-2">single</span>
              <span className="inline-block mx-2">word</span>
              <span className="inline-block mx-2">can</span>
              <span className="inline-block mx-2">appear</span>
              <span className="inline-block mx-2">with</span>
              <span className="inline-block mx-2">perfect</span>
              <span className="inline-block mx-2">timing</span>
              <span className="inline-block mx-2">and</span>
              <span className="inline-block mx-2">rhythm</span>
            </p>
          </div>
          <p className="text-white/50 text-center text-sm mt-10">
            Challenge 3: Animate each word individually with stagger
          </p>
        </div>
      </section>

      {/* CHALLENGE 4: Clip-Path Wipe Reveal */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-blue-900 py-20">
        <div className="container mx-auto px-5 max-w-3xl">
          <h3 className="text-white text-4xl font-bold mb-10 text-center">
            Clip-Path Wipe Effect
          </h3>
          <div 
            ref={paragraph2Ref}
            className="text-white text-2xl leading-relaxed"
          >
            <p>
              This text will reveal with a smooth wipe effect from left to right, 
              creating a cinematic unveiling that feels premium and polished. 
              The clip-path property is a powerful tool for creative reveals.
            </p>
          </div>
          <p className="text-white/50 text-center text-sm mt-10">
            Challenge 4: Use clip-path to wipe this text into view
          </p>
        </div>
      </section>

      {/* End */}
      <section className="h-screen flex items-center justify-center bg-blue-900">
        <div className="text-center">
          <h2 className="text-white text-6xl font-bold mb-4">
            Text Mastery! ✍️
          </h2>
          <p className="text-white/70 text-xl">
            4 different reveal techniques learned
          </p>
        </div>
      </section>
    </div>
  );
};

export default TextRevealScroll;