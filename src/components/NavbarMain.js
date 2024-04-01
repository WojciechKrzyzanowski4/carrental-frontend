import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMdListBox, IoMdApps, IoMdHome } from 'react-icons/io';
import { RiUserFill } from 'react-icons/ri';
import { IoHeart } from 'react-icons/io5';

const NavItem = ({ icon, text, onClick }) => (
  <li className='p-4 hover:bg-[#9DB4C0] rounded-xl m-2 cursor-pointer duration-300' onClick={onClick}>
    {icon}
  </li>
);

const NavItemMobile = ({ icon, onClick }) => (
  <li className='p-4 hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center' onClick={onClick}>
    {icon}
  </li>
);

const Navbar = ({ onSelectComponent }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed bg-white flex justify-between items-center h-16 mx-auto px-4 w-full z-10 border-b'>
      <h1 className='w-full text-2xl font-bold lg:text-left sm:text-center xs:text-center ml-8'>CAR RENTAL SERVICE</h1>
      <ul className='hidden md:flex'>
        <NavItem icon={<IoMdHome style={{ color: 'black' }} size={20} />} onClick={() => onSelectComponent('home')} />
        <NavItem icon={<IoMdListBox style={{ color: 'black' }} size={20} />} onClick={() => onSelectComponent('dashboard')} />
        <NavItem icon={<IoMdApps style={{ color: 'black' }} size={20} />} onClick={() => onSelectComponent('offers')} />
        <NavItem icon={<IoHeart style={{ color: 'black' }} size={20} />} onClick={() => onSelectComponent('likes')} />
        <NavItem icon={<RiUserFill style={{ color: 'black' }} size={20} />} onClick={() => onSelectComponent('me')} />
      </ul>
      <div onClick={handleNav} className='block md:hidden z-10'>
        {nav ? <AiOutlineClose style={{ color: 'black' }} size={20} /> : <AiOutlineMenu style={{ color: 'black' }} size={20} />}
      </div>
      <ul className={nav ? 'fixed md:hidden left-0 top-0 w-[15%] h-full bg-[#e0fbfc] ease-in-out duration-500 z-10 flex content-center items-center flex-col' : 'ease-in-out w-[15%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10'}>
        <NavItemMobile icon={<IoMdHome style={{ color: 'black' }} size={24} />} onClick={() => { onSelectComponent('home'); handleNav(); }} />
        <NavItemMobile icon={<IoMdListBox style={{ color: 'black' }} size={24} />} onClick={() => { onSelectComponent('dashboard'); handleNav(); }} />
        <NavItemMobile icon={<IoMdApps style={{ color: 'black' }} size={24} />} onClick={() => { onSelectComponent('offers'); handleNav(); }} />
        <NavItemMobile icon={<IoHeart style={{ color: 'black' }} size={24} />} onClick={() => { onSelectComponent('likes'); handleNav(); }} />
        <NavItemMobile icon={<RiUserFill style={{ color: 'black' }} size={24} />} onClick={() => { onSelectComponent('me'); handleNav(); }} />
      </ul>
    </div>
  );
};

export default Navbar;