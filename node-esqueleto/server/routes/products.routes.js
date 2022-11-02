//Constante
const express = require('express')
const routes = express.Router()

//Rutas
//Obtener todas las dietas que estan en la base de datos
routes.get('/', (req, res) => {
  //tendra una conecci�n 
  req.getConnection((err, conn) => {
    //ejecutaremos la query 
    if (err) return res.send(err)
    conn.query('SELECT * FROM diets', (err, rows) => {
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

    conn.query('INSERT INTO diets set ?', [req.body], (err, rows) => {
      if (err) return res.send(err)
      //res.json(rows)
      res.send('dieta inserted')
    })
  })
})
routes.delete('/:id', (req, res) => {
  //tendra una conecci�n 
  req.getConnection((err, conn) => {
    //ejecutaremos la query 
    if (err) return res.send(err)

    conn.query('DELETE FROM diets WHERE id = ?', [req.params.id], (err, rows) => {
      if (err) return res.send(err)
      //res.json(rows)
      res.send('dieta eliminate')
    })
  })
})
