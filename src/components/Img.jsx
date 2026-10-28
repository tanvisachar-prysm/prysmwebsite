import { useState } from 'react'
import { cx } from '../utils/cx'

// Lazy-loads by default; pass `priority` for above-the-fold images.
// Renders an empty labelled slot when the file is missing from /public.
export const Img = ({ src, alt = '', priority = false, ...props }) => {
  const [failedSrc, setFailedSrc] = useState(null)
  if (failedSrc === src) {
    return (
      <span
        className="grid place-items-center w-full h-full min-h-[180px] p-4 bg-[repeating-linear-gradient(135deg,#f3f1f6_0_12px,#ebe8f0_12px_24px)] text-[#7a7684] text-[.8rem] text-center font-mono"
        role="img"
        aria-label={alt}
      >
        {src}
      </span>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      onError={() => setFailedSrc(src)}
      {...props}
    />
  )
}

// Rounded photo box that crops its image to `ratio` (CSS aspect-ratio) around `focus` (object-position).
export const Photo = ({ src, alt, ratio, focus, wide = false, className, priority }) => (
  <div
    className={cx('overflow-hidden rounded-xl bg-bg-alt', wide ? 'aspect-[16/10]' : 'aspect-[4/3]', className)}
    style={ratio ? { aspectRatio: ratio } : undefined}
  >
    <Img src={src} alt={alt} priority={priority} className="w-full h-full object-cover" style={focus ? { objectPosition: focus } : undefined} />
  </div>
)
