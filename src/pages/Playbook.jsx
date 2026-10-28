import { Img, Photo } from '../components/Img'
import { Zoom } from '../components/Lightbox'
import { Bars, Cap, ListCheck, Mail, Search, Stethoscope } from '../components/Icons'
import { HeroGrid, Lede, Prose, Pull, Section, SectionHead, Split, Stack, StoryBlock, Wrap } from '../components/ui'
import { useSEO } from '../utils/useSEO'

const focusAreas = [
  [Search, 'Prospect Identification & Qualification', 'Establish consistent practices for evaluating, prioritizing, and advancing prospective donors.'],
  [Stethoscope, 'Physician Engagement & Referrals', 'Build stronger clinical partnerships through structured engagement, referral processes, and ongoing feedback.'],
  [Mail, 'Frontline Outreach & Discovery', 'Equip gift officers with practical approaches, outreach strategies, and tools for meaningful prospect engagement.'],
  [ListCheck, 'Pipeline & Portfolio Development', 'Establish repeatable processes for managing prospects, tracking activity, and advancing opportunities.'],
  [Bars, 'Data-Driven Performance', 'Use PRYSM dashboards, insights, and reporting to evaluate strategies, measure results, and identify opportunities for improvement.'],
  [Cap, 'Training & Adoption', 'Support onboarding, role-specific proficiency, and the consistent application of effective fundraising practices.'],
]

const frameworkParts = [
  ['PRYSM', 'PRYSM provides the intelligence, automation, and tools to identify and develop philanthropic opportunities.'],
  ['Frontline Playbook', 'The Frontline Playbook helps teams put those capabilities to work.'],
]

const PartCard = ({ name, text }) => (
  <div className="flex flex-col gap-2.5 h-full p-6.5 rounded-xl border border-white/10 bg-[rgba(60,55,96,.42)]">
    <strong className="text-[1.15rem] tracking-[.04em] text-[#cdbfff]">{name}</strong>
    <p className="text-fg-2">{text}</p>
  </div>
)

export const Playbook = () => {
  useSEO('Frontline Playbook', 'The PRYSM Frontline Playbook combines strategic guidance, role-specific training, and practical tools for healthcare philanthropy teams.')

  return (
    <>
      <Section variant="hero">
        <HeroGrid>
          <Stack loose>
            <h1>A practical guide to turning insight into action.</h1>
            <Lede>Successful healthcare philanthropy requires more than access to better data and technology. It requires a clear strategy, consistent practices, and teams equipped to turn information into meaningful engagement.</Lede>
          </Stack>
          <figure className="m-0 w-full max-w-[480px] justify-self-center overflow-hidden rounded-xl border border-line shadow-[0_24px_60px_rgba(60,30,140,.12)]">
            <Img priority className="block w-full h-auto" src="/img/playbook-graphic.jpg" alt="PRYSM Frontline Playbook: Strategy, Practices, Tools and Measure. Learn the strategy, apply best practices, use in PRYSM, get measurable results." />
          </figure>
        </HeroGrid>
      </Section>

      <Section variant="band">
        <Wrap>
          <Split>
            <Photo wide src="/img/playbook-team.jpg" alt="A colleague presenting ideas on a whiteboard to his team" />
            <Prose>
              <Pull>The PRYSM Frontline Playbook bridges the gap between technology and execution.</Pull>
              <p>Developed specifically for healthcare philanthropy, it provides a practical framework for leveraging PRYSM to strengthen physician relationships, identify and develop prospective donors, and build more productive prospect pipelines.</p>
              <p>Built around established practices and strategies, the Playbook combines strategic guidance, role-specific training, and practical tools to help organizations implement, test, and refine their approaches to healthcare philanthropy.</p>
            </Prose>
          </Split>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead title="From strategy to everyday practice" lede="The Playbook provides guidance across the core activities that drive successful healthcare philanthropy programs:" />
          <div className="grid grid-cols-2 gap-x-[clamp(28px,5vw,64px)] border-t border-line max-tab:grid-cols-1">
            {focusAreas.map(([Icon, title, text]) => (
              <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4.5 px-2 py-6.5 border-b border-line" key={title}>
                <span className="grid place-items-center size-11 rounded-xl bg-accent-soft text-accent"><Icon className="size-5.5" /></span>
                <span className="flex flex-col gap-1.5 min-w-0">
                  <span className="flex items-baseline gap-2.5"><h3 className="text-[1.15rem]">{title}</h3></span>
                  <p className="text-[.95rem] text-fg-2">{text}</p>
                </span>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section variant="band">
        <Wrap>
          <Split>
            <StoryBlock title="An established framework. Adapted to your organization.">
              <p>The PRYSM Frontline Playbook provides a consistent foundation of strategies, workflows, and practical guidance developed specifically for healthcare philanthropy.</p>
              <p>Rather than starting from scratch, organizations can build on this established framework, adapting its practices to their fundraising priorities, clinical relationships, and operational needs.</p>
              <p>Importantly, the Playbook goes beyond explaining how to perform activities within PRYSM. It also addresses the strategy and rationale behind them, giving teams a structured approach to testing different grateful patient engagement strategies, measuring their effectiveness, and refining their practices over time.</p>
            </StoryBlock>
            <div className="light-tile grid place-items-center p-[clamp(20px,3vw,36px)] rounded-[14px] bg-white shadow-[0_24px_60px_rgba(0,0,0,.35)]">
              <Zoom className="mx-auto w-full max-w-[520px]" imgClassName="block w-full h-auto" src="/img/playbook-loop.png" alt="Frontline Playbook cycle: test, measure, refine" />
            </div>
          </Split>
        </Wrap>
      </Section>

      <Section variant="dark" className="bg-team-photo">
        <Wrap>
          <SectionHead center title="More than software. A framework for results." />
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 max-w-[940px] mx-auto max-tab:grid-cols-1">
            <PartCard name={frameworkParts[0][0]} text={frameworkParts[0][1]} />
            <div className="grid place-items-center self-center size-11 rounded-full bg-accent text-accent-fg text-[1.4rem] font-semibold max-tab:justify-self-center" aria-hidden="true">+</div>
            <PartCard name={frameworkParts[1][0]} text={frameworkParts[1][1]} />
          </div>
          <p className="spot-glow spot-fill max-w-[940px] mx-auto mt-5 px-6.5 py-5.5 rounded-xl text-center text-[1.15rem] leading-[1.45]">Together, they connect technology, strategy, and execution to support sustainable growth in healthcare philanthropy.</p>
        </Wrap>
      </Section>
    </>
  )
}
