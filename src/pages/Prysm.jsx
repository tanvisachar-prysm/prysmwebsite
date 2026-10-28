import { Link } from 'react-router-dom'
import { Photo } from '../components/Img'
import { Zoom } from '../components/Lightbox'
import { SixCapabilities } from '../components/SixCapabilities'
import { CompareTable } from '../components/CompareTable'
import { Eyebrow, Lede, Prose, Pull, Section, SectionHead, Split, Stack, Wrap } from '../components/ui'
import { shotClass } from '../utils/styles'
import { cx } from '../utils/cx'
import { useSEO } from '../utils/useSEO'

export const Prysm = () => {
  useSEO('About PRYSM', 'PRYSM is an enterprise application purpose-built for healthcare philanthropy, connecting clinical intelligence, prospect development, and clinician engagement.')

  return (
    <>
      <Section variant="hero">
        <Wrap>
          <Split top>
            <h1>About PRYSM</h1>
            <Prose>
              <p>PRYSM is an enterprise application purpose-built for healthcare philanthropy. It brings together clinical and philanthropic data with wealth, affinity, and propensity intelligence to give health system foundations a more complete view of philanthropic opportunity.</p>
              <p>For philanthropy and clinical leadership, PRYSM shows where that opportunity exists across the health system. Dashboards reveal which departments serve the greatest concentrations of patients with major-gift potential, which physicians have the strongest philanthropic patient panels, and how opportunity is distributed across service lines and facilities. Leadership can use this information to focus fundraising resources and physician engagement.</p>
            </Prose>
          </Split>
          <Zoom className={cx(shotClass, 'mt-[clamp(32px,5vw,56px)]')} imgClassName="w-full h-auto" src="/shots/workspace2.png" alt="PRYSM gift officer workspace with assigned patients, patient record, visit chart, top visit counts, integrated calling, and activity logging" />
        </Wrap>
      </Section>

      <Section className="pt-0">
        <Wrap>
          <Prose width="wide">
            <p>For frontline teams, PRYSM turns that intelligence into day-to-day fundraising activity. Gift officers can identify and prioritize prospective donors, review the clinical and philanthropic context of each relationship, and determine where to focus outreach. Physician referrals, prospect queues, portfolio management, communications, activity tracking, and automation support work from identification through qualification and cultivation.</p>
            <p>PRYSM also makes the program measurable. Leadership can compare engagement strategies, monitor referrals and qualification activity, and assess results across physicians, departments, and portfolios. Teams can see which approaches are working and adjust their efforts accordingly.</p>
            <p>Built natively on Salesforce, PRYSM works alongside existing healthcare systems rather than replacing them. The electronic medical record remains the system of record for clinical care, and the donor management system remains the system of record for gifts. PRYSM connects these environments and supports specialized tools for screening, communications, and analytics as program needs evolve.</p>
          </Prose>
        </Wrap>
      </Section>

      <Section className="pt-[clamp(56px,7vw,88px)]">
        <Wrap>
          <SectionHead center title="One connected environment for healthcare philanthropy." lede="PRYSM connects clinical intelligence, prospect development, and clinician engagement with existing donor management systems and a flexible ecosystem of specialized technologies." />
          <Zoom
            className="mx-auto mt-2 max-w-[760px]"
            imgClassName="block w-full h-auto mix-blend-multiply"
            src="/img/wheel5.png"
            alt="PRYSM at the center, built on Salesforce, with six functions: identify prospects, engage clinicians, develop pipeline, automate workflows, measure performance, and integrate data sources. Clinical systems and external data are combined, enriched, and automated in PRYSM; qualified prospects and data pass to the donor management system. Fundraising teams and leadership use PRYSM."
          />
        </Wrap>
      </Section>

      <Section className="pt-0 pb-16">
        <Wrap>
          <Photo src="/img/ex-conf.jpg" alt="A fundraising team in discussion around a conference table" ratio="2.4/1" focus="center 40%" />
        </Wrap>
      </Section>

      <SixCapabilities />

      <Section>
        <Wrap>
          <Split top>
            <Stack>
              <Eyebrow>03 / The PRYSM difference</Eyebrow>
              <h2>Built to grow your pipeline. Designed to work with your donor CRM.</h2>
            </Stack>
            <Prose>
              <p>Traditional donor management systems focus on constituent relationships, giving history, and fundraising activity. Even donor management systems with integrated patient modules extend access to clinical information without fundamentally changing their primary purpose: donor management.</p>
              <Pull>PRYSM was built for a different purpose: prospect development, pipeline growth, and clinician engagement.</Pull>
              <p>By separating prospect identification and qualification from traditional donor management, PRYSM enables healthcare organizations to dedicate specialized technology, workflows, and resources to expanding their philanthropic pipelines.</p>
              <p>PRYSM combines clinical intelligence, clinician-centric fundraising workflows, automated screening, multi-record updates, and high-volume prospect management to help organizations identify, qualify, and advance prospective grateful patients and other philanthropic prospects across complex healthcare communities.</p>
              <p>Working alongside existing donor management systems, PRYSM creates a more complete solution for healthcare philanthropy—one designed to develop new opportunities while preserving the systems organizations already rely on to manage donor relationships, gifts, and stewardship.</p>
            </Prose>
          </Split>
        </Wrap>
      </Section>

      <Section variant="band">
        <Wrap>
          <SectionHead center title="Two specialized applications. One connected fundraising operation." />
          <Zoom
            className="mx-auto max-w-[1040px] p-5 rounded-2xl border border-[rgba(20,16,40,.07)] bg-white shadow-[0_18px_50px_rgba(40,24,90,.08)]"
            imgClassName="block w-full h-auto"
            src="/img/prysm-vs-crm.png"
            alt="PRYSM, for prospect and pipeline development: clinical intelligence, prospect identification, clinician engagement, qualification and prioritization, pipeline development. Plus donor CRM, for donor relationship management: constituent records, gift management, campaign administration, stewardship, donor history and reporting."
          />
          <p className="mt-6 text-center text-[1.05rem] text-fg-2"><b className="text-fg">Together:</b> specialized pipeline development + established donor management.</p>
        </Wrap>
      </Section>

      <CompareTable />

      <Section>
        <Wrap>
          <Split top className="mb-[clamp(36px,5vw,56px)]">
            <Stack>
              <Eyebrow>04 / Flexibility &amp; scalability</Eyebrow>
              <h2>Built to evolve with your organization.</h2>
            </Stack>
            <Prose>
              <p>Healthcare philanthropy programs evolve, and the technologies supporting them should evolve too.</p>
              <p>PRYSM's Salesforce-native architecture supports a flexible ecosystem of specialized technologies for wealth intelligence, communications, analytics, and enterprise integration. Organizations can introduce new capabilities, change selected providers, and expand their operations over time while maintaining PRYSM as their core prospect development application.</p>
            </Prose>
          </Split>
          <Split>
            <Stack>
              <h3 className="text-[clamp(1.4rem,2.4vw,1.8rem)] leading-[1.2]">Flexible by design. Scalable by architecture.</h3>
              <p className="text-fg-2">PRYSM supports growth across hospitals, departments, fundraising teams, and large patient and encounter datasets. Its configurable workflows and ecosystem approach allow organizations to evolve their programs without replacing the underlying application as their needs change.</p>
              <Pull>Choose the capabilities you need today. Expand and adapt as your program grows.</Pull>
            </Stack>
            <Zoom className={shotClass} imgClassName="w-full h-auto" src="/shots/opportunity-leadership.png" alt="PRYSM Philanthropic Opportunity dashboard showing patients with philanthropic potential by department, physician, service line, and facility" />
          </Split>
        </Wrap>
      </Section>

      <Section className="bg-strands-band [--fg:#fff] [--fg-2:#ece8f6] **:text-white! [&_a]:text-[#dcd2ff]!">
        <Wrap>
          <Split top>
            <Lede strong>PRYSM implementation includes integration, configuration, training, and go-live support.</Lede>
            <Lede>PRYSM combines the application, a practical <Link className="underline" to="/playbook">Frontline Playbook</Link>, and ongoing support. Together, they give fundraising teams the tools, training, and guidance to put clinical insight into action.</Lede>
          </Split>
        </Wrap>
      </Section>
    </>
  )
}
