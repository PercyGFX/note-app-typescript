import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Note} from "./services/model"
import NoteList from "./components/NoteList"


const App: React.FC = ()=> {
  // declare states
  const [note , setNote] = React.useState<string | number>("")
  const [notes, setNotes] = React.useState<Array<Note>>([]);

  //handle add
  const handleAdd = (event: React.FormEvent)=> {
  event.preventDefault();

  if (note)
    {
      // Update the state by creating a new array with the new note
      setNotes([...notes, { id: Math.floor(Math.random() * 100) +1, note:note, isDone: false }]);
      setNote("")
    }

  }


  console.log(notes)

  console.log(note)


  return (

<div className="text-center p-4" >

    <p className="font-Neucha text-4xl text-white"> NOTES APP</p>
  <Header note={note} setNote={setNote} handleAdd={handleAdd} />
  <NoteList notes={notes} setNotes={setNotes} />
</div>

  );
}

export default App;
