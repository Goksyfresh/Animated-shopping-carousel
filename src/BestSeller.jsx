import React from 'react'
import star from '../public/images/star.png'
import plus from '../public/images/plus.png'

const BestSeller = ({img, title, price}) => {
  return (
    <div className='p-2'>
        <div>
<img src={img} className='w-[210px] h-[250px] transition-transform duration-200 ease-out hover:scale-110' alt="" />
        </div>
      <div className='bg-white rounded-b-xl flex items-start flex-col gap-1 p-6'>
        <p className='text-sm text-[#8D8D8D]'>Chair</p>
        <p className='font-semibold text-[19px] text-[#0D1B39]'>{title}</p>
<img src={star} className='w-[80px] h-[15px]' alt="" />
<div className='flex w-full justify-between items-center'>
<p className='font-bold text-[#0D1B39]'>${price}</p>
<div className='bg-[#0D1B39] rounded-full p-2 flex justify-center items-center'><img src={plus} alt="" /></div>
</div>

      </div>
    </div>
  )
}

export default BestSeller
