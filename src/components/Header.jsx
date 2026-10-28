import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Brand } from './Brand'
import { Chevron } from './Icons'
import { MOBILE_NAV, PAGES, SOLUTIONS } from '../utils/navigation'
import { buttonClass } from '../utils/styles'
import { cx } from '../utils/cx'

const ACTIVE = 'text-accent font-semibold shadow-[inset_0_-2px_0_var(--accent)] rounded-none'
const desktopLink = 'px-3.5 py-2 rounded-md text-fg text-[.95rem] no-underline whitespace-nowrap hover:bg-bg-alt aria-[current=page]:text-accent aria-[current=page]:font-semibold aria-[current=page]:shadow-[inset_0_-2px_0_var(--accent)] aria-[current=page]:rounded-none'
const mobileLink = 'px-3 py-2.5 text-fg-2 text-[.92rem] no-underline whitespace-nowrap aria-[current=page]:text-accent aria-[current=page]:font-semibold aria-[current=page]:shadow-[inset_0_-2px_0_var(--accent)]'

const SolutionsMenu = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const btnRef = useRef(null)
  const { pathname } = useLocation()
  const current = SOLUTIONS.some((page) => page.to === pathname)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onClick = (e) => { if (!ref.current.contains(e.target)) setOpen(false) }
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btnRef.current.focus() } }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    // Hover opens the menu on pointer devices; the ::after strip bridges the gap down to it.
    <div className="group relative can-hover:nav:after:absolute can-hover:nav:after:inset-x-0 can-hover:nav:after:top-full can-hover:nav:after:h-2.5 can-hover:nav:after:content-['']" ref={ref}>
      <button
        type="button"
        ref={btnRef}
        className={cx(
          'inline-flex items-center gap-1.5 px-3.5 py-2 text-[.95rem] whitespace-nowrap cursor-pointer hover:bg-bg-alt',
          current ? ACTIVE : 'rounded-md text-fg',
        )}
        aria-expanded={open}
        aria-controls="ddMenu"
        onClick={() => setOpen((o) => !o)}
      >
        Solutions
        <Chevron className={cx('size-3.5 transition-transform duration-200 can-hover:nav:group-hover:rotate-180', open && 'rotate-180')} />
      </button>
      <div
        id="ddMenu"
        className={cx(
          'absolute left-0 top-[calc(100%+8px)] z-60 min-w-[280px] p-2 rounded-xl border border-panel-line bg-surface shadow-[0_18px_50px_rgba(20,10,60,.16)] can-hover:nav:group-hover:block',
          open ? 'block' : 'hidden',
        )}
      >
        {SOLUTIONS.map(({ to, label, blurb }) => (
          <NavLink
            key={to}
            to={to}
            onClick={close}
            className="group/item flex flex-col gap-0.5 px-3.5 py-3 rounded-lg text-fg no-underline hover:bg-bg-alt focus-visible:bg-bg-alt aria-[current=page]:bg-accent-soft"
          >
            <b className="text-[.95rem] group-aria-[current=page]/item:text-accent">{label}</b>
            <span className="text-[.84rem] text-fg-2">{blurb}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export const Header = () => (
  <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[12px] backdrop-saturate-[1.4]">
    <div className="wrap flex items-center gap-7 h-15 max-nav:justify-between">
      <Brand />
      <nav className="flex flex-1 gap-1 min-w-0 max-nav:hidden" aria-label="Primary">
        <NavLink to={PAGES.home.to} end className={desktopLink}>{PAGES.home.label}</NavLink>
        <SolutionsMenu />
        <NavLink to={PAGES.results.to} className={desktopLink}>{PAGES.results.label}</NavLink>
        <NavLink to={PAGES.security.to} className={desktopLink}>{PAGES.security.label}</NavLink>
      </nav>
      <Link className={buttonClass('primary', 'sm')} to={PAGES.demo.to}>{PAGES.demo.label}</Link>
    </div>
    <nav className="wrap hidden max-nav:flex gap-1 overflow-x-auto [scrollbar-width:none] border-t border-line" aria-label="Primary">
      {MOBILE_NAV.map(({ to, label, short }) => (
        <NavLink key={to} to={to} end={to === '/'} className={mobileLink}>{short || label}</NavLink>
      ))}
    </nav>
  </header>
)
