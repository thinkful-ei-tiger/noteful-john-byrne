import React from 'react'
import ApiContext from './ApiContext'
import config from './config'

export default class Note extends React.Component {
  static defaultProps = {
    onDeleteNote: () => {},
  }
  static contextType = ApiContext

  handleClickDelete = (event) => {
    event.preventDefault()
    const noteId = this.props.id

    fetch(`${config.API_Endpoint}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((event) => Promise.reject(event))
        return res.json()
      })
      .then(() => {
        this.context.deleteNote(noteId)
        this.props.onDeleteNote(noteId)
      })
      .catch((error) => {
        console.error({ error })
      })
  }

  render() {
    const { notes } = this.context
    const note =
      notes.find((n) => n.id === this.props.match.params.noteId) || {}
    return (
      <div className='note'>
        <h2>{note.name}</h2>
        <span>Date modified: {note.modified}</span>
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
