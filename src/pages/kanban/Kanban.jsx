import React from 'react'
import TitlePages from '../../components/titlePages/TitlePages'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from '../../data/dummy'

const Kanban = () => {
  return (
    <div className="orders__page">
      <TitlePages page='App' title='Kanban' />
      <KanbanComponent 
        id="kanban" 
        keyField="Status" 
        dataSource={kanbanData} 
        cardSettings={{ contentField: "Summary", headerField: "Id" }} 
        enablePersistence={true} 
        swimlaneSettings={{ keyField: "Assignee" }}
      >
        <ColumnsDirective>
        {kanbanGrid.map((item, i) => (
          <ColumnDirective
            key={i}
            {...item}
          >

          </ColumnDirective>
        ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban