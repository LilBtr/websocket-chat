import { useEffect, useState } from 'react'
import MainSection from './sections/MainSection'
import MessageFieldSection from './sections/MessageFieldSection'
import NavBar from './sections/NavBar'

function Main({socket}) {
	const [messages, setMessages] = useState([])

	useEffect(() => {
		socket.on('messages', data => {
			setMessages(data)
		})
		socket.on('response', data => {
			setMessages([...messages, data])
		})
	}, [socket ,messages])

	return (
		<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '75%'}}>
			<NavBar socket={socket} />
			<MainSection messages={messages} />
			<MessageFieldSection socket={socket} />
		</div>
	)
}

export default Main