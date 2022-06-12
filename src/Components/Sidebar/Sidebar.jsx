import './Sidebar.css'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Sidebar = (props) => {
  const colors = ['#fe9b72', '#fec971', '#00d4fe', '#b693fd', '#e4ee91']

  const [listOpen, setListOpen] = useState(false)
  return (
    <div className='sidebar'>
      <AddCircleIcon onClick={() => setListOpen(!listOpen)} style={{color: 'cyan'}} fontSize='large' />
      <ul className={`sidebar_list ${listOpen ?'sidebar_list_active': ''} `}>
      {
        colors.map((item,index) => <li key={index} className="sidebar_list_item" style={{backgroundColor: item}} onClick={() => props.addNote(item)}/>)
      } 
      </ul>
    </div>
  )
}

export default Sidebar