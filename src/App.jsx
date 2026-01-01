import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Hero from './hero'
import NavBar from './NavBar'
import gsap from 'gsap'
import Cocktails from './cocktails'
import About from './About'
import Art from './Art'
import Menu from './Menu'
import Contact from './Contact'
import ScaleTransition from './scaleTutorial'
import HorizontalScrollGallery from './HorizontalScroll'
import ParallaxLayers from './Parallax'
import TextRevealScroll from './TextReveal'
import ImageSequenceScrub from './ImageScrubble'
import CardStack from './CardStack'
import CardStackSimple from './StackSimple'
import ImageSequenceSection from './ImageAnimation'
import ImageHoverAnimation from './ImageHoverAnimation'
import Recreate from './Recreate'
import Shopper from './Shopper'
import Cowboy from './cowboy'
import LusanoClone from './LusanoClone'
gsap.registerPlugin(ScrollTrigger, SplitText) 

function App() {
 

  return (
   <>
 
    <Shopper/>
   
   </>

  )
}

export default App
