const express = require('express')
const path = require('path')
// const PORT = 3001

const api = express()

api.use(express.static('public'))
api.get('/')
// api.listen(PORT)

module.exports = api