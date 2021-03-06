import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './NoteCard.css'

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

NoteCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  modified: PropTypes.string,
}
