const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT


// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


// Contenido estatico

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Home page')
// })

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo')
// })

// sendFile -> para mandar pags html


app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/public/index.html')

    // Creo variables: nombre y titulo
    res.render('home', {
        nombre: 'Jaco',
        titulo: 'Curso node'
    })
})

app.get('/generic', (req, res) => {
    // res.sendFile(__dirname + '/public/generic.html')
    
    res.render('generic', {
        nombre: 'Jaco',
        titulo: 'Curso node'
    })
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + '/public/elements.html')

    res.render('elements', {
        nombre: 'Jaco',
        titulo: 'Curso node'
    })
})


app.get('*', (req, res) => {
    res.status(404)
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`La app se encuentra corriendo en el puerto: ${port}`)
})