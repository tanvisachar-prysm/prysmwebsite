import { useState } from 'react'
import { Zoom } from './Lightbox'
import { Section, SectionHead, Wrap } from './ui'
import { cx } from '../utils/cx'
import { Bars, Chevron, Integration, ListCheck, Pulse, Search, Stethoscope } from './Icons'

const capabilities = [
  {
    Icon: Pulse,
    title: 'Clinical Intelligence',
    desc: 'Brings patient encounters and physician relationships together to reveal philanthropic opportunities across the health system.',
    subs: [
      ['Patient and encounter intelligence', 'See patient encounters and physician relationships together, with the context needed to evaluate potential philanthropic opportunities.'],
      ['Intelligence across the clinical landscape', 'Compare philanthropic opportunity across physicians, departments, service lines, and facilities.'],
    ],
    alt: 'Patient insights showing total visits, top department, top provider, and philanthropic opportunity',
  },
  {
    Icon: Search,
    title: 'Prospect Identification',
    desc: 'Combines clinical context with wealth, affinity, relationship, and giving information to help teams prioritize prospective donors.',
    subs: [
      ['Identify and prioritize', 'Use clinical context, wealth indicators, giving history, and relationship information to prioritize patients for prospect review.'],
      ['Work from current information', 'Regular clinical updates keep prospect information current and reduce manual list-building.'],
    ],
    alt: 'Prioritized prospects list with wealth indicators and clinical context',
  },
  {
    Icon: Stethoscope,
    title: 'Physician Engagement',
    desc: 'Captures physician referrals, coordinates follow-up, and reports outcomes to referring clinicians.',
    subs: [
      ['Referral coordination', 'Capture physician referrals, assign follow-up, and keep referring clinicians informed of outcomes.'],
      ['Build sustained participation', 'Track referrals and follow-up by physician to support ongoing participation.'],
    ],
    alt: 'Physician profile with patient panel, referrals, follow-up, and recent activity',
  },
  {
    Icon: ListCheck,
    title: 'Prospect Management',
    desc: 'Helps gift officers manage prospects, portfolios, outreach, and next steps.',
    subs: [
      ['Frontline execution', 'Manage prospect queues, portfolios, qualification, outreach, and follow-up in one place.'],
      ['Communications and activity', 'Optional integrated calling supports click-to-dial and automatic activity logging, helping teams keep outreach records current.'],
    ],
    alt: 'Prospect queue with wealth indicators, status, and next steps',
  },
  {
    Icon: Bars,
    title: 'Reporting and Analytics',
    desc: 'Shows referral activity, prospect development, and fundraising performance through role-specific dashboards.',
    subs: [
      ['Role-specific dashboards', 'Give gift officers, managers, and executives views of referrals, prospect activity, and pipeline performance.'],
      ['Compare program performance', 'Compare referral participation, qualification, outreach, and pipeline activity across teams, physicians, and facilities.'],
    ],
    alt: 'Program performance dashboard with referrals, qualified prospects, intro meetings, activity by month, and prospect status',
  },
  {
    Icon: Integration,
    title: 'Enterprise Integration',
    desc: 'Connects PRYSM with existing clinical and donor systems and specialized fundraising technologies.',
    subs: [
      ['Existing systems, connected', 'PRYSM works alongside existing clinical and donor systems, connecting patient insight with fundraising activity.'],
      ['Specialized integrations', 'Add specialized tools for wealth intelligence, communications, and analytics as your program grows.'],
    ],
    alt: 'PRYSM connected to Epic, donor CRM, wealth screening, and reporting and analytics',
  },
]

// Light screenshot tile; `inList` is the copy shown inside an open panel on narrow screens.
const Figure = ({ i, inList = false }) => (
  <Zoom
    className={cx('m-0 overflow-hidden rounded-xl bg-[#f2f2f4] p-[18px]', inList && 'max-lg:p-0')}
    imgClassName="block w-full h-auto mx-auto object-contain"
    src={`/img/cap-ui-${i + 1}.png`}
    alt={capabilities[i].alt}
  />
)

export const SixCapabilities = () => {
  const [active, setActive] = useState(0)

  return (
    <Section variant="dark" id="explore">
      <Wrap>
        <SectionHead title="Six capabilities. One connected application." />
        <div className="grid grid-cols-[minmax(0,480px)_minmax(0,1fr)] items-start gap-[clamp(28px,4vw,64px)] lg:gap-10">
          <div className="flex flex-col gap-2">
            {capabilities.map(({ Icon, title, desc, subs }, i) => {
              const open = i === active
              const id = `cap${i + 1}`
              return (
                <div className="relative overflow-hidden rounded-xl bg-[#f2f2f4] text-[#1b1a1f] [--accent:#4a2a99]" id={id} key={title}>
                  <h3 className="m-0 [font-size:inherit] tracking-normal">
                    <button
                      className="group flex w-full items-start gap-3.5 px-5 py-4.5 text-left cursor-pointer font-display text-[1.05rem] leading-[1.3] font-bold text-[#1b1a1f] focus-visible:outline-offset-[-3px] focus-visible:rounded-xl"
                      id={`${id}-b`}
                      aria-expanded={open}
                      aria-controls={`${id}-p`}
                      onClick={() => setActive(i)}
                    >
                      <span className="grid flex-none place-items-center size-[38px] rounded-[10px] bg-[#e6e4ec] text-[#4a2a99]"><Icon className="size-5" /></span>
                      <span className="flex flex-1 flex-col gap-[5px] min-w-0">
                        <span className="flex items-baseline gap-2.5">
                          <span className="text-[.78rem] tracking-[.06em] tabular-nums text-[#4a2a99]">{String(i + 1).padStart(2, '0')}</span>
                          <span className="flex-1">{title}</span>
                        </span>
                        <span className="font-sans text-[.9rem] leading-[1.45] font-normal text-[#56525f]">{desc}</span>
                      </span>
                      <Chevron className="size-4 flex-none mt-2.5 text-[#56525f] transition-transform duration-250 group-aria-expanded:rotate-180" />
                    </button>
                  </h3>
                  <div className="pt-0 pr-5 pb-6 pl-[72px] max-fa:px-4.5 max-fa:pb-5.5" id={`${id}-p`} role="region" aria-labelledby={`${id}-b`} hidden={!open}>
                    <div className="flex flex-col gap-4.5 border-t border-white/10 pt-4.5">
                      {subs.map(([h, text]) => (
                        <div className="flex flex-col gap-1.5" key={h}>
                          <h4 className="text-[.98rem] text-[#1b1a1f]">{h}</h4>
                          <p className="text-[.96rem] font-normal text-[#56525f]">{text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="hidden max-fa:flex max-fa:flex-col max-fa:gap-4 max-fa:mt-5.5 max-lg:-mx-4"><Figure i={i} inList /></div>
                  </div>
                  <span
                    className={cx('absolute left-0 bottom-0 h-0.5 bg-[linear-gradient(90deg,#4a2a99,#8f6bff)] transition-[width] duration-600 ease-[ease]', open ? 'w-full' : 'w-0')}
                    aria-hidden="true"
                  ></span>
                </div>
              )
            })}
          </div>
          <div className="sticky top-[calc(env(safe-area-inset-top,0px)+70px)] max-fa:hidden">
            <div className="flex flex-col gap-5 animate-fade-up" key={active}><Figure i={active} /></div>
          </div>
        </div>
      </Wrap>
    </Section>
  )
}
