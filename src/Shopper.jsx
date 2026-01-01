import { useEffect, useRef, useState } from 'react'
import backPack from '../public/images/backpack.png'
import beanie from '../public/images/beanie.png'
import joggers from '../public/images/joggers.png'
import puffer from '../public/images/puffer.png'
import shorts from '../public/images/shorts.png'
import sliders from '../public/images/sliders.png'
import hoodie from '../public/images/zipup.png'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Shopper = () => {
    const [activeProduct, setActiveProduct]=useState(0)
    const [slideItems, setSlideItems] = useState([])
    const containerRef = useRef(null)

    const bufferSize = 5
    const spacing = 0.375
    const slideWidth = spacing * 1000

    useEffect(()=>{
        const items =[];
        for(let i = -bufferSize; i<=bufferSize; i++){
            items.push({
                relativeIndex: i,
                productIndex: getProductIndex(activeProduct + i),
                id:`${activeProduct}-${i}`
            })
        }
        setSlideItems(items)
    },[])
  
    const productData=[{name: 'Adidas Backpack', image:backPack},
        {name:'Stussy beanie', image:beanie}, 
        {
            name:"Nike Joggers", image:joggers
        }, 
        {name:'The North Face Puffer', image:puffer},
        {
            name:'Shorts', image:shorts
        },
        {
            name:"Yeezy Sliders", image:sliders
        },
        {
            name:"Zip up hoodie", image:hoodie
        }]
 
     const getProductIndex = (index) => {
    return ((index % productData.length) + productData.length) % productData.length
  }

 const goNext = () => {
 setActiveProduct(prev => prev + 1)
 setSlideItems(prevItems => {
    const newItems = prevItems
    .filter(item => item.relativeIndex > -bufferSize)
    .map(item => ({
        ...item,
        relativeIndex:item.relativeIndex - 1
    }))

    const newIndex = activeProduct + 1 + bufferSize
    newItems.push({
        relativeIndex:bufferSize,
        productIndex: getProductIndex(newIndex
        ),
        id:`${activeProduct + 1}-${bufferSize}`
    })
    return newItems
 })
}

const goPrev = () => {
   setActiveProduct(prev => prev - 1)
 setSlideItems(prevItems => {
    const newItems = prevItems
    .filter(item => item.relativeIndex < bufferSize)
    .map(item => ({
        ...item,
        relativeIndex:item.relativeIndex + 1
    }))

    const newIndex = activeProduct - 1 - bufferSize
    newItems.unshift({
        relativeIndex:-bufferSize,
        productIndex: getProductIndex(newIndex
        ),
        id:`${activeProduct - 1}-${-bufferSize}`
    })
    return newItems
 })
}
  useGSAP(() => {
    if (containerRef.current && slideItems.length > 0) {
      slideItems.forEach((item) => {
        const element = containerRef.current.querySelector(`[data-id="${item.id}"]`)
        if (element) {
          const isActive = item.relativeIndex === 0
          gsap.to(element, {
            x: item.relativeIndex * slideWidth,
            scale: isActive ? 1.35 : 0.75,
            zIndex: isActive ? 100 : 1,
            duration: 1,
            ease: 'power3.out'
          })
        }
      })
    }
  }, [slideItems])
    const currentProduct = productData[getProductIndex(activeProduct)]

  return (
    <div className='header p-4'>
        <nav className='flex justify-between items-center'>
            <h1 className='font-bold uppercase'>Oyegoke</h1>
      
                   <p className='font-semibold uppercase'>{ currentProduct.name}</p>  
    
        </nav>
        <div className='flex h-[90vh] items-center relative overflow-hidden  justify-center'>
   <div id='product' ref={containerRef} className='flex items-center justify-center overflow-hidden'>
{slideItems.map((item)=>{
    const product = productData[item.productIndex]
    return(
          <img src={product.image} data-id={item.id}className='absolute object-cover lg:w-[220px] lg:h-[300px] h-[180px] w-[150px]' key={item.id} alt=""  style={{ 
                  willChange: 'transform',
                  transformOrigin: 'center center'
                }} />
    )
})}

      </div>
        </div>
        <div className="flex items-center absolute bottom-0 left-1/2 -translate-x-1/2 justify-center p-8">
      {/* iPod Click Wheel Container */}
      <div className="relative w-30 h-30 lg:w-50 lg:h-50">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl">
          {/* Inner Circle (makes ring effect) */}
          <div className="absolute inset-5 lg:inset-8 rounded-full bg-white shadow-inner"></div>
        </div>

        {/* Previous Button (Left) */}
        <button
       onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300 hover:bg-gray-400 active:bg-gray-500 transition-all shadow-md flex items-center justify-center group"
          aria-label="Previous"
        >
          <svg 
            className="lg:w-6 lg:h-6 w-3 h-3 text-gray-700 group-hover:text-gray-900 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button (Right) */}
        <button
         onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 lg:w-10 lg:h-10 w-6 h-6 rounded-full bg-gray-300 hover:bg-gray-400 active:bg-gray-500 transition-all shadow-md flex items-center justify-center group"
          aria-label="Next"
        >
          <svg 
            className="lg:w-6 lg:h-6 w-3 h-3 text-gray-700 group-hover:text-gray-900 transition-colors" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Center Select Button */}
        <button
       
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 active:from-gray-600 active:to-gray-700 transition-all shadow-lg flex items-center justify-center group"
          aria-label="Select"
        >
          <span className="text-white font-bold text-sm uppercase tracking-wider group-active:scale-90 transition-transform">
            Select
          </span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Shopper
