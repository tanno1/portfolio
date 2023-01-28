import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from 'react-transition-group';
import { useRef } from 'react';

const Navbar = () => {

  const links = [
    {
      id: 1,
      link: 'Projects'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Contact'
    },
    {
      id: 4,
      link: 'Resume'
    },
  ]

  const listItems = links.map((id) =>
    <li key={id} className='font-medium text-white px-4 cursor-pointer hover:scale-105 duration-200'>
      {id.link}
    </li>
  )

  const [nav, setNav] = useState(false)

  return (
    <div id='root'>
      <div className='flex justify-between items-center w-full h-20 bg-zinc-900 text-zinc-100'>
        <div id="logo">
        </div>
        <ul id="large-nav" className='hidden md:flex md:flex-row justify-center items-center space-x-4 px-4'>
          {listItems}
        </ul>

        <div onClick={() => setNav(!nav)} className='absolute right-5 md:hidden cursor-pointer z-10000 text-zinc-100'>
          {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>

        {nav && (
          <div className='z-1000 left-0 top-20 absolute h-screen w-screen px-4 cursor-pointer font-medium text-black bg-zinc-900'>
            <ul onClick={() => setNav(!nav)}>
              {listItems}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;