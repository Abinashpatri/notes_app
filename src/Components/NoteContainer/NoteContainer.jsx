import './NoteContainer.css'
import React from 'react'
import Note from '../Note/Note'

const NoteContainer = (props) => {

  const reverseArray = (arr) => {
    const array = []
    for(let i=arr.length -1; i>=0; --i){
      array.push(arr[i])
    }
    return array
  }
  const notes = reverseArray(props.notes)


  return (
    <div className='note-container'>
    <h2>Add Note</h2>
    <div className='note-container_notes custom-scroll'>
      {
        notes.length > 0 ?
        (notes.map((item) => <Note note={item}  key={item.id} deleteNote={props.deleteNote} updateText={props.updateText}/>)) :
        (<h3>No Notes Present</h3>)
      }
      </div>
    </div>
  )
}

export default NoteContainer