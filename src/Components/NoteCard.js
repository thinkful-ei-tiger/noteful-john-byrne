import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteCard(props) {
  return (
    <div className='note-card'>
      <h2>
        <Link to={`/note/${props.id}`}>{props.note.name}</Link>
      </h2>
      <span>Date modified: {props.note.modified}</span>
      <button>Delete Note</button>
    </div>
  )
}
