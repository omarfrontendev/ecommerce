import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, ILoadedEventArgs, DateTime, Zoom, Logarithmic, Crosshair, ChartTheme } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'

const FinancialChart = () => {
  return (
    <div className='chart__container'>
      <ChartComponent 
        id='charts' 
        style={{ textAlign: "center" }}
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        legendSettings={{ visible: false }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
      >
        <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
        <SeriesCollectionDirective>
            <SeriesDirective 
              dataSource={financialChartData} 
              xName='x' 
              yName='low' 
              name='Apple Inc' 
              type='Hilo'   
              low='low'
              high='high'>
            </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default FinancialChart