import Lenis from 'lenis';
import photo1 from '../public/images/photo1.jpg';
import photo2 from '../public/images/photo2.jpg';
import photo3 from '../public/images/photo3.jpg';
import photo4 from '../public/images/photo4.jpg';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const CardStackSimple = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    
    return () => lenis.destroy();
  }, []);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.spotlight-image');
    const timeline = gsap.timeline({
        scrollTrigger:{
            trigger: '.spotlight',
            start:'top top',
            end:`${window.innerHeight * 6}px`,
            pin:true,
            scrub:1,
            pinSpacing:true,
            markers:true
        }
    })
 const initialRotations = [5,-3,3.5,-1];
   const finalPos = [
      [-85, -100],
      [75, -100],
      [-75, 20],
      [85, 20]
    ]
cards.forEach((card, index) => {
    timeline.fromTo(card,
        { y: '200%', rotation: 0 },
        { y: '-50%', rotation: initialRotations[index], ease: 'power1.out', duration:1.2},
        index * 0.3
    );

    timeline.to(card,{
        y: finalPos[index][1] + '%',
        x: finalPos[index][0] + '%',
        rotation: 0,
        duration:1,
        ease: 'power1.inOut'
    },
       3 + (index * 0.15)
)
});
  },[])
  return (
    <div>
      <section className="intro">
        <h1>The Art of Selling becomes the art of sensing.</h1>
      </section>

      <section className="spotlight">
        <div className="spotlight-header">
          <h1>Time stretches differently inside the frame</h1>
        </div>
        <div className="spotlight-images">
          <div className="spotlight-image card-1">
            <img src={photo1} alt="Photo 1" />
          </div>
          <div className="spotlight-image card-2">
            <img src={photo2} alt="Photo 2" />
          </div>
          <div className="spotlight-image card-3">
            <img src={photo3} alt="Photo 3" />
          </div>
          <div className="spotlight-image card-4">
            <img src={photo4} alt="Photo 4" />
          </div>
        </div>
      </section>

      <section className="outro">
        <h1>We make visuals breathe with quiet precision</h1>
      </section>
    </div>
  );
};

export default CardStackSimple;