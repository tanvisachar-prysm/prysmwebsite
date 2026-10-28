// Single source of truth for site navigation (header, mobile nav, footer).
export const PAGES = {
  home: { to: '/', label: 'Home' },
  prysm: { to: '/about', label: 'About PRYSM', short: 'PRYSM', blurb: 'The application' },
  playbook: { to: '/playbook', label: 'Frontline Playbook', short: 'Playbook', blurb: 'Strategy, training, and tools' },
  results: { to: '/results', label: 'Results' },
  security: { to: '/security', label: 'Security' },
  demo: { to: '/contact', label: 'Request a Demo' },
}

export const SOLUTIONS = [PAGES.prysm, PAGES.playbook]
export const MOBILE_NAV = [PAGES.home, PAGES.prysm, PAGES.playbook, PAGES.results, PAGES.security]
export const FOOTER_NAV = [PAGES.home, PAGES.prysm, PAGES.playbook, PAGES.results, PAGES.security, PAGES.demo]
