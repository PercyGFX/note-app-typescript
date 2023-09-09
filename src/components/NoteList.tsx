import React from 'react'
import {Note} from "../services/model"
import SingleNote from "./SingleNote"

interface Props {
    notes: Note[]
    setNotes:  React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList = ({notes, setNotes}: Props)=> {


    return (
        <div>

            {notes.map((note)=>(
                <SingleNote
                    note={note}
                    key={note.id}
                    notes={notes}
                    setNotes={setNotes}
                />
            ))}

        </div>
    )

}

export default NoteList