import React from 'react'
import ApiContext from './ApiContext'
import { findNote, folderFinder } from '../helpers/helper-functions'

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
      <div>
        <h2>{folder.name}</h2>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  }
}
