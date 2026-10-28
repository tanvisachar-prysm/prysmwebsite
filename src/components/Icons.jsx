// Line icons from the PRYSM design (24px grid, currentColor stroke).
const Svg = ({ children, ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {children}
  </svg>
)

export const Pulse = (props) => <Svg {...props}><path d="M4 12h3l2-5 4 10 2-5h5" /></Svg>
export const Search = (props) => <Svg {...props}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></Svg>
export const Stethoscope = (props) => <Svg {...props}><path d="M6 4v6a4 4 0 0 0 8 0V4" /><path d="M10 14v2a4 4 0 0 0 8 0v-2" /><circle cx="18" cy="12" r="2" /></Svg>
export const ListCheck = (props) => <Svg {...props}><path d="M4 6h16M4 12h10M4 18h7" /><path d="m15 17 2 2 4-4" /></Svg>
export const Bars = (props) => <Svg {...props}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></Svg>
export const Integration = (props) => <Svg {...props}><rect x="3" y="4" width="7" height="7" rx="1.5" /><rect x="14" y="13" width="7" height="7" rx="1.5" /><path d="M10 7.5h4a3 3 0 0 1 3 3V13M14 16.5h-4a3 3 0 0 1-3-3V11" /></Svg>
export const Mail = (props) => <Svg {...props}><path d="M4 6l8 6 8-6" /><rect x="3" y="5" width="18" height="14" rx="2" /></Svg>
export const Cap = (props) => <Svg {...props}><path d="M3 8l9-4 9 4-9 4-9-4Z" /><path d="M7 10v5c0 1.5 2.5 3 5 3s5-1.5 5-3v-5" /></Svg>
export const Cloud = (props) => <Svg {...props}><path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5Z" /></Svg>
export const UserLock = (props) => <Svg {...props}><circle cx="9" cy="8" r="3.5" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M17 11h4M17 15h4" /></Svg>
export const Doc = (props) => <Svg {...props}><path d="M6 3h9l4 4v14H6Z" /><path d="M14 3v5h5M9 13h7M9 17h5" /></Svg>
export const Badge = (props) => <Svg {...props}><circle cx="12" cy="10" r="6" /><path d="m9.5 10 1.8 1.8L15 8.3M8.5 15.5 7 21l5-2.5 5 2.5-1.5-5.5" /></Svg>

export const Chevron = ({ className = 'size-4 flex-none text-fg-2 transition-transform duration-250' }) => (
  <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
