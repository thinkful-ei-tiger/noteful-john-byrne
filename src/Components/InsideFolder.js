import React from 'react'
import FolderList from './FolderList'
import { useHistory, useParams } from 'react-router-dom'

export default function InsideFolder(props) {
  const history = useHistory()
  const params = useParams()
  const note = props.notes.find((note) => params.noteId === note.id)
  const currentFolder = props.folders.find(
    (folder) => note.folderId === folder.id
  )
  console.log(currentFolder)
  return (
    <div>
      <h2>{currentFolder.name}</h2>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  )
}
