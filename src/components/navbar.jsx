import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

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
        <ul id="large-nav" className='hidden md:flex md:flex-col justify-center items-center space-x-4 px-4'>
          {listItems}
        </ul>

        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer z-100 text-zinc-100'>
          {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>

        {nav && (
          <ul className='px-4 cursor-pointer font-medium text-zinc-100' onClick={() => setNav(!nav)}>
            {listItems}
          </ul>
        )}

      </div>
    </div>
  );
}

export default Navbar;