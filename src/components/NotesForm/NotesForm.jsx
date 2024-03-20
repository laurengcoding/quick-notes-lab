import { useState } from "react";

export default function NotesForm({addNote}) {

    const [newNote, setNewNote] = useState('');


    function _handleSubmit(event) {
        event.preventDefault();
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