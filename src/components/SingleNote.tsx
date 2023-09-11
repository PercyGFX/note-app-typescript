import React from "react"
import {Note} from "../services/model"
import { AiTwotoneDelete, AiFillEdit } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

interface Props {
    note: Note,
    key: number,
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const SingleNote = ({note,key, notes, setNotes}: Props)=> {

    const handleDone = (id: number) => {
        setNotes(notes.map(note => {
            return note.id === id ? { ...note, isDone: !note.isDone } : note
        }));
    }

    const handleDelete = (id:number) => {

        setNotes(notes.filter(note=>{
            return note.id !== id
        }))

    }

    return (

        <div className="flex justify-center">

            <div className="bg-amber-100 shadow-2xl m-3 rounded p-5 w-[1000px]">
                <div>
                    {note.isDone ? <p className="line-through">{note.note}</p> : <p>{note.note}</p>}
                </div>

                <div className="flex text-2xl items-start mt-2">
                    <AiTwotoneDelete onClick={function(){handleDelete(note.id)}} className="mx-2 cursor-pointer" />

                    <TiTick onClick={()=>handleDone(note.id)} className="mx-2 cursor-pointer" />
                </div>

            </div>

        </div>
    )


}


export default SingleNote