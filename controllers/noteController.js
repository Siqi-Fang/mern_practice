const createNote = async (req,res) =>{
    res.send('create NOte')
}

const deleteNote = async (req,res) =>{
    res.send('delete note')
}

const getAllNotes = async (req,res) =>{
    res.send('get all Notes')
}

const updateNote = async (req,res) =>{
    res.send('update notes')
}

const showStats = async (req,res) =>{
    res.send('showing stats')
}



export { createNote, deleteNote, getAllNotes, updateNote, showStats };