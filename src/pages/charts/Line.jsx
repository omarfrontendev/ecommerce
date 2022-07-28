import React from 'react'
import LineChart from '../../components/chart/LineChart'
import TitlePages from '../../components/titlePages/TitlePages'

const Line = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='line' />
      <LineChart />
    </div>
  )
}

export default Line