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

    return (

        <div className="flex justify-center">

            <div className="bg-amber-100 shadow-2xl m-3 rounded p-5 w-[1000px]">
                <div>
                    {note.note}
                </div>

                <div className="flex text-2xl items-start mt-2">
                    <AiTwotoneDelete className="mx-2" />
                    <AiFillEdit className="mx-2" />
                    <TiTick className="mx-2" />
                </div>

            </div>

        </div>
    )


}


export default SingleNote