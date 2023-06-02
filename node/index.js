const express = require('express')
const mysql = require('mysql')

const app = express()
const PORT = 3000

const config = {
  host: 'mysql-db',
  user: 'root',
  password: 'admin',
  database: 'nodedb'
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('George Armando')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('<h2>Hello World - By a Docker Container</h2>')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})