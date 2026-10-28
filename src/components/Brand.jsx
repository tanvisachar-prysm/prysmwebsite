import { Link } from 'react-router-dom'
import { cx } from '../utils/cx'

// Monochrome PRYSM logo (mask over currentColor so it follows the text colour).
export const Brand = ({ small = false }) => (
  <Link className="flex items-center gap-2.5 text-fg no-underline" to="/" aria-label="PRYSM, Home">
    <span
      className={cx(
        'block aspect-[464/129] bg-current mask-[url(/img/prysm-logo-mono.png)] mask-center mask-contain mask-no-repeat',
        small ? 'h-[26px]' : 'h-[30px]',
      )}
      role="img"
      aria-label="PRYSM"
    />
  </Link>
)
