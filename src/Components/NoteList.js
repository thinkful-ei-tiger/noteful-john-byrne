import React from 'react'
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
          <button>Add Note</button>
        </div>
      </div>
    )
  }
}
