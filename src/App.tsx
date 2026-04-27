import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import './App.css'

export type Page = 'home' | 'analyze' | 'openings' | 'tactics' | 'history'

function App() {
	const [activePage, setActivePage] = useState<Page>('home')

	return (
		<div className="app">
			<Sidebar activePage={activePage} setActivePage={setActivePage} />
			<main className="main-content">
				<Landing setActivePage={setActivePage} />
			</main>
		</div>
	)
}

export default App
