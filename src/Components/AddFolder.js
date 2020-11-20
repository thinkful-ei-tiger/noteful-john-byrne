import React, { Component } from 'react'
import ApiContext from './ApiContext'
import config from './config'

export default class AddFolder extends Component {
  static defaultProps = {
    onAddFolder: () => {},
  }
  static contextType = ApiContext

  handleAddFolder = (event) => {
    event.preventDefault()
    const newFolder = { name: event.target.folderName.value }
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newFolder),
    })
      .then((res) => res.json())
      .then((result) => {
        this.context.onAddFolder(result)
        this.props.history.push('/')
      })
      .catch((error) => console.error('error', error))
  }

  render() {
    return (
      <section className='add-folder'>
        <form onSubmit={this.handleAddFolder}>
          <input
            type='text'
            name='folderName'
            className='folder-entry'
            placeholder='Folder Name'
            required
          />
          <input type='submit' />
        </form>
      </section>
    )
  }
}
