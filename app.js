const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(bcrypt.hashSync(req.query.password, 10)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))