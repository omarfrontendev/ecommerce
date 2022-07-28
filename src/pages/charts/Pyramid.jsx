import React from 'react'
import PyramidChart from '../../components/chart/PyramidChart'
import TitlePages from '../../components/titlePages/TitlePages'

const Pyramid = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Pyramid' />
      <PyramidChart />
    </div>
  )
}

export default Pyramid