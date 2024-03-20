const Note = require('../../models/note');

module.exports = {
    index,
    create,
    delete: deleteNote
}

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id
        });
        res.json(note);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteNote(req, res) {
    try {
        await Note.deleteOne({
            _id: req.params.id,
            user: req.user._id
        });
        res.json(true);
    } catch (err) {
        res.status(400).json(err);
    }
}