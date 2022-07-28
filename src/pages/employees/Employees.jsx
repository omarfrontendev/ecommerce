import React from 'react'
import TitlePages from '../../components/titlePages/TitlePages'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid} from '../../data/dummy'

import '../orders/orders.css'
import './employees.css'

const Employees = () => {
  return (
    <div className="orders__page employees__page">
      <TitlePages title='Employees' page='Page' />
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees;