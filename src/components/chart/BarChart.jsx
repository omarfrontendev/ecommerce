import React from 'react'
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, ILoadedEventArgs, Legend, ChartTheme} from '@syncfusion/ej2-react-charts'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ChartTheme, Legend, Category, Tooltip, ColumnSeries, ILoadedEventArgs, DataLabel} from '@syncfusion/ej2-react-charts';
import { barChartData, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'


const BarChart = () => {

let data1 = [{ x: 'USA', y: 46 }, { x: 'GBR', y: 27 }, { x: 'CHN', y: 26 }];
let data2 = [{ x: 'USA', y: 37 }, { x: 'GBR', y: 23 }, { x: 'CHN', y: 18 }];
let data3 = [{ x: 'USA', y: 38 }, { x: 'GBR', y: 17 }, { x: 'CHN', y: 26 }];

  return (
    <div className='chart__container'>
      <ChartComponent 
        id='charts' 
        height='420px'
        width='90%'
        style={{ textAlign: "center" }}
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
        <SeriesCollectionDirective>
          <SeriesDirective 
            dataSource={data1} 
            xName='x' 
            yName='y' 
            name='Gold' ty
            pe='Column'
            marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff'}}}}
          >
          </SeriesDirective>
          <SeriesDirective 
            dataSource={data2} 
            xName='x' 
            yName='y' 
            name='Silver' 
            type='Column'
            marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff'}}}}
            >
          </SeriesDirective>
          <SeriesDirective 
            dataSource={data3} 
            xName='x' 
            yName='y' 
            name='Bronze' 
            type='Column'
            marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff'}}}}
            >
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default BarChart