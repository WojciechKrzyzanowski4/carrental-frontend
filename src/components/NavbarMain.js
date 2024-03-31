import React, { useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMdListBox, IoMdApps } from 'react-icons/io';
import { IoMdHome } from 'react-icons/io';
import { RiUserFill } from 'react-icons/ri';

import { IoHeart } from 'react-icons/io5';

const Navbar = ({ onSelectComponent}) => {
 
  const [nav, setNav] = useState(false);
 
  
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  return (
    <div className='fixed bg-white flex justify-between items-center h-16 mx-auto px-4 w-full z-10 border-b '>
      <h1 className='w-full text-2xl font-bold lg:text-left sm:text-center xs:text-center ml-8'>CAR RENTAL SERVICE</h1>

        <ul className='hidden md:flex'>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl m-2 cursor-pointer duration-300'
              onClick={() => onSelectComponent('home')}
            >
              <IoMdHome style={{ color: 'black' }} size={20} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl m-2 cursor-pointer duration-300'
              onClick={() => onSelectComponent('dashboard')}
            >
              <IoMdListBox style={{ color: 'black' }} size={20} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl m-2 cursor-pointer duration-300'
              onClick={() => onSelectComponent('offers')}
            >
               <IoMdApps style={{ color: 'black' }} size={20} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl m-2 cursor-pointer duration-300'
              onClick={() => onSelectComponent('likes')}
            >
               <IoHeart style={{ color: 'black' }} size={20} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl m-2 cursor-pointer duration-300'
              onClick={() => {onSelectComponent('me')}}
            >
               <RiUserFill style={{ color: 'black' }} size={20} />
            </li>
            
        </ul>

      
      <div onClick={handleNav} className='block md:hidden z-10'>
        {nav ? <AiOutlineClose style={{ color: 'black' }} size={20} /> : <AiOutlineMenu style={{ color: 'black' }} size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[15%] h-full bg-[#e0fbfc] ease-in-out duration-500 z-10 flex content-center items-center flex-col'
            : 'ease-in-out w-[15%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10'
        }
      >


            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center'
              onClick={() => onSelectComponent('home')}
            >
              <IoMdHome style={{ color: 'black' }} size={24} />
            </li>
           <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center'
              onClick={() => {onSelectComponent('dashboard'); handleNav() }}
            >
              <IoMdListBox style={{ color: 'black' }} size={24} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center'
              onClick={() => {onSelectComponent('offers'); handleNav() }}
            >
               <IoMdApps style={{ color: 'black' }} size={24} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center'
              onClick={() => {onSelectComponent('likes'); handleNav() }}
            >
               <IoHeart style={{ color: 'black' }} size={24} />
            </li>
            <li
              className='p-4 hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center' 
              onClick={() => {onSelectComponent('me'); handleNav() }}
            >
               <RiUserFill style={{ color: 'black' }} size={24} />
            </li>
       
      </ul>
    </div>
  );
};

export default Navbar;