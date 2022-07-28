import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Avatar from '../../data/avatar.jpg'

import './header.css'

const Header = ({ setState, state }) => {

  return (
    <nav className='navbar'>
      <TooltipComponent className='menu__tooltip' content={state ? 'Close Menu' : 'Open Menu'} position='BottomCenter'>
        <button className={`menu__btn ${state ? 'close__menu' : ''}`} onClick={() => setState(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </TooltipComponent>
      <div className="nav__buttons">
        <div className="nav__btn">
          <TooltipComponent 
            content='Cart' 
            position='BottomCenter'
          >
            <button>
              <FiShoppingCart />
            </button>
          </TooltipComponent>
        </div>
        <div className="nav__btn">
          <TooltipComponent 
            content='Chat' 
            position='BottomCenter'
          >
            <button>
              <BsChatLeft />
            </button>
          </TooltipComponent>
        </div>
        <div className="nav__btn">
          <TooltipComponent 
            content='Notifications' 
            position='BottomCenter'
          >
            <button>
              <RiNotification3Line />
            </button>
          </TooltipComponent>
        </div>
        <div className="nav__btn">
          <TooltipComponent 
            content='Profile' 
            position='BottomCenter'
          >
            <button>
              <div className="user__button">
                <img src={Avatar} alt="Avatar" />
                <p>Hi, <span>Michael</span></p>
                <MdKeyboardArrowDown />
              </div>
            </button>
          </TooltipComponent>
        </div>
      </div>
    </nav>
  )
}

export default Header