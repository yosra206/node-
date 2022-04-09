// const { json } = require('express/lib/response');
const fs = require('fs')
const add = (ID, fName, degrees, Comment) => {
    const notes = loadNotes()
    let sum = 0;
    degrees.forEach(degrees => {
        sum += degrees;
    })
    notes.push({
        ID,
        fName,
        degrees,
        Comment,
        sum
    })
    saveNotes(notes)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes,json').toString()
        return JSON.parse(dataBuffer)
    } catch (k) {
        return []
    }
}

const saveNotes = (notes) => {

    const saveNote = JSON.stringify(notes)
    fs.writeFileSync('notes.json', saveNote)
}


module.exports = {
    add
}