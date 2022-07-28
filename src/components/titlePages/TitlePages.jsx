import React from 'react'

import './titlePages.css'

const TitlePages = ({ page, title }) => {
  return (
    <div className='title_page'>
      <span>{page}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default TitlePages