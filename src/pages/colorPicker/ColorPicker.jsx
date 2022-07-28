import React, { useState } from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import TitlePages from '../../components/titlePages/TitlePages'

import './colorPicker.css'

const ColorPicker = () => {

  const [cuurentColor, setCurrentColor] = useState('#008000')

  return (
    <div className="orders__page color-picker__page">
      <TitlePages page='App' title='Color Picker' />
      <div className="color-picker__content">
        <div id='preview' style={{backgroundColor: `${cuurentColor}`}}></div>
        <div className="palletes">
          <div className="pallete">
            <p>Inline Pallete</p>
            <ColorPickerComponent 
              id='inline-palette' 
              mode='Palette' 
              modeSwitcher={false} 
              inline={true} 
              showButtons={false} 
              change={e => setCurrentColor(e.currentValue.hex)}
            >
            </ColorPickerComponent>
          </div>
          <div className="pallete">
            <p>Inline Picker</p>
            <ColorPickerComponent 
              id='inline-picker' 
              mode='Picker' 
              modeSwitcher={false} 
              inline={true} 
              showButtons={false} 
              change={e => setCurrentColor(e.currentValue.hex)}
            >
            </ColorPickerComponent>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker