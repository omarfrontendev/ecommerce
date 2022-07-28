import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'


const LineChart = () => {
  return (
    <div className='chart__container'>
      <ChartComponent
          id='line-chart'
          height='320px'
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{enable: true}}
          style={{color: '#FFF'}}
      >
        <Inject
          services={[LineSeries, DateTime, Legend, Tooltip]}
        />
        <SeriesCollectionDirective>
        {lineCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart