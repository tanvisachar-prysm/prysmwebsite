import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PAGES } from '../utils/navigation'
import { cx } from '../utils/cx'

const HIDDEN_ON = [PAGES.demo.to, '/thank-you']

export const FloatingDemoButton = () => {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(() => window.scrollY > 520)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 520)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const show = scrolled && !HIDDEN_ON.includes(pathname)
  return (
    <Link
      className={cx(
        'fixed right-5 bottom-[calc(20px+env(safe-area-inset-bottom,0px))] z-45 px-5.5 py-3 rounded-full bg-white text-[#1b1a1f] text-[.92rem] font-bold no-underline',
        'shadow-[0_10px_30px_rgba(20,10,60,.25),0_0_0_1px_rgba(20,16,40,.08)] transition-[opacity,translate] duration-250',
        "before:content-[''] before:inline-block before:size-2 before:mr-2.5 before:align-middle before:rounded-full before:bg-[#6b42e6]",
        'focus-visible:outline-[#6b42e6]',
        show ? 'opacity-100' : 'opacity-0 translate-y-3 pointer-events-none',
      )}
      to={PAGES.demo.to}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      {PAGES.demo.label}
    </Link>
  )
}
