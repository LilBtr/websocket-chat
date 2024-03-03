import {useNavigate} from 'react-router-dom'

function NavBar({socket}) {
	const navigate = useNavigate()

	const handleLeave = () => {
		socket.emit('logout', localStorage.getItem('user'))
		localStorage.removeItem('user')
		navigate('/')
	}

	return (
		<nav style={{ display: 'flex', justifyContent: 'end', margin: '.5rem' }}>
			<button onClick={handleLeave}>Покинуть чат</button>
		</nav>
	)
}

export default NavBar
