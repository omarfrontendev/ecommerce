import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../../data/dummy'
import TitlePages from '../../components/titlePages/TitlePages'

const Calendar = () => {
  return (
    <div className="orders__page calendar__page">
      <TitlePages page='App' title='Calendar' />
      <ScheduleComponent 
        height='650px' 
        selectedDate={new Date(2021, 0, 10)} 
        eventSettings={{ dataSource: scheduleData }}
      >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar