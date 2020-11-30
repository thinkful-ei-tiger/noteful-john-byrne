import React from 'react'
import PropTypes from 'prop-types'
import ApiContext from './ApiContext'
import { findNote, folderFinder } from '../helpers/helper-functions'
import './InsideFolder.css'

export default class InsideFolder extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
    match: {
      params: {},
    },
  }
  static contextType = ApiContext

  render() {
    const { notes, folders } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || {}
    const folder = folderFinder(folders, note.folderId) || {}
    return (
      <div className='folder-name'>
        <h2>Folder Location: {folder.name}</h2>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  }
}
InsideFolder.propTypes = {
  match: PropTypes.shape({ params: PropTypes.object }),
  history: PropTypes.shape({ goBack: PropTypes.func }),
}
