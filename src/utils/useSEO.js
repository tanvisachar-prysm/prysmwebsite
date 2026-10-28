import { useEffect } from 'react'

const SITE = 'PRYSM'
const DEFAULT_TITLE = 'PRYSM · Purpose-built for healthcare philanthropy'
const DEFAULT_DESCRIPTION = 'PRYSM connects clinical insight, physician referrals, and fundraising operations to help health systems identify prospective donors.'

// Find or create a <meta>/<link> in <head> matching `attr="key"` and set one attribute on it.
const setHeadTag = (tag, attr, key, valueAttr, value) => {
  let el = document.head.querySelector(`${tag}[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute(valueAttr, value)
}

// Per-page title, description, canonical URL, social tags and robots directive.
export const useSEO = (title, description = DEFAULT_DESCRIPTION, { noindex = false } = {}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE}` : DEFAULT_TITLE
    const url = window.location.origin + window.location.pathname

    document.title = fullTitle
    setHeadTag('meta', 'name', 'description', 'content', description)
    setHeadTag('meta', 'name', 'robots', 'content', noindex ? 'noindex, follow' : 'index, follow')
    setHeadTag('link', 'rel', 'canonical', 'href', url)
    setHeadTag('meta', 'property', 'og:title', 'content', fullTitle)
    setHeadTag('meta', 'property', 'og:description', 'content', description)
    setHeadTag('meta', 'property', 'og:url', 'content', url)
    setHeadTag('meta', 'name', 'twitter:title', 'content', fullTitle)
    setHeadTag('meta', 'name', 'twitter:description', 'content', description)
  }, [title, description, noindex])
}
