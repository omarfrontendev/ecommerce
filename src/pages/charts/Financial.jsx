import React from 'react'
import FinancialChart from '../../components/chart/FinancialChart'
import TitlePages from '../../components/titlePages/TitlePages'

const Financial = () => {
  return (
    <div className="orders__page line__chart__page">
      <TitlePages page='Chart' title='Financial' />
      <FinancialChart />
    </div>
  )
}

export default Financial