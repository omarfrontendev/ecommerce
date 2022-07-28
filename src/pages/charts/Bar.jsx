import React from 'react'
import BarChart from '../../components/chart/BarChart'
import TitlePages from '../../components/titlePages/TitlePages'

const Bar = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Bar' />
      <BarChart />
    </div>
  )
}

export default Bar