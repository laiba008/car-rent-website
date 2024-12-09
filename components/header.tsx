import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image'
import {Input} from '@/components/ui/input';
import { IoHeart } from "react-icons/io5";
import {FaBell} from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <div className='w-full h-[115px] border-2 hover:shadow-md'>
      <div className='w-[148px] h-[44px] absolute left-[60px] top-[37px] font-bold text-3xl flex items-center justify-center tracking-tight text-blue-500'>MORENT</div>
      <div className='w-[492px] h-[44px] left-[272px] top-[37px] box-border border  absolute bg-[#ffffff] rounded-[70px] drop-shadow-lg'>
      <CiSearch className='w-[24px] h-[24px] bg-[#ffffff] bg-transparent drop-shadow absolute top-2.5 left-4'/>

        <Input type="Search" placeholder='Search something here' className='w-[190px] h-[20px] font-medium border-none absolute top-[11px] left-[75px]'/>
        {/* <CiSearch className='w-[24px] h-[24px] bg-[#ffffff] bg-transparent drop-shadow absolute top-2.5 left-4'/> */}
         <Image src="/filter.png" alt='logo' width={24} height={24}
        className='absolute top-2.5 left-[436px]'/>
        </div>

         
         
        {/* Icons */}
        <div className='w-[230px] h-[44px] mt-8 flex items-center gap-[20px] border-2 ml-[1360px]'>

          {/* Like */}
          <div>
         <IoHeart className='w-[26px] h-[26px] ml-4 text-gray-600 cursor-pointer' />
         </div>

         {/* Notification */}
         {/* <img src="/Notification.png" 
         alt="notification" className='w-[36px] h-[36px] text-gray-700 rounded-full' /> */}
         <div>
         <FaBell className=" relative w-[24px] h-[24px] text-lg text-gray-600 cursor-pointer ml-1" />
         <span className="absolute top-10 right-[186px] w-3 h-3 bg-red-500 rounded-full"></span>
         </div>
         {/* Setting */}
         <div>
         <IoMdSettings className='w-[25px] h-[25px] text-gray-600 cursor-pointer ml-2' />
         </div>
        

        {/* Profile Image */}
        <div>
          <Image src="/profile.png" alt="profile" width={35} height={35} className='ml-2'/>
        </div>
        </div>

        



        {/* <div className="flex items-center space-x-2 lg:space-x-4 mt-2 lg:mt-0">
        <Link href="/favorites">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <IoHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>
        <Link href="/notifications">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/settings">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>
    </div> */}
    </div>
  )
}

export default Header
