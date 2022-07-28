import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import Button from '../../components/button/Button'
import PieChart from '../../components/chart/PieChart'
import SparkLine from '../../components/chart/SparkLine'
import Stacked from '../../components/chart/Stacked'
import { earningData, SparklineAreaData } from '../../data/dummy'
import Ellis from '../../data/welcome-bg.svg'

import './ecommerce.css'

const Ecommerce = () => {

  return (
    <div className='ecommerce__page'>
      <div className="earning">
        <img className='ellis__img' src={Ellis} alt='Image' />
        <div className="earning__content">
          <div>
            <p>Earnings</p>
            <span>$63,4448,78</span>
          </div>
          <div className='dollar__icon'>
            <BsCurrencyDollar />
          </div>
        </div>
        <Button>Download</Button>
      </div>  
      <div className="earning__data">
        {earningData.map((data, i) => (
          <div key={i} className='earning__box'>
            <div className="earning__icon" style={{color: `${data.iconColor}`, backgroundColor: `${data.iconBg}`}}>
              {data.icon}
            </div>
            <div className="earning__amount">
              <p>{data.amount}</p>
              <span style={{color: `${data.pcColor}`}}>{data.percentage}</span>
            </div>
            <p>{data.title}</p>
          </div>
        ))}
      </div> 
      <div className="ecommerce__charts">
        <div className="left__chart">
          <p>Revenue Updates</p>
          <div className="E-line__chart-card">
            <div className='E-line__chart-text'>
              <div>
                <p>$93,438</p>
                <span>23%</span>
              </div>
              <span>Budget</span>
            </div>
            <div className='E-line__chart-text'>
              <div>
                <p>$48,478</p>
              </div>
              <span>Expense</span>
            </div>
            <div className='ecommerec__sparkline'>
              <SparkLine
                id='sparkline'
                type='Line'
                height='80px'
                width='200px'
                data={SparklineAreaData}
              />
            </div>
            <Button>
              Dwonload Report
            </Button>
          </div>
        </div>
        <div className="center__chart">
          <div className="ecommerce__stacked">
            <PieChart
              radius='50%'
              width='340px'
            />
          </div>
        </div>
        <div className="rigth__chart">
          <dir className='right__chart-header'>
            <p><GoPrimitiveDot /> Expernse</p>
            <p><GoPrimitiveDot /> budget</p>
          </dir>
          <div className="ecommerce__stacked">
            <Stacked 
              width='300px'
              height='360px'
            />
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Ecommerce