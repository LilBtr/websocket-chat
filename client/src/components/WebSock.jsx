import { useEffect, useRef, useState } from 'react'

function WebSock() {
	const [value, setValue] = useState('')
	const socket = useRef()

	useEffect(() => {
		socket.current = new WebSocket('ws://localhost:8080')

		socket.current.onopen = function () {
			console.log('Соединение установлено')
		}

		socket.current.onmessage = function (event) {
			console.log(`Получено сообщение: ${event.data}`)
		}

		socket.current.onclose = function () {
			console.log('Соединение закрыто')
		}

		socket.current.onerror = function (error) {
			console.log(`Ошибка: ${error.message}`)
		}
	}, [])

	const sendMessage = () => {
		socket.current.send(value)
	}

	return (
		<div>
			{' '}
			<input
				type='text'
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button onClick={sendMessage}>Отправить</button>
		</div>
	)
}

export default WebSock
