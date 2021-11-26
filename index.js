const express = require('express')

const app = express()

app.use(express.json())

const todos = [
    {
        task: "Uradi domaci",
        isDone: false,
        id: 0
    },
    {
        task: "Idi na plivanje",
        isDone: false,
        id: 1
    },
    {
        task: "Reci dabome",
        isDone: true,
        id: 2
    },
]

app.get('/api/todos', (req, res) => {
    res.send(todos)
})

app.get('/api/todos/:id', (req, res) => {
    res.send(todos[req.params.id])
})

app.post('/api/todos', (req, res) => {
    todos.push({...req.body})
    res.send(todos)
})

app.put('/api/todos/:id', (req, res) => {
    todos[req.params.id].isDone = !todos[req.params.id].isDone
    res.send(todos[req.params.id])
})

app.delete('/api/todos', (req, res) => {
    todos.map((todo, i) => {
        if(todo.isDone) {
            todos.splice(i, 1)
        }
    })
    res.send(todos)
})

const PORT = process.env.PORT || 3333
app.listen(PORT, console.log(`Цепа се јако на порту: ${PORT}`))