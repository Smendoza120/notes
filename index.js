const { response } = require('express');
const express = require('express');
const app = express()

app.use(express.json());

const notes = [{
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
},
{
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
},
{
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
}
]

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.get('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    const note = notes.find(files => files.id === Number(id))

    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})

//*Delete
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params
    const resultNote = notes.filter(item => item.id !== Number(id)) 
    console.log(resultNote);

    res.status(204).end();
})

//*POST
app.post('/api/notes/', (req, res) => {
    const newNote = req.body;
    
    const resultNotes = notes.concat(newNote)
    console.log(resultNotes)
    res.status(201).json(newNote)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Servidor en el puerto: ${PORT}`)
})

