import React, { useEffect, useState } from 'react'

const Testimonials = () => {
    const [testomonialsData,settestomonialsData]=useState([])
    useEffect(()=>{
        fetch("/data/testimonials.json").then((res)=>{return res.json()}).then((data)=>settestomonialsData(data))
    },[])
    console.log(testomonialsData)
  return (
    <div className='w-full pb-7  bg-black md:max-w-[1579px] mx-0 md:mx-auto px-5 md:px-[199px]'>
        <div>
            <h2 className='text-white text-[20px] sm:text-[52px] text-center'>Testimonials</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 py-[50px] gap-[23px]'>
            {
                testomonialsData.map((items)=>{
                    return <div key={items.id} className='p-[40px] border border-white rounded-xl'>
                        <div className='flex gap-x-[13px] py-[30px]'>
                            <img src={items.img} alt="" />
                            <div className='text-white'>
                                <h2>{items.name}</h2>
                                <p>{items.pro}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white'>{items.des}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Testimonials