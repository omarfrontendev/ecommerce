import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { StackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy';

const Stacked = ({ width, height }) => {

  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      style={{ textAlign: "center" }}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{enable: true}}
      legendSettings={{ background: 'white' }}
    >
      <Inject
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      />
      <SeriesCollectionDirective>
        {StackedCustomSeries().map((item, i) => <SeriesDirective key={i} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked