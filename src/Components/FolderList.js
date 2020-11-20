import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from './ApiContext'

export default class FolderList extends React.Component {
  static contextType = ApiContext

  render() {
    const { folders = [] } = this.context
    return (
      <div>
        <ul className='nav-list'>
          {folders.map((folder) => (
            <li key={folder.id}>
              <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
            </li>
          ))}
        </ul>
        <div className='add-folder'>
          <Link to='/add-folder'>
            <button>Add Folder</button>
          </Link>
        </div>
      </div>
    )
  }
}
