import { Button } from '@heroui/react'
import React, { useEffect, useState } from 'react'

const Gallary = () => {
    const [GallaryImg,setGallaryImg]= useState([])
    useEffect(()=>{
        fetch("/data/gallary.json").then((res)=>{
            return res.json()
        }).then((data)=>setGallaryImg(data)).catch((error)=>console.log(error.message))
    },[])
    console.log(GallaryImg)
  return (
    <div className='w-full  bg-black md:max-w-[1579px] mx-0 md:mx-auto py-2 md:py-[70px] px-5 md:px-[199px]'>
        <div>
            <h2 className='text-2xl sm:text-[52px] text-center text-white'>Gallery</h2>
            <p className='text-[14px] md:text-[20px] leading-[30px] text-center text-white w-full md:w-[499px] md:mx-auto'>We focus on ergonomics and meeting you where you work. 
It's only a keystroke away.</p>
        </div>

        <div className='flex flex-col md:flex-row items-center py-6'>
            {GallaryImg.map((item)=>{
                return <div key={item.id}>
                {item.id<=4 && <img src={item.img} className={`${item.id==3?"-ml-4 h-auto xl:h-[345px]":"ml-0"}`} alt="" />}
                </div>
            })}
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center ml-0 md:-ml-18'>
             {GallaryImg.map((item)=>{
                return <div key={item.id}>
                {5<=item.id && <img src={item.img} className='' alt="" />}
                </div>
            })}
        </div>

        <div className='flex justify-center'>
            <Button className='border border-white text-white' radius='sm' variant="bordered">All Partners</Button>
        </div>
    </div>
  )
}

export default Gallary