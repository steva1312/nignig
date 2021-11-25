const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>NAAAAJavaaaa GASCCINAAA</h1>')
})

app.get('/test/:id', (req, res) => {
    console.log(req.params.id)
    res.send(req.params.id)
})

const PORT = process.env.PORT || 3333
app.listen(PORT, console.log(`Цепа се јако на порту: ${PORT}`))