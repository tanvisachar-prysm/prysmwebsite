import { Link } from 'react-router-dom'
import { Brand } from './Brand'
import { FOOTER_NAV } from '../utils/navigation'

export const Footer = () => (
  <footer className="py-10 border-t border-line bg-bg-alt text-[.9rem]">
    <div className="wrap flex flex-wrap items-center justify-between gap-5">
      <Brand small />
      <nav className="flex flex-wrap gap-5.5" aria-label="Footer">
        {FOOTER_NAV.map(({ to, label }) => (
          <Link key={to} to={to} className="text-fg-2 no-underline hover:text-fg hover:underline">{label}</Link>
        ))}
      </nav>
    </div>
  </footer>
)
