import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import photo1 from '../public/images/photo1.jpg';
import photo2 from '../public/images/photo2.jpg';
import photo3 from '../public/images/photo3.jpg';
import photo4 from '../public/images/photo4.jpg';

gsap.registerPlugin(ScrollTrigger);

const CardStackSimple = () => {
  
  useGSAP(() => {
    const spotlightImgFinalPos =[
    [-140, -140],
    [40, -130],
    [-160, 40],
    [20, 30]
];
console.log(spotlightImgFinalPos[0][0]);
    const scrollTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:'.spotlight',
            start:'top top',
            end: `+=${window.innerHeight * 6}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
        }
    });

    // PHASE 1: Cards fly up to center
    scrollTimeline.fromTo('.card-1', 
      { y: '200%', rotation: 0 },
      { y: '-50%', rotation: 5 },
      0
    );

    scrollTimeline.fromTo('.card-2', 
      { y: '200%', rotation: 0 },
      { y: '-50%', rotation: -3 },
      0.3
    );

    scrollTimeline.fromTo('.card-3',
      { y: '200%', rotation: 0 },
      { y: '-50%', rotation: 3.5 },
      0.6
    );

    scrollTimeline.fromTo('.card-4',
      { y: '200%', rotation: 0 },
      { y: '-50%', rotation: -1 },
      0.9
    );

    // PHASE 2: Cards spread to corners
    scrollTimeline.to('.card-1', 
      { x: '-85%', y: '-100%', rotation: 0, duration: 1 },
      1.6
    );

    scrollTimeline.to('.card-2', 
      { x: '75%', y: '-100%', rotation: 0, duration: 1 },
      1.8
    );

    scrollTimeline.to('.card-3', 
      { x: '-75%', y: '20%', rotation: 0, duration: 1 },
      2.0
    );
  

    scrollTimeline.to('.card-4', 
      { x: '85%', y: '20%', rotation: 0, duration: 1 },
      2.2
    );
  }, []);

  return (
    <div>
      <section className="intro" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
        <h1 style={{ color: 'white', fontSize: '3rem' }}>Scroll Down</h1>
      </section>

      <section className="spotlight" style={{ height: '100vh', background: '#000', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          
          <div className="card-1" style={{ width: '350px', position: 'absolute' }}>
            <img 
              src={photo1} 
              alt="Photo 1" 
              style={{ 
                width: '100%', 
                aspectRatio: '7/5',
                objectFit: 'cover',
                borderRadius: '10px' 
              }} 
            />
          </div>

          <div className="card-2" style={{ width: '350px', position: 'absolute' }}>
            <img 
              src={photo2} 
              alt="Photo 2" 
              style={{ 
                width: '100%', 
                aspectRatio: '7/5',
                objectFit: 'cover',
                borderRadius: '10px' 
              }} 
            />
          </div>

          <div className="card-3" style={{ width: '350px', position: 'absolute' }}>
            <img 
              src={photo3} 
              alt="Photo 3" 
              style={{ 
                width: '100%', 
                aspectRatio: '7/5',
                objectFit: 'cover',
                borderRadius: '10px' 
              }} 
            />
          </div>

          <div className="card-4" style={{ width: '350px', position: 'absolute' }}>
            <img 
              src={photo4} 
              alt="Photo 4" 
              style={{ 
                width: '100%', 
                aspectRatio: '7/5',
                objectFit: 'cover',
                borderRadius: '10px' 
              }} 
            />
          </div>

        </div>
      </section>

      <section className="outro" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a1a' }}>
        <h1 style={{ color: 'white', fontSize: '3rem' }}>Done! ✨</h1>
      </section>
    </div>
  );
};

export default CardStackSimple;

