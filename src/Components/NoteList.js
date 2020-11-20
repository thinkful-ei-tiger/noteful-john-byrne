import React from 'react'
import { Link } from 'react-router-dom'
import NoteCard from './NoteCard'
import ApiContext from './ApiContext'

export default class NoteListNav extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  }
  static contextType = ApiContext
  render() {
    const { notes = [] } = this.context
    return (
      <div className='note-list'>
        <ul className='note-list'>
          {notes.map((note) => (
            <li key={note.id}>
              {
                <NoteCard
                  name={note.name}
                  id={note.id}
                  modified={note.modified}
                />
              }
            </li>
          ))}
        </ul>
        <div className='add-note'>
          <Link to='/add-note'>
            <button>Add Note</button>
          </Link>
        </div>
      </div>
    )
  }
}
