import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Ecommerce, Orders, Calendar, Employees, Kanban, ColorPicker, Editor, Customers, Line, Area, Bar, Pie, Financial, ColorMapping, StackedPage, Pyramid } from './pages';
import { Header, Sidebar, Footer, ThemeSettings } from './layout/index';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './style/globalStyle';


const App = () => {

  const [settingsActive, setSettingsActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(true);
  const [themeMode, setThemeMode] = useState('light');

  // console.log(themeMode)

  const TheMode = themeMode === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={TheMode}>
      <GlobalStyle />
      <div style={{display: 'flex'}}>
      <Sidebar setState={setSidebarActive} state={sidebarActive} />
      <div className={`main_content ${sidebarActive ? 'side__active' : ''}`}>
      <Header setState={setSidebarActive} state={sidebarActive} />
        <Routes>
          <Route path='/' element={<Ecommerce />} />
          <Route path='/ecommerce' element={<Ecommerce />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/employees' element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/kanban' element={<Kanban />} />
          <Route path='/color-picker' element={<ColorPicker />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/line' element={<Line />} />
          <Route path='/area' element={<Area />} />
          <Route path='/bar' element={<Bar />} />
          <Route path='/pie' element={<Pie />} />
          <Route path='/financial' element={<Financial />} />
          <Route path='/color-mapping' element={<ColorMapping />} />
          <Route path='/stacked' element={<StackedPage />} />
          <Route path='/pyramid' element={<Pyramid />} />
        </Routes>
        {/* <Footer /> */}
      </div>
      </div>
      <ThemeSettings theme={themeMode} toggleThemt={setThemeMode} setState={setSettingsActive} state={settingsActive} />
      <div className='settings__btn'>
        <TooltipComponent content='Settings' position='Top'>
          <button onClick={() => setSettingsActive(prev => !prev)}>
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
    </ThemeProvider>
  )
}

export default App