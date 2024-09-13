import { useState } from "react"
import Note from "./components/Note"
const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note..')
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleNoteChange = (event)=> {
    
    setNewNote(event.target.value)
    console.log(event.target.value)
  }
  return(
    <div>
      <h1>
        NOTES
      </h1>
      <ul>
      {notes.map(x=> <Note key={x.id} note={x}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange={handleNoteChange} />
        <button >Save</button>
      </form>
      
    </div>
  )
}
export default App