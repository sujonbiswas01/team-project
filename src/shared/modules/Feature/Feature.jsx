import React from 'react'

const Feature = () => {
  return (
    <div className='w-full bg-black md:max-w-[1579px] mx-0 md:mx-auto px-5 md:px-[199px]'>
        <div className='bg-[#343434] flex flex-col lg:flex-row  gap-x-[86px] rounded-xl'>
            <div className='w-full lg:w-[50%]  lg:py-[30px] px-[10px] lg:px-[30px] m-auto ml-0 lg:ml-8 '>
                <h2 className='text-[18px] lg:text-[52px] leading-[62px] w-full md:w-[451px] m-auto text-white'>OpenType features 
and Variable fonts</h2>

      <div className='flex justify-center lg:justify-start mx-auto'>
          <button className='bg-blue-600 px-8 py-2  cursor-pointer rounded mt-6 text-white'>Try For Free</button>
      </div>
            </div>

            <div className='w-full lg:w-[50%] '>
                <img src="/images/onpenType_img.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Feature