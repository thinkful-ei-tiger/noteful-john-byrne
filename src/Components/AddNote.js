import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from './ApiContext'
import config from './config'

export default class AddNote extends React.Component {
  static defaultProps = {
    onAddNote: () => {},
  }
  static contextType = ApiContext

  handleAddNote = (event) => {
    event.preventDefault()
    const newNote = {
      title: event.target.noteTitle.value,
      content: event.target.noteContent.value,
      folder: event.target.folderTitle.value,
      modified: new Date().toISOString(),
    }
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((result) => {
        this.context.onAddNote(result)
        this.props.history.push('/')
      })
      .catch((error) => console.log('error', error))
  }

  render() {
    return (
      <section className='add-note'>
        <h2>Add New Note</h2>
        <form onSubmit={this.handleAddNote}>
          <input
            type='text'
            name='noteTitle'
            className='note-entry'
            placeholder='Note Title'
            required
          />
          <br />
          <input
            type='text'
            name='noteContent'
            className='content-entry'
            placeholder='Note Content'
            required
          />
          <br />
          <select name='folderTitle'>
            <option value={null}>...</option>
            {this.context.folders.map((folder) => (
              <option value={folder.id} key={folder.id}>
                {folder.title}
              </option>
            ))}
          </select>
          <br />
          <input type='submit' />
        </form>
      </section>
    )
  }
}
AddNote.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
}
