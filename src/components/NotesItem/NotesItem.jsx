import { useState } from "react";

export default function NotesItem({addNote}) {

    const [newNote, setNewNote] = useState('');


    function _handleSubmit(event) {
        addNote(newNote);
        setNewNote('');
    }

    return (
        <>
        <h1>NotesItem</h1>
        <form onSubmit={_handleSubmit}>
            <label>New Note</label>
            <input 
            type="text" 
            value={newNote}
            onChange={(event) => setNewNote(event.target.value)}
             />
            <button type="submit">Add Note</button>
        </form>
        </>
    )
}