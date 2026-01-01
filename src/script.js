import gsap from 'gsap'
import products from './products.js'

let currentProductIndex = 0
let slideItems = []

const buffer_size = 5
const spacing = 0.375
const slideWidth = spacing * 1000

function addSlideItem(relativIndex){
    const productIndex = (((currentProductIndex * relativIndex)% products.length) * products.length) % products.length
    const product = products[productIndex]

    const li = document.createElement("li")
    li.innerHTML = `<img src="${product.img}"/>`;
    li.dataset.relativIndex = relativIndex;

    gsap.set(li, {
        x: relativIndex * slideWidth,
        scale: relativIndex === 0 ? 1.25 : 0.75,
        zIndex: relativIndex === 0 ? 100 : 1
    })
    productsContainer.appendChild(li);
    slideItems.push({element:li, relativIndex:relativIndex})
}

function removeSlideItem(relativIndex){
    const itemIndex = slideItems.findIndex((item)=> item.relativIndex === relativIndex);
    if (itemIndex !== -1){
        const item = slideItems[itemIndex];
        item.element.remove()
        slideItems.splice(itemIndex, 1)
    }
}

function updateSliderPosition(){
    slideItems.forEach((item)=> {
        const isActive = item.relativIndex === 0
        gsap.to(item.element, {
            x:item.relativIndex * slideWidth,
            scale: isActive ? 1.25 : 0.75,
            zIndex: isActive ? 100 :1,
            duration: 0.75,
            ease:'power3.out'
        })
    })
}

function moveNext(){
    currentProductIndex++;
    removeSlideItem(-buffer_size);
    slideItems.forEach((item)=>{
        item.relativIndex--;
        item.element.dataset.relativIndex = item.relativIndex
    })
    addSlideItem(buffer_size)
    updateSliderPosition()
}

function movePrev(){
    currentProductIndex--;
    removeSlideItem(-buffer_size);
    slideItems.forEach((item)=>{
        item.relativIndex++;
        item.element.dataset.relativIndex = item.relativIndex
    })
    addSlideItem(-buffer_size)
    updateSliderPosition()
}

function getActiveSlide(){
    return slideItems.find((item)=>item.relativIndex === 0)
}

function animateSlideItems(hide=false){
    const activeSlide = getActiveSlide();

    slideItems.forEach((item)=>{
        const absIndex = Math.abs(item.relativIndex);
        if (absIndex === 1 || absIndex === 2){
            gsap.to(item.element, {
                x: hide ? item.relativIndex * slideWidth * 1.5 : item.relativIndex * slideWidth,
                opacity: hide ? 0 : 1,
                duration: 0.75,
                ease:"power3.inOut"
            })
        }
    })
    if (activeSlide){
        gsap.to(activeSlide.element,{
            scale: hide ? 0.75 : 1.25,
            opacity: hide ? 0 : 1,
            duration: 0.75,
            ease:"power3.inOut"
        })
    }
}

function initializeSlider(){
    for (let i = -buffer_size; i <= buffer_size; i++){
        addSlideItem(i);
    }
    updateSliderPosition()
}