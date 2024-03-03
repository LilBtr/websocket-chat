import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home({socket}) {
	const navigate = useNavigate()
	const [user, setUser] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		if (user) {
			localStorage.setItem('user', user)
			socket.emit('login', {username: localStorage.getItem('user')})
			navigate('/chat')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Вход в чат</h2>
			<label htmlFor="user">Имя</label>
			<input type="text" id="user" value={user} onChange={e => setUser(e.target.value)}/>
			<button type='submit'>Войти</button>
		</form>
	)
}

export default Home