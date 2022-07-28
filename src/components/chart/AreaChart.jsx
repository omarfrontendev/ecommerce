import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, ILoadedEventArgs, Legend, ChartTheme} from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'

const AreaChart = () => {
  return (
    <div className='chart__container'>
      <ChartComponent
        id='charts'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{border: {width: 0}}}
        tooltip={{enable: true}}
        style={{ textAlign: "center" }}
      >
        <Inject
          services={[SplineAreaSeries, DateTime, Legend]}
        />
        <SeriesCollectionDirective>
        {areaCustomSeries.map((item, i) => <SeriesDirective key={i} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default AreaChart