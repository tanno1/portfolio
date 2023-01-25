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

  const listItems = links.map((id, link) =>
    <li key={id} className='font-medium text-white'>{link}</li>
  )

  return (

    <div className='flex justify-between items-center w-full h-20 bg-zinc-900 text-zinc-00'>
      <div id="logo">

      </div>
      <ul id="nav">
        {listItems}
      </ul>


    </div>

  );
}

export default Navbar