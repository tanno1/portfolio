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
    <li key={id} className='font-medium text-white'>
      {id.link}
    </li>
  )

  return (
    <div id='root'>
      <div className='flex justify-between items-center w-full h-20 bg-zinc-900 text-zinc-100'>
        <div id="logo">
        </div>
        <div id='burger-menu-btn'>
          <button>
            <FaBars size={30} color='white'/>
          </button>
        </div>
        <div>
            <ul id="nav" className='flex flex-col justify-center items-center space-x-4 px-4'>
              {listItems}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar