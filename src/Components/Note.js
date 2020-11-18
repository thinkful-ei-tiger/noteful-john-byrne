import React from 'react'

export default function Note(props) {
  return (
    <div className='note'>
      <h2>{props.note.name}</h2>
      <span>Date modified: {props.note.modified}</span>
      <button>Delete</button>
      <p>{props.note.content}</p>
    </div>
  )
}
