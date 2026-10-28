import { Img, Photo } from '../components/Img'
import { Zoom } from '../components/Lightbox'
import { ButtonLink, Buttons, HeroGrid, Lede, Prose, Pull, Section, SectionHead, Split, Stack, StoryBlock, Wrap } from '../components/ui'
import { cx } from '../utils/cx'
import { useSEO } from '../utils/useSEO'

// Light infographic tile used beside text in the case-study bands.
const TILE = 'light-tile min-h-[340px] rounded-[14px] bg-white shadow-[0_24px_60px_rgba(0,0,0,.35)]'
const STAT_NUMBER = 'tracking-[-.03em] tabular-nums'
const DARK_PANEL = 'min-w-0 rounded-xl border border-white/16 bg-[#1d1a2c]'
const KICKER = 'text-[.74rem] font-semibold uppercase'

const Arrow = ({ both }) => (
  <svg className="w-9 justify-self-center text-accent max-lg:rotate-90" viewBox="0 0 40 24" aria-hidden="true">
    <path d={both ? 'M8 4 0 12l8 8M0 12h40m-8-8 8 8-8 8' : 'M2 12h32m-8-8 8 8-8 8'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GroupTitle = ({ children }) => (
  <h3 className="mb-3.5 text-[.8rem] font-semibold tracking-[.09em] uppercase text-[#dcd2ff]">{children}</h3>
)

const Tile = ({ big, label, unit }) => (
  <div className={cx(DARK_PANEL, 'flex flex-col gap-1 p-5.5 max-sm:p-4.5')}>
    <span className={cx(STAT_NUMBER, 'text-[clamp(2rem,3.4vw,2.6rem)] leading-[1.05] font-medium text-white')}>{big}</span>
    <strong className="mt-1.5 text-[.98rem] leading-[1.3]">{label}</strong>
    {unit && <em className="not-italic text-[.88rem] text-fg-2">{unit}</em>}
  </div>
)

const Bar = ({ value, label, height, current = false }) => (
  <div className="relative flex flex-1 h-full flex-col items-center justify-end">
    <b className="order-first mb-1.5 text-[1rem] font-bold">{value}</b>
    <i
      className={cx('block w-full max-w-[92px] rounded-t-lg', current ? 'bg-[linear-gradient(180deg,#a48bff,#6b42e6)]' : 'bg-[rgba(201,185,255,.35)]')}
      style={{ height }}
    ></i>
    <span className="absolute top-[calc(100%+8px)] whitespace-nowrap text-[.82rem]">{label}</span>
  </div>
)

const ConversionBar = ({ label, value }) => (
  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 gap-y-2">
    <span className="col-start-1 row-start-1 font-semibold">{label}</span>
    <b className="col-start-2 row-start-1 text-[1.5rem] text-accent">{value}</b>
    <div className="col-span-2 row-start-2 h-3.5 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))]">
      <i className="block h-full rounded-full bg-[linear-gradient(90deg,#8f6bff,var(--accent))]" style={{ width: value }}></i>
    </div>
  </div>
)

const SystemCard = ({ kicker, title, text, core = false }) => (
  <article
    className={cx(
      'flex flex-col gap-2 h-full p-6 rounded-xl bg-surface',
      core ? 'border-[1.5px] border-accent shadow-[0_18px_50px_color-mix(in_srgb,var(--accent)_16%,transparent)]' : 'border border-panel-line',
    )}
  >
    <span className={cx(KICKER, core ? 'text-accent tracking-[.14em]' : 'text-fg-3 tracking-[.09em]')}>{kicker}</span>
    <h3 className="text-[1.1rem]">{title}</h3>
    <p className="text-[.95rem] text-fg-2">{text}</p>
  </article>
)

const RING_PILL = 'absolute px-3.5 py-2 rounded-full border border-panel-line bg-surface text-[.86rem] font-semibold whitespace-nowrap shadow-[0_6px_16px_rgba(30,15,80,.08)] max-sm:px-2.5 max-sm:py-1.5 max-sm:text-[.76rem]'
// Labels sit on the ring at N/E/S/W; on phones they move to the corners to clear the centre.
const ringLabels = [
  ['Referral capture', 'top-[9%] left-1/2 -translate-x-1/2 max-sm:top-[4%] max-sm:left-0 max-sm:translate-x-0'],
  ['Prospect reviews', 'top-1/2 right-[3%] -translate-y-1/2 max-sm:top-[4%] max-sm:right-0 max-sm:translate-y-0'],
  ['Activity tracking', 'bottom-[9%] left-1/2 -translate-x-1/2 max-sm:bottom-[4%] max-sm:left-auto max-sm:right-0 max-sm:translate-x-0'],
  ['Feedback', 'top-1/2 left-[3%] -translate-y-1/2 max-sm:top-auto max-sm:bottom-[4%] max-sm:left-0 max-sm:translate-y-0'],
]

const scale = [
  ['Hospitals', '14–15'],
  ['Patient records', '1.7M'],
  ['Patient encounters', '9.4M'],
  ['Healthcare providers', '79K'],
  ['Fundraising professionals', '~50'],
]

const automationSteps = ['Daily clinical-data updates', 'Automated screening', 'Prioritized prospect queues', 'Integrated workflows']

export const Results = () => {
  useSEO('Results', 'How Providence used PRYSM to build a coordinated, automated, and measurable approach to grateful patient fundraising.')

  return (
    <>
      <Section variant="hero">
        <HeroGrid>
          <Stack loose>
            <h1>A New Approach to Healthcare Philanthropy</h1>
            <Lede>In 2020, Providence introduced PRYSM across four hospitals, beginning a transformation in how its philanthropy teams identified opportunities, engaged clinicians, and developed relationships with prospective donors.</Lede>
          </Stack>
          <Photo priority wide src="/img/providence-st-joseph.jpg" alt="Providence St. Joseph Medical Center main entrance and patient tower" />
        </HeroGrid>
      </Section>

      <Section className="pt-0">
        <Wrap>
          <Prose width="measure">
            <p>Built natively on Salesforce, PRYSM connected clinical intelligence, philanthropic data, and fundraising activity within a dedicated prospect and pipeline development application.</p>
            <p>As adoption expanded, Providence gained a more coordinated, automated, and measurable approach to grateful patient fundraising, establishing a foundation for consistent practices and continuous improvement across participating hospitals.</p>
          </Prose>
        </Wrap>
      </Section>

      <Section variant="dark">
        <Wrap>
          <SectionHead title="Providence by the Numbers" />
          <div className="flex flex-col gap-10">
            <div>
              <GroupTitle>Fundraising Performance</GroupTitle>
              <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-2 max-lg:grid-cols-1">
                <div className="spot-glow bg-conf-photo flex flex-col gap-1.5 min-w-0 p-7 pb-11 rounded-xl">
                  <span className={cx(STAT_NUMBER, 'text-[clamp(3rem,6vw,4.4rem)] leading-none font-medium')}>150%</span>
                  <strong className="text-[1.1rem]">Fundraising growth</strong>
                  <div className="flex items-end gap-4.5 h-[170px] mt-5.5 pt-1.5 border-b border-white/25" role="img" aria-label="Fundraising grew from $2 million in FY2023 to $5 million year-to-date through October 2025">
                    <Bar value="$2M" label="FY2023" height="40%" />
                    <Bar value="$5M" label="YTD Oct 2025" height="100%" current />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Tile big="305%" label="First-time major gifts" unit="increase" />
                  <Tile big="448%" label="Discovery calls" unit="increase" />
                  <Tile big="480" label="Physician referrals" />
                  <Tile big="$7M+" label="Active qualified pipeline" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
              <div>
                <GroupTitle>Operational Efficiency</GroupTitle>
                <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
                  <Tile big="0.5" label="Data operations staffing" unit="FTE" />
                  <Tile big="92%" label="Monthly data-processing hours" unit="reduction" />
                  <Tile big="90%" label="Onboarding time" unit="reduction" />
                </div>
              </div>
              <div>
                <GroupTitle>Enterprise Scale</GroupTitle>
                <dl className={cx(DARK_PANEL, 'm-0 px-5.5 py-1.5')}>
                  {scale.map(([term, value]) => (
                    <div className="flex items-baseline justify-between gap-4 py-[11px] border-b border-white/10 last:border-b-0" key={term}>
                      <dt className="text-fg-2">{term}</dt>
                      <dd className="m-0 text-[1.25rem]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <p className="max-w-[52rem] pt-4.5 border-t border-white/12 text-[.88rem] text-fg-2">These figures reflect different historical reporting periods and implementation scopes. Fundraising grew from $2 million in FY2023 to $5 million year-to-date through October 2025. The first-time major-gift, data-processing, and onboarding metrics require final validation.</p>
          </div>
        </Wrap>
      </Section>

      <Section variant="band">
        <Wrap>
          <Split top>
            <StoryBlock
              eyebrow="The challenge"
              title="Moving Beyond Traditional Donor Management"
              headingClass="text-[clamp(1.5rem,2.6vw,2rem)]"
              before={<Photo className="max-w-[320px] mb-5" src="/img/ex-think.jpg" alt="A professional thinking at her laptop" focus="center 30%" />}
            >
              <p>Providence historically relied on a traditional donor management system to support grateful patient fundraising. While effective for managing donor relationships, gifts, and stewardship, this approach did not fully address the operational demands of prospect identification, clinician engagement, and pipeline development.</p>
              <p>Clinical and philanthropic information was distributed across systems, requiring manual research, data preparation, and coordination. Individual foundations developed their own processes, limiting visibility into opportunities and making it difficult to establish consistent practices or compare performance across hospitals.</p>
              <p>Providence needed a more integrated approach that could connect clinical intelligence with fundraising activity without replacing its existing donor management system.</p>
            </StoryBlock>
            <StoryBlock eyebrow="The transformation" title="Connecting Intelligence, People, and Processes" headingClass="text-[clamp(1.5rem,2.6vw,2rem)]">
              <p>PRYSM introduced a dedicated environment for philanthropic prospect and pipeline development, connecting clinical data, philanthropic intelligence, clinician engagement, and fundraising workflows.</p>
              <p>Automated processes reduced administrative effort, while shared dashboards and performance measures gave teams greater visibility into opportunities and activity across participating hospitals.</p>
              <p>The result was a more coordinated operating model that supported consistent practices while allowing individual foundations to pursue strategies suited to their communities.</p>
            </StoryBlock>
          </Split>
          <Zoom className="mx-auto mt-12 max-w-[640px]" imgClassName="block w-full h-auto" src="/img/before-after.png" alt="Before: clinical data, philanthropic intelligence, clinician engagement, and fundraising workflows in separate systems. With PRYSM: all four connected through PRYSM, built on Salesforce." />
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Split top>
            <div><h2>Opportunity Intelligence: Seeing the Full Fundraising Landscape</h2></div>
            <Prose>
              <p>Through automated analysis of patient and encounter records, philanthropic intelligence, and propensity modeling, PRYSM gave Providence a comprehensive view of philanthropic opportunities across its healthcare system.</p>
              <p>Role-based dashboards provided continuously updated insights into opportunities across hospitals, clinical departments, physicians, patient populations, and individual prospects.</p>
              <p>Fundraisers could identify promising patients and clinician relationships, while leadership gained greater visibility into the philanthropic potential of departments and physician patient panels.</p>
              <p>This intelligence supported more informed decisions about prospect prioritization, clinician engagement, fundraising strategy, and resource allocation.</p>
            </Prose>
          </Split>
          <figure className="mx-auto mt-9 max-w-[920px] overflow-hidden">
            <Img className="block w-full h-auto mix-blend-multiply" src="/img/funnel3.png" alt="Opportunity insight narrowing from hospitals to clinical departments, physicians, patient populations, and individual prospects" />
          </figure>
        </Wrap>
      </Section>

      <Section variant="band">
        <Wrap>
          <Split reverse>
            <StoryBlock title="Automation: More Time for Relationships">
              <p>PRYSM's automation-first approach reduced the administrative work associated with patient screening, prospect research, and activity management.</p>
              <p>Daily clinical-data updates, automated screening, prioritized prospect queues, and integrated workflows gave fundraisers timely information and clearer next steps.</p>
              <p>By reducing reliance on manual processes, PRYSM enabled fundraising teams to devote more time to developing donor relationships and engaging clinicians.</p>
              <p>The historical South Division program supported its data operations with approximately 0.5 FTE, illustrating the efficiency of its automated operating model.</p>
            </StoryBlock>
            <div className={cx(TILE, 'flex flex-col justify-center gap-5 p-7 text-left *:w-full')} role="img" aria-label="Daily clinical-data updates, automated screening, prioritized prospect queues, and integrated workflows">
              <ol className="flex flex-col">
                {automationSteps.map((step, i) => (
                  <li
                    key={step}
                    className="relative flex items-center gap-3.5 py-3.5 font-semibold not-first:before:absolute not-first:before:left-[15px] not-first:before:-top-3.5 not-first:before:h-7 not-first:before:border-l-2 not-first:before:border-dotted not-first:before:border-[color-mix(in_srgb,var(--accent)_50%,transparent)] not-first:before:content-['']"
                  >
                    <span className="relative z-1 grid flex-none place-items-center size-8 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface))] text-[.85rem] text-accent">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="flex items-baseline gap-2 pt-4.5 border-t border-line">
                <span className={cx(STAT_NUMBER, 'text-[2.6rem] leading-none font-light text-accent')}>0.5</span>
                <span className="font-semibold text-fg-2">FTE</span>
              </div>
            </div>
          </Split>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Split>
            <StoryBlock title="Strengthening Clinician Engagement">
              <p>PRYSM helped Providence establish a more structured and measurable approach to clinician engagement.</p>
              <p>Referral capture, prospect reviews, activity tracking, and feedback brought greater consistency to collaboration between clinicians and philanthropy teams.</p>
              <p>During the initial deployment, Providence managed 480 physician referrals through PRYSM, establishing a foundation for tracking participation, coordinating follow-up, and evaluating engagement strategies across hospitals.</p>
            </StoryBlock>
            <div
              className={cx(TILE, "relative grid place-items-center justify-self-center w-full max-w-[420px] aspect-square before:absolute before:inset-[16%] before:rounded-full before:border-2 before:border-dashed before:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] before:content-['']")}
              role="img"
              aria-label="480 physician referrals, supported by referral capture, prospect reviews, activity tracking, and feedback"
            >
              <div className="relative flex flex-col items-center justify-center gap-0.5 w-[38%] aspect-square rounded-full bg-accent text-white text-center shadow-[0_18px_40px_color-mix(in_srgb,var(--accent)_30%,transparent)]">
                <span className={cx(STAT_NUMBER, 'text-[clamp(2.2rem,4vw,3rem)] leading-none font-light')}>480</span>
                <span className="px-2.5 text-[.82rem] font-semibold">Physician referrals</span>
              </div>
              {ringLabels.map(([label, position]) => <span key={label} className={cx(RING_PILL, position)}>{label}</span>)}
            </div>
          </Split>
        </Wrap>
      </Section>

      <Section variant="band">
        <Wrap>
          <Split reverse>
            <StoryBlock title="From Activity Tracking to Continuous Improvement">
              <p>PRYSM established a common framework for goal setting, performance measurement, and evaluating fundraising strategies.</p>
              <p>With consistent data and reporting, Providence could compare performance across hospitals, departments, referral sources, and engagement methods to identify successful practices and refine its approach.</p>
              <p>Program analysis revealed qualification conversion rates of 40.8% for inpatient visits and 35.9% for direct clinician referrals, demonstrating how performance data could inform strategic decisions.</p>
              <p>This shifted the focus from simply tracking activity to systematically measuring and improving philanthropic pipeline development.</p>
            </StoryBlock>
            <div className={cx(TILE, 'flex flex-col justify-center gap-5.5 p-8 text-left *:w-full')} role="img" aria-label="Qualification conversion rates: 40.8% for inpatient visits and 35.9% for direct clinician referrals">
              <span className={cx(KICKER, 'text-fg-3 tracking-[.09em]')}>Qualification conversion rates</span>
              <ConversionBar label="Inpatient visits" value="40.8%" />
              <ConversionBar label="Direct clinician referrals" value="35.9%" />
            </div>
          </Split>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <SectionHead title="Built to Complement Existing Systems" lede="PRYSM strengthened Providence's prospect development capabilities while preserving its existing enterprise technology investments." />
          <div className="grid grid-cols-[minmax(0,1fr)_40px_minmax(0,1.15fr)_40px_minmax(0,1fr)] items-center gap-2.5 max-lg:grid-cols-1">
            <SystemCard kicker="Epic" title="Clinical Intelligence" text="Provides patient encounters, clinical departments, and clinician relationship information." />
            <Arrow />
            <SystemCard core kicker="PRYSM" title="Prospect and Pipeline Development" text="Built natively on Salesforce, PRYSM supports prospect identification, qualification, clinician engagement, automation, opportunity intelligence, and pipeline analytics." />
            <Arrow both />
            <SystemCard kicker="Blackbaud CRM" title="Donor Management" text="Continues to support donor relationships, gift processing, and stewardship." />
          </div>
          <p className="mt-7 max-w-[46rem] text-fg-2">Together, these systems support a connected approach to healthcare philanthropy without requiring Providence to replace its established donor management system.</p>
        </Wrap>
      </Section>

      <Section variant="band">
        <Wrap>
          <SectionHead title="The Outcome: A More Strategic Approach to Healthcare Philanthropy" />
          <Prose width="measure">
            <p>Providence's experience illustrates how integrated intelligence, automation, and consistent practices can transform grateful patient fundraising across a complex healthcare system.</p>
            <p>PRYSM helped Providence move beyond fragmented processes toward a coordinated, measurable approach to identifying opportunities, engaging clinicians, and developing its philanthropic pipeline.</p>
            <Pull>By connecting people, information, and strategy, Providence established a foundation for more efficient operations, informed decision-making, and sustained program improvement.</Pull>
          </Prose>
          <div className="bg-strands-cta flex flex-wrap items-center justify-between gap-5 min-h-[240px] mt-14 p-10 rounded-xl max-sm:p-7">
            <h2 className="max-w-[28ch] text-[clamp(1.4rem,2.6vw,1.9rem)] text-white">Build a Stronger Philanthropic Pipeline with PRYSM</h2>
            <Buttons><ButtonLink to="/demo">Request a Demo</ButtonLink></Buttons>
          </div>
        </Wrap>
      </Section>
    </>
  )
}
