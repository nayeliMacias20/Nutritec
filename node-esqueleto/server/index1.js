//Constante
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
//Inicializaciones
const app = express()
const routes = require('./routes')

app.set('port', process.env.PORT || 8090)
const dbOptions = {
  //Host
  host: 'localhost',
  port: '3306',
  user: 'root',
  database: 'Nutritec'

}
//Middelwares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//Rutas
app.get('/', (req, res) => {
  res.send('Welcome to my API Nayeli')
})
app.use('/api', routes)

//Correr servidor
app.listen(app.get('port'), () => {
  console.log("Server runing on port", app.get('port'))
})