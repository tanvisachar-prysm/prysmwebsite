import { useEffect, useRef, useState } from 'react'
import { Chevron } from './Icons'
import { Section, SectionHead, Wrap } from './ui'
import { cx } from '../utils/cx'

const LEVELS = { 4: 'Full', 3: 'Substantial', 2: 'Partial', 1: 'Limited', 0: 'Not core' }

// [capability, donor CRM + patient module, traditional donor CRM]; PRYSM is Full on every row.
const groups = [
  ['PROSPECT & PIPELINE DEVELOPMENT', [
    ['High-volume pipeline development', 2, 2],
    ['Automated prospect identification', 2, 2],
    ['Prospect prioritization', 3, 3],
    ['Multi-record updating', 2, 3],
    ['Bulk prospect actions', 2, 3],
    ['Automated assignment & routing', 3, 3],
    ['Portfolio management', 4, 4],
  ]],
  ['CLINICAL INTELLIGENCE', [
    ['Broad patient & encounter data', 2, 0],
    ['Recurring clinical screening', 2, 1],
    ['Physician relationship intelligence', 2, 0],
    ['Department & service-line insights', 2, 1],
    ['Wealth & propensity intelligence', 3, 3],
  ]],
  ['CLINICIAN ENGAGEMENT', [
    ['Clinician-centric workflows', 2, 0],
    ['Structured physician referrals', 2, 1],
    ['Referral tracking & feedback', 2, 1],
    ['Physician-facing dashboards', 2, 0],
  ]],
  ['ENTERPRISE CAPABILITIES', [
    ['Configurable workflow automation', 3, 4],
    ['Integrated communications', 3, 3],
    ['Executive & pipeline analytics', 3, 3],
    ['Multi-facility operations', 3, 4],
    ['Flexible technology ecosystem', 3, 3],
    ['Enterprise scalability', 4, 4],
  ]],
]

// Stagger index for the PRYSM column fill-in animation, counted across all groups.
const rowsWithDelay = groups.map(([name, rows], gi) => {
  const offset = groups.slice(0, gi).reduce((n, [, r]) => n + r.length, 0)
  return [name, rows.map((row, i) => [...row, 45 * (offset + i)])]
})

const fillsOnScroll = () =>
  'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const HarveyBall = ({ level, delay, className }) => (
  <span
    className={cx('harvey-ball', className)}
    style={{ '--f': `${level * 25}%`, ...(delay != null && { '--d': `${delay}ms` }) }}
    role="img"
    aria-label={LEVELS[level]}
  />
)

// Cell recipes. Rows are `group`s so a hovered row highlights every cell.
const CELL = 'px-4 py-3 border-b border-white/8 transition-colors duration-150 max-md:px-1.5 max-md:py-2.5'
const PRYSM_COL = 'border-x border-x-[rgba(185,165,255,.5)] bg-[linear-gradient(180deg,rgba(107,66,230,.55),rgba(74,42,153,.55))]'
const HEAD = 'px-4 pt-3 pb-3.5 border-b border-white/8 align-bottom text-[.82rem] max-md:px-1.5 max-md:pt-2.5 max-md:text-[.66rem] max-md:leading-[1.25] md:sticky md:top-[calc(env(safe-area-inset-top,0px)+60px)] md:z-3'
const HEAD_PLAIN = 'md:bg-[#0d0c14] md:shadow-[0_1px_0_rgba(255,255,255,.12)]'

const PHONE = '(max-width:700px)'

