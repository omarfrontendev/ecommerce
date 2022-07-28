import React from 'react'
import {AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts'
import { PyramidData } from '../../data/dummy'

const PyramidChart = () => {
  return (
    <div className='chart__container'>

      <AccumulationChartComponent 
        id='pyramid-chart' 
        title='Food Comparison Chart'
        legendSettings={{
          visible: false,
        }}
        tooltip={{ enable: true, format: '${point.x} : <b>${point.y} cal</b>' }}
      >
        <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name='Food' 
            dataSource={PyramidData} 
            xName='x' 
            yName='y' 
            type='Pyramid' 
            width='60%' 
            height='80%'
            neckWidth='15%' 
            gapRatio={0.03} 
            explode={true} 
            emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
            dataLabel={{
              visible: true, position: 'Inside',
              name: 'text',
            }}
            >
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default PyramidChart