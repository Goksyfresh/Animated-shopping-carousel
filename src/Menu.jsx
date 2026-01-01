import { useRef, useState } from 'react';
import sliderLeftLeaf from '../public/images/slider-left-leaf.png'
import sliderRightLeaf from '../public/images/slider-right-leaf.png'
import { allCocktails } from './constants/NavLinks'
import leftArrow from '../public/images/left-arrow.png'
import rightArrow from '../public/images/right-arrow.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
   
    const contentRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const goTo = (index) => {
        const newIndex = (index + allCocktails.length) % allCocktails.length;
        setCurrentIndex(newIndex);
    }
    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + allCocktails.length) % allCocktails.length];
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
    
      useGSAP(()=>{
         gsap.fromTo('#title',{opacity:0},{opacity:1, duration:1})
         gsap.fromTo('.cocktail img',{opacity:0, xPercent:-100},{opacity:1, xPercent:0, duration:1, ease:'power1.inOut'}) 
         gsap.fromTo('.details h2',{opacity:0, yPercent:100},{opacity:1, yPercent:0, duration:1, ease:'power1.inOut'},'-=1')
            gsap.fromTo('.details p',{opacity:0, yPercent:100},{opacity:1, yPercent:0, duration:1, ease:'power1.inOut'},'-=1')
     },[currentIndex])
  return (
    <>
     <section id='menu' aria-labelledby='menu-heading'>
       {/* <img src={sliderLeftLeaf} alt="Left leaf decoration" id='m-left-leaf' />
      <img src={sliderRightLeaf} alt="Right leaf decoration" id='m-right-leaf' /> */}

      <h2 id='menu-heading' className='sr-only'>
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label='Cockktail Navigation'>
        {allCocktails.map((cocktail, index)=>{
            const isActive = index === currentIndex
            return(
                <button
                key={cocktail.id}
                onClick={()=> goTo(index)}
                className={`${isActive ? 'text-white' : 'text-white/50 border-white/50'}`}
              >
                {cocktail.name}
              </button>
            )
        })}
      </nav>
      <div className="content">
        <div className="arrows">
<button className="text-left" onClick={()=>goTo(currentIndex-1)}>
<span>{prevCocktail.name}</span>
<img src={rightArrow} alt="Right arrow" aria-hidden="true" />
</button>
<button className="text-left" onClick={()=>goTo(currentIndex+1)}>
<span>{nextCocktail.name}</span>
<img src={leftArrow} alt="Left arrow" aria-hidden="true" />
</button>
        </div>
        <div className="cocktail">
            <img src={currentCocktail.image} alt="" className='object-contain' />
        </div>
         <div className="recipe">
            <div ref={contentRef} className='info'>
                <p>Recipe for:</p>
                <p id='title'>{currentCocktail.name}</p>
            </div>
            <div className='details'>
                <h2>{currentCocktail.title}</h2>
                <p>{currentCocktail.description}</p>
            </div> 
        </div> 
      </div> 
    </section>  
    </>
  )
}

export default Menu
