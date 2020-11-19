import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from './ApiContext'

export default class NoteCard extends React.Component {
  render() {
    const { id, name, modified } = this.props
    return (
      <div className='note-card'>
        <h2>
          <Link to={`/note/${id}`}>{name}</Link>
        </h2>
        <span>Date modified: {modified}</span>
      </div>
    )
  }
}
