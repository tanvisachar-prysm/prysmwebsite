import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Momentum scrolling via Lenis, skipped for users who prefer reduced motion.
// The instance is exposed on window.lenis so other components can pause or jump it.
export const useSmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      lerp: 0.08, // 0.08 gives that premium, buttery-smooth momentum feeling
      smoothWheel: true,
      wheelMultiplier: 1.1, // Slightly faster wheel response
      touchMultiplier: 2,
    })
    window.lenis = lenis

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      delete window.lenis
    }
  }, [])
}
