import React, { use, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollGallery = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(() => {
    
  const scrollWidth = scrollContainerRef.current.scrollWidth
  const viewPortWidth = window.innerWidth
  const scrollDistance = scrollWidth - viewPortWidth

  gsap.to(scrollContainerRef.current,{
         x: -scrollDistance,
     scrollTrigger:{
            trigger:containerRef.current,
            start:'top top',
            end: () => `+=${scrollDistance}`, 
            pin: true,
            scrub:0.5,
            anticipatePin:1,
        }
       
  })
 
  }, []);

  // Sample gallery items
  const galleryItems = [
    { id: 1, title: 'Mountain Vista', color: 'bg-blue-500', emoji: '🏔️' },
    { id: 2, title: 'Ocean Waves', color: 'bg-cyan-500', emoji: '🌊' },
    { id: 3, title: 'Desert Sunset', color: 'bg-orange-500', emoji: '🏜️' },
    { id: 4, title: 'Forest Path', color: 'bg-green-500', emoji: '🌲' },
    { id: 5, title: 'City Lights', color: 'bg-purple-500', emoji: '🌃' },
    { id: 6, title: 'Aurora Night', color: 'bg-indigo-500', emoji: '✨' },
    { id: 7, title: 'Tropical Beach', color: 'bg-teal-500', emoji: '🏖️' },
    { id: 8, title: 'Snowy Peak', color: 'bg-slate-300', emoji: '⛰️' },
  ];


  return (
    <div className="bg-black">
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold mb-4">
            Horizontal Gallery
          </h1>
          <p className="text-white/70 text-2xl">
            Scroll down to slide through →
          </p>
        </div>
      </section>

      {/* HORIZONTAL SCROLL SECTION */}
      <section 
        ref={containerRef}
        className="relative h-screen overflow-hidden bg-black"
      >
        {/* Instructions overlay */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
          <p className="text-white/50 text-sm">Scroll vertically ↓ to move horizontally →</p>
        </div>

        {/* The container that moves horizontally */}
        <div 
          ref={scrollContainerRef}
          className="flex h-full items-center gap-8 px-20"
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-[400px] h-[500px] ${item.color} rounded-2xl flex flex-col items-center justify-center gap-4 shadow-2xl`}
            >
              <span className="text-8xl">{item.emoji}</span>
              <h3 className="text-white text-3xl font-bold">{item.title}</h3>
              <p className="text-white/80 text-lg">Card {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* End Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-blue-900">
        <div className="text-center">
          <h2 className="text-white text-6xl font-bold mb-4">
            You made it! 🎉
          </h2>
          <p className="text-white/70 text-xl">
            Try creating your own horizontal scroll now
          </p>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollGallery;