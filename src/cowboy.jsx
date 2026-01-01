import cowboyLogo from '../public/images/cowboy.png'
import bicycleImage from '../public/images/bicycle.png'
import eBike from '../public/images/ebike.png'
const Cowboy = () => {
  return (
    <div>
      <div className='bg-[#E6DAC0]'>
        <nav className='flex items-center justify-between py-2 px-8'>
           <img src={cowboyLogo} className='w-[200px] h-[65px] object-cover'  alt="" />
            <ul className='flex gap-4 items-center justify-center'>
                <li><a href='#'>E-bike</a></li>
                <li><a href='#'>Adaptive Power</a></li>
                <li><a href='#'>Connect</a></li>
                <li><a href='#'>Care</a></li>
            </ul>
            <div className='border border-black-1 rounded-full px-6 py-2'>
                <p>Order now</p>
            </div>
        </nav>
        <div className='flex px-8 items-center'>
            <div className='flex items-start flex-col'>
                <h1 className='font-bold text-7xl mb-4'>The Future of Urban Mobility</h1>
                <p className='text-xl'>Experience the ride of your life with Cowboy’s sleek, smart, and powerful electric bikes designed for urban adventurers.</p>
               <div className='flex items-center gap-4 mt-4'>
<button className='bg-black border border-0 rounded-full text-white py-3 px-5 text-sm'>Explore Models</button>
                <button className='bg-white text-sm text-black border border-0 rounded-full py-3 px-5'>Start Your Ride</button>
               </div>
            </div>
            <div>
              <img src={bicycleImage} className='object-cover relative -right-8 ' alt="" />
            </div>
        </div>
      </div>
      <div className='bg-cover flex items-end justify-center bg-center h-[100vh]' style={{backgroundImage:"url('../public/images/sectionBg.png')"}}>
      <div className='flex-1 p-8'>
        <h1 className='text-white text-3xl font-bold'>Classic</h1>
        <p className='text-white text-xl mt-2 w-[75%]'>Meet the Classic and you've found one agile ride with an incredibly swift side. Gain serious power on an electric bike that's built around you.</p>
        <button className='bg-[#f3ecde] text-sm text-black border border-0 rounded-full py-3 px-5 mt-4'>Start Your Ride</button>
      </div>
      <div className='flex-1 p-8'>
        <h1 className='text-white text-3xl font-bold'>Cruiser</h1>
        <p className='text-white text-xl mt-2 w-[75%] '>Meet the Cruiser for an elevated take on the classic Cowboy. A higher vantage gives you a comfortable advantage with an electric bike that's built around you.</p>
        <button className='bg-[#f3ecde] text-sm text-black border border-0 rounded-full py-3 px-5 mt-4'>Start Your Ride</button>
      </div>
      </div>
      <div className='bg-[#E6DAC0] flex flex-col items-center justify-center'>
        <h1 className='font-bold text-4xl w-[70%] text-center mt-8'>Your Ride, Your Way— Powered by the Cowboy App</h1>
        <p className='text-center text-xl mt-4 w-[60%]'>Unlock the full potential of your Cruiser & Classic bike with seamless app integration.</p>
        <button className='mt-4 bg-black border border-0 rounded-full py-2 px-4 text-sm text-white '>Download App</button>
        <img src={eBike} className='object-cover w-[800px] mt-10 h-[650px]' alt="" />
      </div>
    </div>
  )
}

export default Cowboy
