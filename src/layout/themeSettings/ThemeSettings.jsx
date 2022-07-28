import React, { useContext, useEffect, useState } from 'react'
import {  MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../../data/dummy'

import './themeSettings.css'
import { ThemeContext } from '../../store/theme-context'

const ThemeSettings = ({ state, setState, toggleThemt,theme }) => {

  const ctx = useContext(ThemeContext);

  return (
    <>
      {state && <div className='overlay'></div>}
      <div  className={`theme_settings ${state ? 'active' : ''}`}>
        <div className="theme__settings__content">
          <div className="theme__header theme-box">
            <p>Settings</p>
            <TooltipComponent content='Close' position='BottomCenter'>
              <button onClick={() => setState(false)}>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="theme__options theme-box">
            <p>Theme  Options</p>
            <div className="theme__option-input">
              <input 
                type='radio'
                id='light'
                value='light'
                name='theme'
                checked={theme === 'light'}
                onChange={e => toggleThemt(e.target.value)}
              />
              <label htmlFor="light">Light</label>
            </div>
            <div className="theme__option-input">
              <input 
                type='radio'
                id='dark'
                value='dark'
                name='theme'
                checked={theme === 'dark'}
                onChange={e => toggleThemt(e.target.value)}
              />
              <label htmlFor="dark">Dark</label>
            </div>
          </div>
          <div className="theme__colors theme-box">
            <p>Theme Colors</p>
            <div className="colors">
              {themeColors.map((item, i) => (
                <TooltipComponent
                  key={i}
                  content={item.name}
                  position='TopCenter'
                >
                  <button 
                  onClick={() => ctx.setCurrentColor(item.color)}
                    style={{background: `${item.color}`}}
                  >
                    {item.color === ctx.currentColor ? <BsCheck /> : ''}
                  </button>
                </TooltipComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThemeSettings