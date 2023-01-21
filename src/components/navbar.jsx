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
    <div>
        <div id='logo'>
            
        </div>
        <div id='clickables'>
            <div id='lightdark'></div>
            <div id='dropdown'>
                <ul>
                  {links.map(({id, link}) => (
                    <li
                      key={id}
                      className=''
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