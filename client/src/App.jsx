import {Route, Routes} from 'react-router-dom'
import socketIO from 'socket.io-client'
import Home from './components/Home/Home.jsx'
import Chat from './components/Chat/Chat.jsx'
const socket = socketIO.connect('http://localhost:3000')

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home socket={socket}/>} />
			<Route path='/chat' element={<Chat socket={socket}/>} />
		</Routes>
	)
}

export default App
