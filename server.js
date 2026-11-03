const apiServer = require('./api')
const http = require('http')
const PORT = 3000
const server = http.createServer(apiServer)
const {Server} = require('socket.io')
const sockets = require('./sockets')

server.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})

const socketServer = new Server(server)

sockets.listen(socketServer)