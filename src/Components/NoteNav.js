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
    console.log('Hello')
    const { notes = [] } = this.context
    const noteForFolder = notes.filter(
      (note) => note.folderId === this.props.match.params.folderId
    )
    return (
      <>
        <div className='note-list'>
          <ul className='note-list'>
            {noteForFolder.map((note) => (
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
        </div>
        <div className='add-bookmark'>
          <Link to='/add-note'>
            <button>Add Note</button>
          </Link>
        </div>
      </>
    )
  }
}
