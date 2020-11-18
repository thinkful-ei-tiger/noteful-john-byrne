import React from 'react'
import { Link } from 'react-router-dom'

export default function FolderList(props) {
  return (
    <div>
      <ul className='nav-list'>
        {props.folders.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
      </ul>
      <div className='add-folder'>
        <button>Add Folder</button>
      </div>
    </div>
  )
}
