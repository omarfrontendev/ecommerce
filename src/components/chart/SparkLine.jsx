import React, { useContext } from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'
import { ThemeContext } from '../../store/theme-context'

const SparkLine = ({ id, type, height, width, data }) => {

  const ctx = useContext(ThemeContext)

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      dataSource={data}
      type={type}
      lineWidth={1}
      fill={ctx.currentColor}
      border={{color: ctx.currentColor, width: 2}}
      xName='xval' 
      yName='yval'
      tooltipSettings={{
        visible: true,
        format: '${xval} : data ${yval}',
        trackLineSettings: {
          visible: true
        }
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>

  )
}

export default SparkLine