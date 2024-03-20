export default function NotesList({notes, deleteNote}) {

    if (notes.length === 0) {
        return <p>No notes yet!</p>
    }

    const notesList = notes.map((n) => (
        <div key={n._id}>
            <p>
                { new Date(n.createdAt).toLocaleString() }:
            </p>
            <p>
                { n.text }
            </p>
            <button onClick={() => deleteNote(n._id)}>Delete Note</button>
        </div>
    ));

    return (
        <div>
            <div>{notesList}</div>
        </div>
    )
}