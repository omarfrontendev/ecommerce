import React from 'react'
import AreaChart from '../../components/chart/AreaChart'
import TitlePages from '../../components/titlePages/TitlePages'

const Area = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Area' />
      <AreaChart />
    </div>
  )
}

export default Area