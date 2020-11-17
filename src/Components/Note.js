import React from 'react'

export default function Note(props) {
  return (
    <div className='note'>
      <h2>{props.note.name}</h2>
      <span>Date modified: {props.note.modified}</span>
      <p>{props.note.content}</p>
      <button>Delete Note</button>
    </div>
  )
}
