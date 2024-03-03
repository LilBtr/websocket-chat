import Main from './components/Main/Main'
import SideBar from './components/SideBar'

function Chat({socket}) {

	return (
		<div style={{display: 'flex', width: '100vw',height: '100vh', justifyContent: 'space-between'}}>
			<SideBar socket={socket} />
			<Main socket={socket}/>
		</div>
	)
}

export default Chat
