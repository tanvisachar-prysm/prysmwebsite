import { Photo } from '../components/Img'
import { Badge, Cloud, Doc, UserLock } from '../components/Icons'
import { Lede, Section, Stack, Wrap } from '../components/ui'
import { useSEO } from '../utils/useSEO'

const blocks = [
  [Cloud, 'Salesforce security foundation', 'Salesforce provides authentication, access controls, audit features, and encryption capabilities that support secure operation of PRYSM.'],
  [UserLock, 'PRYSM application controls', 'PRYSM uses role-based and field-level access controls to limit who can view and work with patient, encounter, referral, and fundraising information.'],
  [Doc, 'Healthcare privacy and governance', 'PRYSM supports healthcare privacy requirements through controlled access to patient information, defined user permissions, and auditable activity. These controls help health systems manage sensitive clinical and philanthropic data under their established policies.'],
  [Badge, 'Independent security assurance', 'Actionable Insight completed a SOC 2 Type II examination in December 2025, providing independent assessment of the controls covered by its report.'],
]

export const Security = () => {
  useSEO('Security', 'PRYSM is built natively on Salesforce, giving health systems an enterprise security foundation for sensitive healthcare philanthropy information.')

  return (
    <>
      <Section variant="hero">
        <Wrap>
          <Stack loose className="max-w-[52rem]">
            <h1>Built on Salesforce. Designed for healthcare.</h1>
            <Lede>PRYSM is built natively on Salesforce, giving health systems an enterprise security foundation for managing sensitive healthcare philanthropy information.</Lede>
          </Stack>
          <Photo priority className="mt-10" src="/img/ex-holo.jpg" alt="A hand interacting with a data dashboard" ratio="2.6/1" />
        </Wrap>
      </Section>

      <Section className="pt-0">
        <Wrap>
          <Lede width="measure">Healthcare philanthropy involves sensitive clinical and donor information. PRYSM combines Salesforce enterprise security capabilities with application-level access controls designed for fundraising teams, clinicians, and leadership. The sections below explain how those controls support responsible use of information across the program.</Lede>
        </Wrap>
      </Section>

      <Section variant="dark">
        <Wrap>
          <h2 className="sr-only after:content-none">Security controls</h2>
          <div className="grid grid-cols-2 gap-2 max-tab:grid-cols-1">
            {blocks.map(([Icon, title, text]) => (
              <div className="flex flex-col gap-3 min-w-0 p-7 rounded-xl border border-white/16 bg-[#1d1a2c]" key={title}>
                <span className="grid flex-none place-items-center size-11 rounded-xl bg-accent-soft text-accent"><Icon className="size-5.5" /></span>
                <h3>{title}</h3>
                <p className="text-fg-2">{text}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </Section>
    </>
  )
}
