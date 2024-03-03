import { useEffect, useRef } from 'react'

function MainSection({ messages }) {
	const section = useRef()

	useEffect(() => {
		if (localStorage.getItem('chatScroll')) {
			section.current.scrollTo(0, localStorage.getItem('chatScroll'))
		} else {
			section.current.scrollTo(0, section.current.scrollHeight)
			localStorage.setItem('chatScroll', section.current.scrollTop)
		}
	}, [messages])

	return (
		<section
			onScroll={e => localStorage.setItem('chatScroll', e.target.scrollTop)}
			ref={section}
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				margin: '.5rem',
				border: '1px solid gray',
				borderRadius: '.2rem',
				overflowY: 'auto',
				overflowWrap: 'break-word',
			}}
		>
			{messages.map((mess, index) =>
				mess.username === localStorage.getItem('user') ? (
					<div
						style={{
							maxWidth: '200px',
							margin: '.4rem',
							border: '1px solid white',
							borderRadius: '.5rem',
							padding: '.3rem',
							alignSelf: 'end',
						}}
						key={`${mess.id}-${Math.random() * Math.random()}`}
					>
						{mess.text}
					</div>
				) : (
					<div
						style={{
							maxWidth: '200px',
							margin: '.4rem',
							border: '1px solid white',
							borderRadius: '.5rem',
							padding: '.3rem',
							whiteSpace: 'balance',
							transition: 'all 2s ease',
						}}
						key={`${mess.id}-${Math.random() * Math.random()}`}
					>
						<h4>@{mess.username}</h4> {mess.text}
					</div>
				)
			)}
		</section>
	)
}

export default MainSection
