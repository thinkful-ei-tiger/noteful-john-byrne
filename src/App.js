import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Components/Header'
import FolderList from './Components/FolderList'
import NoteListNav from './Components/NoteListNav'
import Store from './Components/Store'
import { findNote, folderFinder, getNotesForFolder } from './helpers'

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  }
  componentDidMount() {
    this.setState(Store)
  }

  renderNavRoutes() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => (
              <FolderList folders={folders} notes={notes} {...routeProps} />
            )}
          />
        ))}
        <Route
          path='/note/:noteId'
          render={(routeProps) => {
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId) || {}
            console.log(note)
            const folder = folderFinder(folders, note.folderId)
            return <FolderList {...routeProps} folder={folder} />
          }}
        />
        <Route path='/add-folder' component={FolderList} />
        <Route path='/add-note' component={FolderList} />
      </>
    )
  }
  renderMainRoutes() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map((path) => {
          ;<Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              const { folderId } = routeProps.match.params
              const notesForFolder = getNotesForFolder(notes, folderId)
              return <NoteListNav {...routeProps} notes={notesForFolder} />
            }}
          />
        })}
        <Route
          path='/note/:noteId'
          render={(routeProps) => {
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId)
            return <NoteListNav {...routeProps} note={note} />
          }}
        />
      </>
    )
  }
  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>{this.renderNavRoutes()}</nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Noteful</Link>{' '}
          </h1>
        </header>
        <main className='App__main'>{this.renderMainRoutes()}</main>
      </div>
    )
  }
}

export default App
