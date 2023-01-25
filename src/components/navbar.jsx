import React from 'react'

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

    <div className='flex justify-between items-center w-full h-20 bg-zinc-900 text-zinc-00'>
      <div id="logo">

      </div>
      <ul id="nav" className='flex flex-col justify-center items-center'>
        {listItems}
      </ul>


    </div>

  );
}

export default Navbar