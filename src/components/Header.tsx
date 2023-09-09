import React from 'react'

interface Props {
    note: string | number;
    setNote :  React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd : (event:React.FormEvent) => void
}

const Header = ({note, setNote, handleAdd}: Props)=> {

    return (
        <div>
           <form className="flex justify-center" onSubmit={handleAdd}>

               <div className="flex justify-between my-10 py-1 rounded-full bg-white shadow-lg w-full max-w-2xl hover:border-2 border-amber-500">
               <input value={note} onChange={(event) => setNote( event.target.value)} className="text-2xl p-3 w-full rounded-3xl focus:outline-none" type="text" placeholder="type your note..." />
               <button className="mr-1 font-bold px-5 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none" type="submit" >Go</button>
           </div>
           </form>
        </div>
    )

}

export default Header