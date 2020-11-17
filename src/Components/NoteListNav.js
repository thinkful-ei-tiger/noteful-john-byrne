import React from 'react'
import NoteCard from './NoteCard'

export default function NoteListNav(props) {
  return (
    <div className='note-list'>
      <ul className='note-list'>
        {props.notes.map((note) => (
          <li key={note.id}>{<NoteCard note={note} />}</li>
        ))}
      </ul>
      <div className='add-note'>
        <button>Add Note</button>
      </div>
    </div>
  )
}
