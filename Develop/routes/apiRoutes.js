const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", (req, res) => {
    store.getNotes().then((notes) => {
        return res.status(200).json(notes)
    }).catch((error) => res.status(500).json(error))
})

router.post("/notes", (req, res) => {
    store.addNotes(req.body).then((note) => {
        return res.status(200).json(note)
    }).catch((error) => res.status(500).json(error))
})

router.delete("/note/:id", (req, res) => {
    store.removeNotes(req.params.id).then(() => {
    return res.status(200).json({ delete: true, id: req.params.id})
    }).catch((error) => res.status(500).json(error))
})

module.exports = router;