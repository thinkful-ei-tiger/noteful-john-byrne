import React from 'react'
import PropTypes from 'prop-types'
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
      (note) => note.folder.toString() === this.props.match.params.folderId
    )
    return (
      <>
        <div className='note-list'>
          <ul className='note-list'>
            {noteForFolder.map((note) => (
              <li key={note.id}>
                {
                  <NoteCard
                    name={note.title}
                    id={note.id}
                    modified={note.date_published}
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
NoteListNav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ folderId: PropTypes.string }),
  }),
}
