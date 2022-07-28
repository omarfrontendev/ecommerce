import React, { useEffect, useState } from 'react'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../../data/dummy'

import './sidebar.css'

const Sidebar = ({ setState, state }) => {

  const [screenSize, setScreenSize] = useState(undefined)

  const screenResize = () => {
    setScreenSize(window.innerWidth)
  };

  useEffect(() => {

    window.addEventListener('resize', screenResize);
    
    return () => {
      window.removeEventListener('resize', screenResize);
    }

  }, []);

  useEffect(() => {
    setScreenSize(window.innerWidth)
  }, [])

  useEffect(() => {
    if(screenSize <= 900) {
      setState(false)
    }else {
      setState(true)
    }

  }, [screenSize]);


  return (
    <div className={`sidebar ${state ? 'active' : ''}`}>
      <div>
        <div className="sidebar__content">
          <div className="sidebar__header">
            <div className="logo">
              <SiShopware />Shoppy
            </div>
            <TooltipComponent position='BottomCenter' content='Close'>
              <button className='close__btn' onClick={() => setState(false)}>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="sidebar__menu">
            {links.map(item => (
              <div key={item.title}>
                <p>{item.title}</p>
                <div className='sidebar__links'>
                  {item.links.map(link => (
                    <NavLink
                    key={link.name}
                      to={`/${link.name}`}
                      className={({ isActive }) => isActive ? 'active__link' : '' }
                      onClick={() => state && screenSize < 900 && setState(false)}
                    >
                      {link.icon}{link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar