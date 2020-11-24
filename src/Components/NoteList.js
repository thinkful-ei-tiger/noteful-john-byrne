import React from 'react'
import { Link } from 'react-router-dom'
import NoteCard from './NoteCard'
import ApiContext from './ApiContext'
import './NoteList.css'

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
      <div className='notes-home'>
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
      </div>
    )
  }
}
