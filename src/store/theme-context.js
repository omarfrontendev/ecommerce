import React, { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext({
  currentColor: '',
  setCurrentColor: () => {},
  currentTheme: '',
  setCurrentTheme: () => {} 
});

const ThemeProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState('#1A97F5');
  const [currentTheme, setCurrentTheme] = useState('');

  useEffect(() => {
    document.documentElement.style.setProperty('--main-color', currentColor);
  }, [currentColor]);

  return (
    <ThemeContext.Provider
      value={{
        currentColor,
        currentTheme,
        setCurrentColor,
        setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
  
};

export default ThemeProvider