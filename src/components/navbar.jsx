import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
import connectedppl from '../resources/connectedppl.png';
import laptop from '../resources/laptop.png';
import aboutme from '../resources/aboutme.png';
import skills from '../resources/skills.png';

const Navbar = () => {

  const links = [
    {
      id: 1,
      link: 'Projects',
      photo: laptop,
      alt: 'projects icon'
    },
    {
      id: 2,
      link: 'About',
      photo: aboutme,
      alt: 'about icon'
    },
    {
      id: 3,
      link: 'Contact',
      photo: connectedppl,
      alt: 'contact icon'
    },
    {
      id: 4,
      link: 'Skills',
      photo: skills,
      alt: 'skills icon'
    },
  ]

  const [nav, setNav] = useState(false)

  return (
    <div id='root'>
      <div className='flex justify-between items-center w-full h-20 bg-zinc-900 text-zinc-100'>
        <div id="logo">
        </div>
        <ul id="large-nav" className='hidden md:flex md:flex-row justify-center items-center space-x-4 px-4'>
          {links.map((id) => 
            <li>
              <p>
                {id.link}
              </p>
            </li>
          )}
        </ul>

        <div onClick={() => setNav(!nav)} className='absolute right-5 md:hidden cursor-pointer z-10000 text-zinc-100'>
          {nav ? <FaTimes size={30}/>: <FaBars size={30}/>}
        </div>

        {nav && (
          <div className='z-100 absolute bottom-0 top-20 h-[calc(screen-20px)] w-screen px-4 cursor-pointer font-medium text-black bg-zinc-900 justify-center items-center'>
            <ul>
              {links.map((id) => 
                <li className='grid grid-cols-2 flex items-center text-zinc-100'>
                  <img src={id.photo} alt={id.alt}></img>
                  <p>
                    {id.link}
                  </p>
                </li>
              )}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;