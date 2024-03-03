const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function connection(ws) {
	console.log('Соединение установлено')

	ws.on('message', function incoming(message) {
		console.log(`Получено сообщение: ${message}`)
	})

	ws.on('close', function close() {
		console.log('Соединение закрыто')
	})
})
