import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from './ApiContext'
import './FolderList.css'

export default class FolderList extends React.Component {
  static contextType = ApiContext

  render() {
    const { folders = [] } = this.context
    return (
      <div className='folder-nav'>
        <ul className='nav-list'>
          <h2>Folders</h2>
          {folders.map((folder) => (
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>{folder.title}</Link>
            </li>
          ))}
        </ul>
        <div className='add-buttons'>
          <Link to='/add-folder'>
            <button>Add Folder</button>
            <br />
          </Link>
          <Link to='/add-note'>
            <button>Add Note</button>
          </Link>
        </div>
      </div>
    )
  }
}
