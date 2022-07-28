import React from 'react'
import { RichTextEditorComponent, Toolbar, Inject, Image, Link, HtmlEditor, Count, QuickToolbar, Table, FileManager } from '@syncfusion/ej2-react-richtexteditor';
import TitlePages from '../../components/titlePages/TitlePages'

const Editor = () => {
  return (
    <div className='orders__page'>
      <TitlePages page='App' title='Editor' />
      <RichTextEditorComponent
        showCharCount={true}
      >
        <div>
          <p>The Rich Text Editor is a WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid 
          <a href='https://ej2.syncfusion.com/home/' target='_blank'>
          HTML markup</a> or <a href='https://ej2.syncfusion.com/home/' target='_blank'>markdown</a> of the content</p> <p><b>Toolbar</b></p><ol><li> <p>The Toolbar contains commands to align the text, insert a link, insert an image, insert list, undo/redo operations, HTML view, etc </p></li><li><p>The Toolbar is fully customizable </p></li></ol> <p><b>Links</b></p><ol><li><p>You can insert a hyperlink with its corresponding dialog </p></li><li><p>Attach a hyperlink to the displayed text. </p></li><li><p>Customize the quick toolbar based on the hyperlink </p> </li></ol><p><b>Image.</b></p><ol><li><p>Allows you to insert images from an online source as well as the local computer </p> </li><li><p>You can upload an image</p></li><li><p>Provides an option to customize the quick toolbar for an image </p></li></ol>
          <img 
            alt="Logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJ8evJrr4X3g8mPH2-brEka-VZqX87OOaf_Ahh3OTHQ&s" 
            style={{ width: '300px', height: '400px', objectFit: 'contain' }}
          />
        </div>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, Count, QuickToolbar, Table, FileManager]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor