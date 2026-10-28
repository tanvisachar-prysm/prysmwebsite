import { Link } from 'react-router-dom'
import { cx } from '../utils/cx'
import { buttonClass } from '../utils/styles'

// Layout primitives and text styles shared by every page.

const SECTION_VARIANTS = {
  plain: '',
  band: 'bg-band',
  dark: 'dark-section',
  hero: 'hero-bloom',
}

export const Section = ({ variant = 'plain', className, children, ...props }) => (
  <section className={cx(SECTION_VARIANTS[variant], className)} {...props}>{children}</section>
)

export const Wrap = ({ className, children }) => <div className={cx('wrap', className)}>{children}</div>

// Two columns that stack at ≤ 880px. `reverse` puts the first child on the right.
export const Split = ({ top = false, reverse = false, className, children }) => (
  <div
    className={cx(
      'grid grid-cols-2 gap-[clamp(32px,6vw,88px)] *:min-w-0 max-lg:grid-cols-1',
      top ? 'items-start' : 'items-center',
      reverse && '[&>:first-child]:order-2 max-lg:[&>:first-child]:order-none',
      className,
    )}
  >
    {children}
  </div>
)

export const Stack = ({ loose = false, className, children }) => (
  <div className={cx('flex flex-col', loose ? 'gap-5.5' : 'gap-4.5', className)}>{children}</div>
)

export const Eyebrow = ({ children }) => (
  <span className="text-[.8rem] font-semibold tracking-[.09em] uppercase text-accent on-dark:text-[#dcd2ff]">{children}</span>
)

const LEDE_WIDTH = { default: 'max-w-[40rem]', measure: 'max-w-[46rem]' }

export const Lede = ({ width = 'default', strong = false, className, children }) => (
  <p
    className={cx(
      'text-[clamp(1.08rem,1.6vw,1.25rem)]',
      LEDE_WIDTH[width],
      strong ? 'text-fg font-semibold' : 'text-fg-2 font-[330] on-dark:font-normal',
      className,
    )}
  >
    {children}
  </p>
)

const PROSE_WIDTH = { default: 'max-w-[38rem]', measure: 'max-w-[46rem]', wide: 'max-w-[52rem] mx-auto' }

export const Prose = ({ width = 'default', children }) => (
  <div className={cx('flex flex-col gap-4.5 text-fg-2', PROSE_WIDTH[width])}>{children}</div>
)

export const Pull = ({ children }) => (
  <p className="text-[1.15rem] font-bold text-fg border-l-[3px] border-accent pl-4">{children}</p>
)

export const SectionHead = ({ eyebrow, title, lede, center = false }) => (
  <div
    className={cx(
      'flex flex-col gap-3.5 max-w-[46rem] mb-[clamp(32px,5vw,56px)]',
      center && 'text-center mx-auto items-center [&_h2]:after:mx-auto',
    )}
  >
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {lede && <Lede>{lede}</Lede>}
  </div>
)

// Eyebrow + heading + a column of paragraphs (children).
export const StoryBlock = ({ eyebrow, title, before, headingClass, children }) => (
  <Stack>
    {before}
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className={headingClass}>{title}</h2>
    <Prose>{children}</Prose>
  </Stack>
)

export const ButtonLink = ({ to, variant, size, children }) => (
  <Link className={buttonClass(variant, size)} to={to}>{children}</Link>
)

export const Buttons = ({ children }) => <div className="flex flex-wrap gap-3 items-center">{children}</div>

// Page-opening grid: copy on the left, visual on the right; stacks at ≤ 880px.
export const HeroGrid = ({ children }) => (
  <div className="wrap grid grid-cols-[1fr_1.05fr] items-center gap-[clamp(32px,5vw,72px)] *:min-w-0 max-lg:grid-cols-1">{children}</div>
)

export const TextLink = ({ to, children }) => (
  <Link className="inline-flex items-center gap-1.5 font-semibold no-underline hover:underline hover:underline-offset-4" to={to}>{children}</Link>
)
