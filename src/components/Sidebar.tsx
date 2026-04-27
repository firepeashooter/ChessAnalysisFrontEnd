import type { Page } from '../App'
import './Sidebar.css'

interface NavItem {
	icon: string
	label: string
	id: Page
}

interface SidebarProps {
	activePage: Page
	setActivePage: (page: Page) => void
}

const NAV_ITEMS: NavItem[] = [
	{ icon: '♟', label: 'Dashboard', id: 'home' },
	{ icon: '◈', label: 'Analyze Game', id: 'analyze' },
	{ icon: '◉', label: 'Openings', id: 'openings' },
	{ icon: '▲', label: 'Tactics', id: 'tactics' },
	{ icon: '⟳', label: 'Game History', id: 'history' },
]

function Sidebar({ activePage, setActivePage }: SidebarProps) {
	return (
		<aside className="sidebar">
			<div className="sidebar-logo">
				<div className="logo-symbol">♛</div>
				<div className="logo-text">ChessScope</div>
				<div className="logo-sub"></div>
			</div>

			<nav className="sidebar-nav">
				{NAV_ITEMS.map((item) => (
					<button
						key={item.id}
						className={`nav-item ${activePage === item.id ? 'active' : ''}`}
						onClick={() => setActivePage(item.id)}
					>
						<span className="nav-icon">{item.icon}</span>
						{item.label}
					</button>
				))}
			</nav>

			<div className="sidebar-bottom">
				<button className="sign-in-btn">Sign In →</button>
			</div>
		</aside>
	)
}

export default Sidebar
