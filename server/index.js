const express = require('express')

const app = express()

const PORT = 3000

const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
	cors: {
		origin: 'http://localhost:5173'
	}
})

app.get('api', (req, res) => {
	res.json({
		message: 'Hello'
	})
})

const messageLog = []
let onlineUsers = []

socketIO.on('connection', socket => {
	console.log(`${socket.id} user connected`)

	socket.on('disconnect', () => {
		console.log(`${socket.id} disconnected`)
	})

	socket.on('login', () => {
		socket.emit('messages', messageLog)
	})
	socket.on('login', username => {
		onlineUsers.push(username)
		socketIO.emit('onlineUser', onlineUsers)
	})
	socket.on('logout', username => {
		onlineUsers = onlineUsers.filter(elem => elem.username !== username)
		socketIO.emit('onlineUser', onlineUsers)
	})

	socket.on('message', mess => {
		messageLog.push(mess)
		socketIO.emit('response', mess)
	})
})

http.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`)
})