import React from 'react'
import TitlePages from '../../components/titlePages/TitlePages'
import Stacked from '../../components/chart/Stacked'

const StackedPage = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Stacked' />
      <Stacked width={'100%'} height='420px' />
    </div>
  )
}

export default StackedPage