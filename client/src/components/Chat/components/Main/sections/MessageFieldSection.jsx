import { useState } from 'react'

function MessageFieldSection({socket}) {
	const [message, setMessage] = useState('')

	const handleSend = event => {
		event.preventDefault()
		if (message && localStorage.getItem('user')) {
			socket.emit('message', {
				username: localStorage.getItem('user'),
				text: message,
				id: socket.id
			})
			setMessage('')
		}
	}

	return (
		<form
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				margin: '.5rem',
				gap: '.5rem',
			}}
		>
			<input
				type='text'
				value={message}
				onChange={e => setMessage(e.target.value)}
				style={{ width: '100%' }}
			/>
			<button onClick={handleSend}>Отправить</button>
		</form>
	)
}

export default MessageFieldSection
