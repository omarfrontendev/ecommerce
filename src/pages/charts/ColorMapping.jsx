import React from 'react'
import ColorMappingChart from '../../components/chart/ColorMappingChart'
import TitlePages from '../../components/titlePages/TitlePages'

const ColorMapping = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Color Mapping' />
      <ColorMappingChart />
    </div>
  )
}

export default ColorMapping