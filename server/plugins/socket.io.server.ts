import { Server } from 'socket.io'
export default defineNitroPlugin((nitroApp) => {
  const socketServer = new Server(9000, {
    serveClient: false,
    cors: {
      origin: '*',
    },
  })

  const nameSpace = socketServer.of('/landing')

  nameSpace.on('connection', (socket) => {
    console.log(`${socket.id} has connected to chat namespace`)

    socket.on('disconnect', () => {
      console.log(`${socket.id} has disconnected`)
    })

    socket.on('setName', (name) => {
      socket.user.name = name
    })

    socket.on('send-message', (message, time) => {
      socket.broadcast.emit(
        'recieved-message',
        socket.user.name,
        message,
        time,
      )
    })
  })


})
