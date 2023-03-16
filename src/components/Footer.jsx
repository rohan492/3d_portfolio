import React from "react"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[200px] mt-1">
      
      <p className='text-white text-[45px] font-bold cursor-pointer flex w-36 m-auto'>
            ro
            <span className=' blue-text-gradient'>h</span>an
          </p>

      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-15 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy; rohan. All rights reserved.
      </p>
    </div>
  )
}

export default Footer