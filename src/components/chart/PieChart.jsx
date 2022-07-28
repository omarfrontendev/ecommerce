import React from 'react'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
  Inject, AccumulationLegend, PieSeries,
  AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy'

const PieChart = ({ radius, width }) => {
  return (
    <div className='chart__container'>
      <AccumulationChartComponent 
        id="pie-chart"
        legendSettings={{
          visible: true,
          position: 'Top'
        }}
        enableSmartLabels={true}
        tooltip={{ enable: true }}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel]} />
        <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          name='Project' 
          dataSource={pieChartData} 
          xName='x' 
          yName='y'        
          innerRadius='40%' 
          startAngle={0}
          endAngle={360} 
          radius={radius} 
          explode={true} 
          explodeOffset='10%'
          explodeIndex={3}
          dataLabel={{
              visible: true,
              name: 'text',
              position: 'Inside',
              font: {
                fontWeight: '600',
                color: '#ffffff',
                size: '14px'
              }
          }}
          width={width}
        >
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default PieChart