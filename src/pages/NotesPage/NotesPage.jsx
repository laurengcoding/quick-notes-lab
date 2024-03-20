import { useState } from "react";
import Notes from "../../components/Notes/Notes";
import NotesItem from "../../components/NotesItem/NotesItem";

export default function NotesPage() {

    const [notes, setNotes] = useState('');

    function addNote() {
        setNotes([...notes]);
    }

    return (
        <>
            <h1>NotesPage</h1>
            <Notes notes={notes} />
            <NotesItem addNote={addNote}  />
        </>
    )
}