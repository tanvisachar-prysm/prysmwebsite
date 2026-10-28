import { Img, Photo } from '../components/Img'
import { Zoom } from '../components/Lightbox'
import { ButtonLink, Buttons, Eyebrow, HeroGrid, Lede, Section, SectionHead, Split, Stack, TextLink, Wrap } from '../components/ui'
import { shotClass } from '../utils/styles'
import { cx } from '../utils/cx'
import { useSEO } from '../utils/useSEO'
import { PAGES } from '../utils/navigation'

const PRI_IMG_FIXED = 'w-auto max-h-[340px] max-xl:max-h-[320px]'

const priorities = [
  {
    tag: '01 / IDENTIFY',
    title: 'Find opportunities earlier.',
    text: 'Use clinical and prospect information to identify patients for fundraising review.',
    src: '/shots/p-identify4.png',
    alt: 'PRYSM dashboard of specialties with high-propensity patients and average model score',
    card: 'bg-[linear-gradient(160deg,var(--pri-1a),var(--pri-1b))]',
    frame: 'items-center min-h-[260px]',
    img: 'w-full',
  },
  {
    tag: '02 / ENGAGE',
    title: 'Strengthen physician referrals.',
    text: 'Capture physician referrals, coordinate follow-up, and report outcomes.',
    src: '/shots/p-engage4.png',
    alt: 'PRYSM chart of referred patients by top referring specialties',
    card: 'bg-[linear-gradient(160deg,var(--pri-2a),var(--pri-2b))]',
    img: PRI_IMG_FIXED,
  },
  {
    tag: '03 / ADVANCE',
    title: 'Manage prospects and follow-up.',
    text: 'Give gift officers a clearer view of prospects, outreach, and next steps.',
    src: '/shots/p-advance4-card.png',
    full: '/shots/p-advance4.png',
    alt: 'PRYSM prospect development list with propensity, last activity, next step and assignment',
    card: 'bg-[linear-gradient(160deg,var(--pri-3a),var(--pri-3b))]',
    img: PRI_IMG_FIXED,
  },
]

const proof = [
  { big: '25', label: 'hospitals currently supported', spot: true },
  { big: '150%', label: 'fundraising growth', note: 'Historical South Division results' },
  { big: '448%', label: 'increase in discovery calls', note: 'Historical South Division results' },
]

