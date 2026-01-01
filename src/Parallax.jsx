import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxLayers = () => {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null); // Slowest (background)
  const layer2Ref = useRef(null); // Medium speed
  const layer3Ref = useRef(null); // Fast (foreground)
  const textRef = useRef(null);   // Content layer

  useGSAP(() => {
    const speed = 400; // Base speed for parallax
   const MountainSpeed =  speed * 0.3
const TreeSpeed = speed * 0.6
const RockSpeed =  speed * 1.0

const parallaxTimeline =  gsap.timeline({
    scrollTrigger:{
        trigger:containerRef.current,
        start:'top top',
        end:'bottom top',
        scrub: true,  
    }
})

parallaxTimeline.to(layer1Ref.current,{
        y: `${-MountainSpeed}px`,
        ease:'none',
    },0)
parallaxTimeline.to(layer2Ref.current,{
        y: `${TreeSpeed}px`    ,
        ease:'none',
    },0)
parallaxTimeline.to(layer3Ref.current,{
        y: `${-RockSpeed}px`,
        ease:'none',
    },0)
    parallaxTimeline.to(textRef.current, {
    y: -speed * 0.5,  // Move text at 50% speed (between trees and rocks)
    ease: 'none',
}, 0)

    // YOUR PARALLAX ANIMATION HERE
    
    // CONCEPT: Different layers move at different speeds
    // The further back a layer is, the slower it should move
    
    // Think about:
    // 1. What y values should each layer move to?
    // 2. How do you make background slower than foreground?
    // 3. Should they all have the same trigger/start/end?
    // 4. What about the text - should it move or stay fixed?
    
    // Hint: If layer3 moves -200px, maybe layer2 moves -100px, layer1 moves -50px?
    
  }, []);

  return (
    <div className="bg-black">
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-black">
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold mb-4">
            Parallax Depth
          </h1>
          <p className="text-white/70 text-2xl">
            Scroll to see layers move at different speeds
          </p>
        </div>
      </section>

      {/* PARALLAX SECTION */}
      <section 
        ref={containerRef}
        className="relative h-[200vh] overflow-hidden bg-black"
      >
        {/* Layer 1 - Background (Mountains - Slowest) */}
        <div 
          ref={layer1Ref}
          className="absolute inset-0 flex items-end justify-center pb-20"
        >
          <div className="text-center">
            <div className="text-[300px] leading-none opacity-20">🏔️</div>
            <p className="text-white/30 text-sm">Background Layer (Slowest)</p>
          </div>
        </div>

        {/* Layer 2 - Middle (Trees - Medium Speed) */}
        <div 
          ref={layer2Ref}
          className="absolute inset-0 flex items-end justify-center pb-32"
        >
          <div className="flex gap-20">
            <div className="text-center">
              <div className="text-[200px] leading-none opacity-40">🌲</div>
            </div>
            <div className="text-center">
              <div className="text-[200px] leading-none opacity-40">🌲</div>
            </div>
          </div>
          <p className="absolute bottom-10 text-white/30 text-sm">Middle Layer (Medium)</p>
        </div>

        {/* Layer 3 - Foreground (Rocks - Fastest) */}
        <div 
          ref={layer3Ref}
          className="absolute inset-0 flex items-end justify-around pb-10"
        >
          <div className="text-center">
            <div className="text-[150px] leading-none opacity-60">🪨</div>
          </div>
          <div className="text-center">
            <div className="text-[150px] leading-none opacity-60">🪨</div>
          </div>
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/30 text-sm">Foreground Layer (Fastest)</p>
        </div>

        {/* Text Content Layer */}
        <div 
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center bg-black/40 backdrop-blur-sm p-10 rounded-2xl">
            <h2 className="text-white text-6xl font-bold mb-4">
              Depth Illusion
            </h2>
            <p className="text-white/80 text-xl max-w-md">
              Each layer moves at a different speed, creating a sense of depth and dimension
            </p>
          </div>
        </div>
      </section>

      {/* End Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-900">
        <div className="text-center">
          <h2 className="text-white text-6xl font-bold mb-4">
            Depth Achieved! 🎯
          </h2>
          <p className="text-white/70 text-xl">
            Different speeds = Illusion of 3D space
          </p>
        </div>
      </section>
    </div>
  );
};

export default ParallaxLayers;