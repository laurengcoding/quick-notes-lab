import { useState, useEffect } from "react";
import NotesList from "../../components/NotesList/NotesList";
import NotesForm from "../../components/NotesForm/NotesForm";
import * as notesAPI from '../../utilities/notes-api';

export default function NotesPage() {

    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        const newNote = await notesAPI.createNote(note);
        setNotes([...notes, newNote]);
    };
    
    async function deleteNote(noteId) {
        await notesAPI.deleteNote(noteId);
        const updatedNotesList = notes.filter((n) => n._id !== noteId);
        setNotes(updatedNotesList);
    };

    useEffect(() => {
        notesAPI.getNote().then((notes) => {
            setNotes(notes);
        });
    }, []);



    return (
        <>
            <h1>NotesPage</h1>
            <NotesForm addNote={addNote}  />
            <NotesList notes={notes} deleteNote={deleteNote} />
        </>
    )
}