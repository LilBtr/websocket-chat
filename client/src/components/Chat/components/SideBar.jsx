import { useEffect, useState } from 'react'

function SideBar({ socket }) {
	const [onlineUsers, setOnlineUsers] = useState([])

	useEffect(() => {
		socket.on('onlineUser', users => {
			setOnlineUsers(users)
		})
	}, [])

	return (
		<div style={{ width: '25%', borderRight: '1px solid gray' }}>
			<h2>Люди в чате:</h2>
			<div>
				{onlineUsers.map(user => (
					<div key={user.username}>@{user.username}</div>
				))}
			</div>
		</div>
	)
}

export default SideBar
