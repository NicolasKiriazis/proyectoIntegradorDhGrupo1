// Kit invocador de express

const express = require('express')
const app = express()
const path = require('path')

//Archivos estaticos

app.use(express.static('public'))

// Levantar servidor

app.listen(3000, (req,res)=> {console.log("El servidor se levantó con éxito")})

// Hacer que abra la view del Index

app.get("/", function(req,res){
    let ruta = path.resolve(__dirname, './views/index.html')

    res.sendFile(ruta)
})