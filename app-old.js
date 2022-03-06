const http = require('http')


// req -> son todas las solicitudes q se le hacen a mi server
// res -> son las respuestas q da mi server al cliente

// writeHead -> para mandar status

// Content-Type ->  indico que devuelvo 

// Content-Dispotition -> me permite darle un formato y nombre al archivo a descargar ej: .csv

const server = http.createServer((req, res) => {

    
    
    // res.writeHead(200, {'Content-Type': 'application/json'}) 
    // const persona = {id: 1, nombre: 'jaco'}
    // res.write(JSON.stringify(persona))

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'application/csv'}) 

    // res.write('id, nombre\n')
    // res.write('1, Jaco\n')
    // res.write('2, Lennon\n')
    // res.write('3, Timmi\n')


    res.write('Hola mundo')

    
    res.end()
})

server.listen(8080)

console.log('Escuchando el puerto', 8080)