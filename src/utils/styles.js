import { cx } from './cx'

// Class recipes shared by components that render different elements.

const BUTTON_BASE = 'inline-flex items-center gap-2 rounded-full border-[1.5px] font-semibold no-underline cursor-pointer transition-colors duration-150 disabled:opacity-60 disabled:cursor-progress'
const BUTTON_VARIANTS = {
  primary: 'bg-accent text-accent-fg border-transparent hover:bg-accent-hover',
  ghost: 'bg-transparent text-fg border-fg hover:bg-fg hover:text-bg',
}
const BUTTON_SIZES = {
  md: 'px-5 py-2.5 text-[.92rem]',
  sm: 'px-4 py-[7px] text-[.9rem]',
}

export const buttonClass = (variant = 'primary', size = 'md') => cx(BUTTON_BASE, BUTTON_VARIANTS[variant], BUTTON_SIZES[size])

// Framed product screenshot.
export const shotClass = cx(
  'm-0 max-w-full overflow-hidden rounded-xl border border-line bg-white',
  'shadow-[0_2px_4px_rgba(20,16,40,.06),0_24px_60px_rgba(40,24,90,.14)]',
  'on-dark:border-white/14 on-dark:shadow-[0_0_0_1px_rgba(255,255,255,.03),0_30px_90px_rgba(86,52,210,.38)]',
)
