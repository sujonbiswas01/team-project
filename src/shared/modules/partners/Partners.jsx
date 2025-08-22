import React from 'react'
import Marquee from 'react-fast-marquee'

const Partners = () => {
  return (
    <div className='w-full bg-black md:max-w-[1579px] mx-0 md:mx-auto py-4 px-5 md:px-[199px]'>
        <div>
            <h2 className='text-white text-[20px] sm:text-[52px] text-center'>Partners</h2>
            <p className='text-center text-white w-full md:w-[493px] mx-auto'>We focus on ergonomics and meeting you where you work. 
It's only a keystroke away.</p>
        </div>
        <div className='py-8 pt-11 flex justify-center'>
            <Marquee>
                 <img src="/images/partnersimg.png" alt="" />
            </Marquee>
           
        </div>
        <p className=' text-center text-white mt-14'>All Partners</p>
    </div>
  )
}

export default Partners