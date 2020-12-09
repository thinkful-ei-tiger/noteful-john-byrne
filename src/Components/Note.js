import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from './ApiContext'
import config from './config'
import './Note.css'

export default class Note extends React.Component {
  static contextType = ApiContext

  handleClickDelete = (event) => {
    event.preventDefault()
    const noteId = this.props.match.params.noteId
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((event) => Promise.reject(event))
        this.context.deleteNote(noteId)
      })
      .catch((error) => {
        console.error({ error })
      })
    this.props.history.push('/')
  }

  render() {
    const { notes } = this.context
    const note =
      notes.find((n) => n.id.toString() === this.props.match.params.noteId) ||
      {}
    return (
      <div className='note'>
        <h2>{note.title}</h2>
        <span>Date modified: {note.date_published}</span>
        <button
          className='delete-note'
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
        <p>{note.content}</p>
      </div>
    )
  }
}
Note.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ noteId: PropTypes.string }),
  }),
  history: PropTypes.shape({ push: PropTypes.func }),
}