export const Home = () => {
  useSEO(null)

  return (
    <>
      <Section variant="hero">
        <HeroGrid>
          <Stack loose>
            <Eyebrow>Healthcare philanthropy technology</Eyebrow>
            <h1>Purpose-built for healthcare philanthropy.</h1>
            <Lede>PRYSM connects clinical insight, physician referrals, and fundraising operations to help health systems identify prospective donors and develop stronger philanthropic relationships.</Lede>
            <Buttons>
              <ButtonLink to={PAGES.demo.to}>Request a Demo →</ButtonLink>
              <ButtonLink to={PAGES.prysm.to} variant="ghost">Explore PRYSM</ButtonLink>
            </Buttons>
            <p className="flex items-center gap-2.5 mt-1.5 text-[.88rem] text-fg-3">
              <i className="inline-block flex-none size-1.5 rounded-full bg-accent"></i>
              Built natively on Salesforce · Designed for health systems
            </p>
          </Stack>
          <div className="relative pr-[34px] pb-14 max-lg:pr-5 max-lg:pb-11">
            <figure className={shotClass}>
              <Img priority className="w-full h-auto" src="/shots/hero-desktop.png" alt="PRYSM Program Performance dashboard showing clinician referrals, introductory contacts, discovery calls, patient qualifications, and charts by service line and quarter" />
            </figure>
            <div
              className="absolute right-0 bottom-0 w-[170px] drop-shadow-[0_24px_40px_rgba(30,15,80,.35)] max-lg:w-[120px]"
              role="img"
              aria-label="PRYSM on a mobile phone, showing program performance with clinician referrals, introductory contacts, discovery calls, and patient qualifications"
            >
              <Img priority className="block w-full" src="/shots/hero-phone.png" alt="" />
            </div>
          </div>
        </HeroGrid>
      </Section>

      <Section variant="band">
        <Wrap>
          <Split>
            <Photo wide src="/img/handshake-clinician.jpg" alt="A foundation professional shaking hands with a clinician" />
            <Stack>
              <Eyebrow>The challenge</Eyebrow>
              <h2>Connecting clinical insight with philanthropy.</h2>
              <Lede>Clinical systems document patient care. Donor systems track giving. PRYSM connects clinical insight with the fundraising work that follows.</Lede>
            </Stack>
          </Split>
        </Wrap>
      </Section>

      <Section className="bg-[linear-gradient(180deg,var(--bg)_0%,var(--pri-bg)_100%)]">
        <Wrap>
          <SectionHead eyebrow="What PRYSM enables" title="One application. Three connected priorities." />
          <div className="grid grid-cols-3 gap-5 max-xl:grid-cols-1">
            {priorities.map((p) => (
              <article
                key={p.tag}
                className={cx(
                  'relative flex flex-col overflow-hidden rounded-xl border border-line transition-[translate,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(40,24,90,.16)]',
                  p.card,
                )}
              >
                <div className="flex flex-col gap-2.5 px-8 pt-8 pb-6">
                  <span className="text-[.75rem] font-semibold tracking-[.1em] uppercase tabular-nums text-fg-3">{p.tag}</span>
                  <h3 className="text-[1.5rem]">{p.title}</h3>
                  <p className="text-fg-2">{p.text}</p>
                </div>
                <Zoom
                  className={cx('flex justify-center mt-auto mx-6 mb-6 overflow-hidden rounded-xl border border-[rgba(20,16,40,.08)] bg-white shadow-[0_10px_30px_rgba(40,24,90,.10)]', p.frame)}
                  imgClassName={cx('h-auto max-w-full object-contain object-left-top', p.img)}
                  src={p.src}
                  full={p.full}
                  alt={p.alt}
                />
              </article>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section variant="dark" className="bg-strands-dark">
        <Wrap>
          <Split top>
            <Stack>
              <Eyebrow>Why PRYSM</Eyebrow>
              <h2>Designed for health system foundations.</h2>
            </Stack>
            <Stack>
              <Lede>PRYSM helps foundations identify opportunities, engage physicians, and manage fundraising activity alongside their existing systems.</Lede>
              <TextLink to={PAGES.prysm.to}>Learn more →</TextLink>
            </Stack>
          </Split>
          <Zoom
            className={cx(shotClass, 'mt-[clamp(32px,5vw,56px)]')}
            imgClassName="w-full h-auto"
            src="/shots/program-performance.png"
            alt="PRYSM Program Performance dashboard showing patients screened, clinician referrals, prospects added, outreach attempts, prospects by month, discovery call outcomes, referrals by service line, and outreach by month"
          />
        </Wrap>
      </Section>

      <Section variant="dark" className="pt-0 bg-[radial-gradient(ellipse_45%_50%_at_8%_110%,rgba(90,110,255,.18),transparent_70%)]!">
        <Wrap>
          <Split top className="mb-10">
            <h2>Proven in healthcare philanthropy</h2>
            <Lede>PRYSM supports Providence philanthropy operations across 25 hospitals. Historical South Division results include 150% fundraising growth and a 448% increase in discovery calls during the reported periods.</Lede>
          </Split>
          <div className="grid grid-cols-3 gap-2 max-proof:grid-cols-1">
            {proof.map(({ big, label, note, spot }) => (
              <div key={label} className={cx('flex flex-col gap-1.5 min-w-0 px-6 py-6.5 rounded-xl border border-white/16 bg-[#1d1a2c]', spot && 'spot-glow spot-fill')}>
                <span className="text-[clamp(2.6rem,5vw,3.8rem)] leading-none tracking-[-.03em] tabular-nums font-medium text-white">{big}</span>
                <span className="font-semibold">{label}</span>
                {note && <small className="text-[length:smaller] text-fg-2">{note}</small>}
              </div>
            ))}
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <Stack className="max-w-[46rem]">
            <h2>About Actionable Insight</h2>
            <Lede>Actionable Insight develops PRYSM for healthcare foundations. We combine purpose-built software with implementation, training, and practical fundraising guidance.</Lede>
          </Stack>
        </Wrap>
      </Section>
    </>
  )
}
