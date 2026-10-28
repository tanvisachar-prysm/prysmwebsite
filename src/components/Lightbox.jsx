import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Img } from './Img'
import { cx } from '../utils/cx'

const LightboxContext = createContext(() => {})

export const LightboxProvider = ({ children }) => {
  const [image, setImage] = useState(null)
  const closeRef = useRef(null)
  const close = useCallback(() => setImage(null), [])

  useEffect(() => {
    if (!image) return
    // Freeze the page behind the overlay and give focus back to the opener on close.
    const opener = document.activeElement
    const root = document.documentElement
    root.style.overflow = 'hidden'
    window.lenis?.stop()
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      root.style.overflow = ''
      window.lenis?.start()
      opener?.focus?.({ preventScroll: true })
    }
  }, [image, close])

  return (
    <LightboxContext.Provider value={setImage}>
      {children}
      {image && (
        <div
          className="fixed inset-0 z-200 grid place-items-center p-6 bg-[rgba(13,12,20,.82)] cursor-zoom-out max-md:overflow-auto max-md:place-items-[center_start] max-md:px-4 max-md:pt-[72px] max-md:pb-6"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            ref={closeRef}
            className="absolute top-4 right-4 grid place-items-center size-11 p-0 rounded-full bg-white text-[#1b1a1f] cursor-pointer max-md:fixed"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="w-auto h-auto max-w-[min(1400px,100%)] max-h-[calc(100vh-48px)] rounded-xl bg-white shadow-[0_30px_90px_rgba(0,0,0,.5)] max-md:max-w-none max-md:max-h-none max-md:w-[900px]"
          />
        </div>
      )}
    </LightboxContext.Provider>
  )
}

// A figure that opens its image (or `full`, if given) in the lightbox.
export const Zoom = ({ src, full, alt, className, imgClassName }) => {
  const open = useContext(LightboxContext)
  const show = () => open({ src: full || src, alt })
  return (
    <figure
      className={cx('zoomable', className)}
      tabIndex={0}
      role="button"
      aria-label={`Enlarge: ${alt}`}
      onClick={show}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show() } }}
    >
      <Img src={src} alt={alt} className={imgClassName} />
    </figure>
  )
}
