//Constante
const express = require('express')
const routes = express.Router()

//Rutas
routes.get('/', (req, res) => {
  //tendra una conecci�n 
  req.getConnection((err, conn) => {
    //ejecutaremos la query 
    if (err) return res.send(err)
    conn.query('SELECT * FROM users', (err, rows) => {
      if (err) return res.send(err)
      res.json(rows)
    })
  })
})
routes.post('/', (req, res) => {
  //tendra una conecci�n 
  req.getConnection((err, conn) => {
    //ejecutaremos la query 
    if (err) return res.send(err)

    conn.query('INSERT INTO users set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      //res.json(rows)
      res.send('users inserted')
    })
  })
})
routes.delete('/:tipo', (req, res) => {
  //tendra una conecci�n 
  req.getConnection((err, conn) => {
    //ejecutaremos la query 
    if (err) return res.send(err)

    conn.query('DELETE FROM users WHERE tipo = ?', [req.params.tipo], (err, rows) => {
      if (err) return res.send(err)
      //res.json(rows)
      res.send('users deleted')
    })
  })
})

routes.put('/:nombre', (req, res) => {
  //tendra una conecci�n 
  req.getConnection((err, conn) => {
    //ejecutaremos la query 
    if (err) return res.send(err)

    conn.query('UPDATE users set ? WHERE nombre= ?', [req.body, req.params.nombre], (err, rows) => {
      if (err) return res.send(err)
      //res.json(rows)
      res.send('users updated')
    })
  })
})

//exportar module
module.exports = routes
