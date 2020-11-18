import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import FolderList from './Components/FolderList'
import NoteListNav from './Components/NoteListNav'
import Store from './Components/Store'
import Note from './Components/Note'
// import InsideFolder from './Components/InsideFolder'
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
          <>
            <Route
              exact
              key={path}
              path={path}
              render={(routeProps) => {
                const { folderId } = routeProps.match.params
                const notesForFolder = getNotesForFolder(notes, folderId)
                console.log(notesForFolder)
                return (
                  <div>
                    <FolderList
                      folders={folders}
                      notes={notes}
                      {...routeProps}
                    />
                    <NoteListNav {...routeProps} notes={notesForFolder} />
                  </div>
                )
              }}
            />
            <Route
              path='/note/:noteId'
              render={(routeProps) => {
                const { noteId } = routeProps.match.params
                const note = findNote(notes, noteId)
                return <Note {...routeProps} note={note} />
              }}
            />
          </>
        ))}
        <Route path='/add-folder' />
        <Route path='/add-note' />
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
      </>
    )
  }
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <h1>
            <Link to='/'>Noteful</Link>{' '}
          </h1>
        </header>
        <nav className='App__nav'>{this.renderNavRoutes()}</nav>
        <main className='App__main'>{this.renderMainRoutes()}</main>
      </div>
    )
  }
}

export default App
