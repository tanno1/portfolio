import React from 'react'

const navbar = () => {

  const links = [
    {
      id: 1,
      link: Projects
    },
    {
      id: 2,
      link: About
    },
    {
      id: 3,
      link: Contact
    },
    {
      id: 4,
      link: Resume
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-black px-4 z-10 py-2'>
        <div id='title'>
            <h1>Tanner</h1>
        </div>
        <div id='clickables'>
            <div id='lightdark'></div>
            <div id='dropdown'>
                <ul>
                  {links.map(({id, link}) => (
                    <li
                      key={id}
                      className='px.4 cursor-pointer capitalize font-medium text-black'
                    >
                      <link>
                        {link}
                      </link>
                    </li>
                  ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default navbar