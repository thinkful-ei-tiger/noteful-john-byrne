export const findNote = (notes = [], noteId) => {
  return notes.find((note) => note.id === noteId)
}

export const folderFinder = (folders = [], folderId) => {
  return folders.find((folder) => folder.id === folderId)
}

export const getNotesForFolder = (notes = [], folderId) =>
  !folderId ? notes : notes.filter((note) => note.folderId === folderId)
