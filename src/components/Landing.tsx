import type { Page } from '../App'
import './Landing.css'

interface Stat {
  value: string
  label: string
}

interface LandingProps {
  setActivePage: (page: Page) => void
}

const STATS: Stat[] = [
  { value: '2.4M', label: 'Games Analysed' },
  { value: 'Depth 18', label: 'Engine Power' },
  { value: '340k', label: 'Openings' },
]

function ChessGrid() {
  return (
    <div className="chess-grid" aria-hidden="true">
      {Array.from({ length: 64 }, (_, i) => (
        <div
          key={i}
          className={`chess-cell ${Math.floor(i / 8 + i) % 2 === 0 ? 'dark-sq' : ''}`}
        />
      ))}
    </div>
  )
}

function Landing({ setActivePage }: LandingProps) {
  return (
    <div className="landing">
      <section className="hero">
        <ChessGrid />
        <div className="hero-content">
          <p className="hero-eyebrow">♟ Chess Analysis Platform</p>
          <h1 className="hero-title">
            Think deeper.<br />
            <em>Play better.</em>
          </h1>
          <p className="hero-desc">
            Explore every position, uncover hidden tactics, and master your
            openings with engine-powered analysis built for serious players.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => setActivePage('analyze')}
            >
              Start Analysing
            </button>
            <button className="btn-secondary">View Demo</button>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        {STATS.map((stat) => (
          <div key={stat.label} className="stat">
            <div className="stat-num">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Landing
