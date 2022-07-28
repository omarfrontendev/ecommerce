import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, RowDD, Inject, Search, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../../data/dummy'
import TitlePages from '../../components/titlePages/TitlePages'

import './customers.css'

const Customers = () => {
  return (
    <div className="orders__page customers__page">
      <TitlePages page='Page' title='Customers' />
      <GridComponent
        id='gridcomp'
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Search', 'Add']}
        editSettings={{
          allowAdding: true, 
          allowEditing: true, 
          allowDeleting: true
        }}
        width='auto'
        allowRowDragAndDrop={true}
        selectionSettings={{type: 'Multiple'}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Search, Edit, Sort, Filter, RowDD, Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers