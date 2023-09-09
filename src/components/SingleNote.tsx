import React from "react"
import {Note} from "../services/model"

interface Props {
    note: Note,
    key: number,
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const SingleNote = ({note,key, notes, setNotes}: Props)=> {

    return (

        <div>
            <p> {note.note}</p>
        </div>
    )


}


export default SingleNote