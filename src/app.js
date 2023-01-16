// Kit invocador de express
const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan');
const cookies = require('cookie-parser');
const userLoggedMIddleware = require("./middlewares/userLoggedMiddleware")

// Implementando Session
const session = require('express-session');

// Configurar el entorno de la aplicación para que sea capaz de capturar la información
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Requerir las rutas

const mainRouter = require('./router/mainRouter')
const productsRouter = require('./router/productsRouter')
const usersRouter = require('./router/usersRouter')

// Requiere method override para PUT y DELET

const methodOverride = require('method-override');

// Logger
app.use(logger('dev'));
app.use(express.json());

// Parar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use(methodOverride('_method'));

//Archivos estaticos

app.use(express.static('public'))

// Avisar a express que usas ejs 

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

// Config Sessions

app.use(session({
  secret: 'sticker wizzard',
  resave: false,
  saveUninitialized: true,
}));

// Cookies

app.use(cookies());

// Middleware de logueado a nivel global

app.use(userLoggedMIddleware);

// Levantar servidor

app.listen(3000, (req, res) => { console.log("El servidor se levantó con éxito en el puerto 3000") })


// MAIN ROUTER //

app.use('/', mainRouter)
app.use('/products', productsRouter);
app.use('/users', usersRouter)


