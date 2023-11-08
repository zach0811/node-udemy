const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
const duplicateNote = notes.find((note)=>note.title === title)

debugger

if(!duplicateNote){
notes.push({
        title: title,
        body:body
    })
    saveNotes(notes)
} else {
    console.log('Note title taken')
}   
}

const removeNote = (title) => {
    const notes = loadNotes();
    console.log('notes', notes);
    
    const filteredNotes = notes.filter(note => note.title !== title);
    console.log('filterednotes', filteredNotes)

    if (filteredNotes.length < notes.length) {
        // A note with the given title was removed
        console.log(chalk.green.inverse('Note deleted'));
        saveNotes(filteredNotes); // Save the updated notes array
    } else {
        console.log(chalk.red.inverse('Note not found'));
    }
};

const saveNotes = (notes) =>{
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{const dataBuffer =fs.readFileSync('notes.json')
const dataJSON = dataBuffer.toString()
return JSON.parse(dataJSON)}
catch(e) {
    return []
}
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'))
    notes.forEach(note => console.log(note.title))
}

const readNotes = (title) => {
    const notes = loadNotes();
    const matchedNote = notes.find((note)=>note.title === title)
if (matchedNote) {
    console.log(chalk.inverse(matchedNote.title))
    console.log(matchedNote.body)
} else {
    console.log(chalk.red.inverse('Note Note Found'))
}
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}