export const CompareTable = () => {
  const tableRef = useRef(null)
  const [isPhone, setIsPhone] = useState(() => window.matchMedia(PHONE).matches)
  const [collapsed, setCollapsed] = useState(() => groups.map((_, i) => isPhone && i > 0))
  // Hold the PRYSM column empty until the table scrolls into view, then fill it in.
  const [pre, setPre] = useState(fillsOnScroll)

  useEffect(() => {
    const mq = window.matchMedia(PHONE)
    const onChange = () => {
      setIsPhone(mq.matches)
      setCollapsed(groups.map((_, i) => mq.matches && i > 0))
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!fillsOnScroll()) return
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        requestAnimationFrame(() => setPre(false))
        io.disconnect()
      }
    }, { threshold: 0.15 })
    io.observe(tableRef.current)
    return () => io.disconnect()
  }, [])

  const toggle = (i) => {
    if (!isPhone) return
    setCollapsed((c) => c.map((v, j) => (j === i ? !v : v)))
  }

  return (
    <Section variant="dark" id="compare">
      <Wrap>
        <SectionHead title="How PRYSM compares" lede="Qualitative capability breadth by solution category. These are provisional category-level assessments, not verified competitor product scores." />
        <div className="flex flex-wrap gap-4.5 -mt-3 mb-6 text-[.9rem] text-fg-2">
          {[4, 3, 2, 1, 0].map((l) => <span className="inline-flex items-center gap-2" key={l}><HarveyBall level={l} />{LEVELS[l]}</span>)}
        </div>
        <div className="overflow-x-auto rounded-xl md:overflow-visible">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-[.95rem] max-md:min-w-0 max-md:table-fixed max-md:text-[.84rem]" ref={tableRef}>
            <thead>
              <tr>
                <th scope="col" className={cx(HEAD, HEAD_PLAIN, 'text-left font-medium text-fg max-md:w-[46%]')}>Capability</th>
                <th scope="col" className={cx(HEAD, PRYSM_COL, 'border-t border-t-[rgba(185,165,255,.5)] rounded-t-xl font-bold text-white text-[1rem] tracking-[.08em] shadow-[0_-10px_40px_rgba(124,84,255,.35)] md:bg-[linear-gradient(180deg,#6b42e6,#5a35c4)] max-md:text-[.78rem] max-md:tracking-[.04em]')}>PRYSM</th>
                <th scope="col" className={cx(HEAD, HEAD_PLAIN, 'text-center font-bold text-fg-2')}>Donor CRM +<br />patient module</th>
                <th scope="col" className={cx(HEAD, HEAD_PLAIN, 'text-center font-bold text-fg-2')}>Traditional<br />donor CRM</th>
              </tr>
            </thead>
            {rowsWithDelay.map(([name, rows], gi) => (
              <tbody id={`cg${gi}`} key={name}>
                <tr>
                  <th scope="rowgroup" colSpan={4} className="px-4 pt-5.5 pb-3 border-b border-white/14 text-left text-[.74rem] tracking-[.1em] font-bold text-fg-3 max-md:px-1.5 max-md:pt-4 max-md:pb-2.5 max-md:text-[.68rem]">
                    <button
                      type="button"
                      className="group flex w-full items-center gap-2 text-left cursor-default max-md:cursor-pointer max-md:justify-between max-md:py-1 max-md:focus-visible:outline-offset-2"
                      aria-expanded={!collapsed[gi]}
                      aria-controls={`cg${gi}`}
                      onClick={() => toggle(gi)}
                    >
                      {name}
                      <Chevron className="hidden size-4 flex-none text-fg-2 transition-transform duration-250 max-md:block group-aria-expanded:rotate-180" />
                    </button>
                  </th>
                </tr>
                {rows.map(([cap, a, b, delay], ri) => (
                  <tr className={cx('group', collapsed[gi] && 'max-md:hidden')} key={cap}>
                    <th scope="row" className={cx(CELL, 'text-left font-medium text-fg group-hover:bg-white/6 group-hover:text-white max-md:w-[46%]')}>{cap}</th>
                    <td
                      className={cx(
                        CELL,
                        PRYSM_COL,
                        'text-center group-hover:bg-[linear-gradient(180deg,rgba(124,84,255,.8),rgba(90,53,196,.8))]',
                        ri === rows.length - 1 && 'border-b-[rgba(185,165,255,.5)] rounded-b-xl',
                      )}
                    >
                      <HarveyBall level={pre ? 0 : 4} delay={delay} className="[--on:#fff] [--off:rgba(255,255,255,.25)] group-hover:shadow-[0_0_14px_rgba(255,255,255,.55)]" />
                    </td>
                    <td className={cx(CELL, 'text-center group-hover:bg-white/6')}><HarveyBall level={a} /></td>
                    <td className={cx(CELL, 'text-center group-hover:bg-white/6')}><HarveyBall level={b} /></td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Wrap>
    </Section>
  )
}
