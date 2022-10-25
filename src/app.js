// Kit invocador de express

const express = require('express')
const app = express()
const path = require('path')

// Configurar el entorno de la aplicación para que sea capaz de capturar la información
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Requerir las rutas

const mainRouter = require('./router/mainRouter')
const productsRouter = require('./router/productsRouter')

//Archivos estaticos

app.use(express.static('public'))

// Avisar a express que usas ejs 

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

// Levantar servidor

app.listen(3000, (req, res) => { console.log("El servidor se levantó con éxito en el puerto 3000") })


// MAIN ROUTER //

app.use('/', mainRouter)
app.use('/products', productsRouter);

