import React from 'react'

export const DashboardMenu = () => {
  return (
    <div className='w-full' align="center">
        <div className="w-[90%] h-[15vh] flex items-center">
            <div className="w-[20%]">
                <img className='w-full' src="./requiredfiles/logo.png" alt=""/>
            </div>
            <div className="w-[65%]" align="start">
                <h1 className='pl-[6px] pt-[15px] text-white text-[30px] font-[Sevillana]'>Secure Notes</h1>
            </div>
            <div className="w-[15%] h-full flex items-center">
                <i class="fa-solid fa-plus text-[20px] text-white mt-[6px] p-[10px] bg-[#845EC2] rounded-md"></i>
            </div>
        </div>
        <div className="w-[90%] h-[70vh] flex items-center mt-[10px]"></div>
        <div className="w-[90%] h-[10vh]">
            <div>
                gokulhk278@gmail.com
            </div>
            <div>
                sdhfsudf
            </div>
        </div>
    </div>
  )
}
