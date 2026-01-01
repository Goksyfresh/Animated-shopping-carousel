import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageSequenceScrub = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Configuration
  const frameCount = 50; // Total number of frames
  const currentFrame = index => {
    // Generate image URLs - replace with your actual image paths
    // Format: image-001.jpg, image-002.jpg, etc.
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`;
  };

 useGSAP(() => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const images = [];
  
  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Define drawFrame BEFORE using it
  const drawFrame = (index) => {
    if (images[index]) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate dimensions to maintain aspect ratio
      const img = images[index];
      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );
      
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.drawImage(
        img,
        x, y,
        img.width * scale,
        img.height * scale
      );
    }
  };
  
  // Preload all images
  let loadedCount = 0;
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    
    img.onload = () => {
      images[i] = img;
      loadedCount++;
      
      // When all images are loaded
      if (loadedCount === frameCount) {
        setImagesLoaded(true);
        
        // Draw first frame immediately
        drawFrame(0);
        
        // Start the animation
        const frameIndex = { value: 0 };
        
        gsap.to(frameIndex, {
          value: frameCount - 1,
          ease: 'none',
          onUpdate: () => {
            const currentFrameIndex = Math.floor(frameIndex.value);
            drawFrame(currentFrameIndex);
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
            pin: true,
          }
        });
      }
    };
  }
  
}, []);

  return (
    <div className="bg-black">
      {/* Intro */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-black">
        <div className="text-center">
          <h1 className="text-white text-7xl font-bold mb-4">
            Image Sequence Scrubbing
          </h1>
          <p className="text-white/70 text-2xl mb-8">
            Scroll to control the animation frame-by-frame
          </p>
          <p className="text-white/50 text-sm">
            (Using Apple AirPods Pro sequence as example)
          </p>
        </div>
      </section>

      {/* IMAGE SEQUENCE SECTION */}
      <section 
        ref={containerRef}
        className="relative h-[300vh] bg-black"
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          {!imagesLoaded && (
            <div className="text-white text-2xl">
              Loading frames...
            </div>
          )}
          <canvas 
            ref={canvasRef}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Progress indicator */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm">
          Scroll to scrub through frames
        </div>
      </section>

      {/* Explanation Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-900 py-20">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-white text-5xl font-bold mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-6 text-white/80 text-xl">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-3">1. Preload Images</h3>
              <p>Load all frames into memory before starting animation</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-3">2. Canvas Drawing</h3>
              <p>Use HTML Canvas to draw the current frame</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-3">3. GSAP + ScrollTrigger</h3>
              <p>Animate frame index based on scroll position</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="text-white text-2xl font-bold mb-3">4. Scrub Control</h3>
              <p>User's scroll becomes the video playback controller</p>
            </div>
          </div>
        </div>
      </section>

      {/* End */}
      <section className="h-screen flex items-center justify-center bg-purple-900">
        <div className="text-center">
          <h2 className="text-white text-6xl font-bold mb-4">
            Frame Perfect! 🎬
          </h2>
          <p className="text-white/70 text-xl">
            Scroll-controlled image sequences mastered
          </p>
        </div>
      </section>
    </div>
  );
};

export default ImageSequenceScrub;