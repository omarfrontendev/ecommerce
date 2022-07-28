import React from 'react'
import PieChart from '../../components/chart/PieChart'
import TitlePages from '../../components/titlePages/TitlePages'

const Pie = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Pie' />
      <PieChart
        radius='70%'
      />
    </div>
  )
}

export default Pie