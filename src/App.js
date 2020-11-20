import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import FolderList from './Components/FolderList'
import NoteNav from './Components/NoteNav'
import NoteList from './Components/NoteList'
import Note from './Components/Note'
import InsideFolder from './Components/InsideFolder'
import ApiContext from './Components/ApiContext'
import config from './Components/config'
import AddNote from './Components/AddNote'
import AddFolder from './Components/AddFolder'

class App extends React.Component {
  state = {
    notes: [],
    folders: [],
  }
  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok)
          return notesRes.json().then((event) => Promise.reject(event))
        if (!foldersRes.ok)
          return foldersRes.json().then((event) => Promise.reject(event))
        return Promise.all([notesRes.json(), foldersRes.json()])
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders })
      })
      .catch((error) => {
        console.error({ error })
      })
  }
  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    })
  }
  onAddFolder = (newFolder) => {
    this.setState({
      folders: [...this.state.folders, newFolder],
    })
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map((path) => (
          <Route exact key={path} path={path} component={FolderList} />
        ))}
        <Route path='/note/:noteId' component={InsideFolder} />
        <Route path='/add-folder' component={AddFolder} />
        <Route path='/add-note' component={AddNote} />
      </>
    )
  }
  renderMainRoutes() {
    return (
      <>
        <Route exact path={'/'} component={NoteList} />
        <Route exact path={'/folder/:folderId'} component={NoteNav} />
        <Route path='/note/:noteId' component={Note} />
      </>
    )
  }
  render() {
    console.log('Test')
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      onAddFolder: this.onAddFolder,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <header className='App__header'>
            <h1>
              <Link to='/'>Noteful</Link>{' '}
            </h1>
          </header>
          <nav className='App__nav'>{this.renderNavRoutes()}</nav>
          <main className='App__main'>{this.renderMainRoutes()}</main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App
