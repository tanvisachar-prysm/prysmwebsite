import { ButtonLink, Buttons, Eyebrow, Lede, Section, Stack, Wrap } from '../components/ui'
import { useSEO } from '../utils/useSEO'

export const ThankYou = () => {
  useSEO(
    'Request received',
    'Thank you for contacting PRYSM. We have received your request and will follow up shortly.',
    { noindex: true }
  )

  return (
    <Section variant="hero">
      <Wrap>
        <Stack loose className="max-w-[46rem]">
          <Eyebrow>Thank you</Eyebrow>
          <h1>Request received.</h1>
          <Lede>Thank you for your interest in PRYSM. A member of our team will review your request and follow up to schedule your demo.</Lede>
          <Buttons>
            <ButtonLink to="/">Return to Home</ButtonLink>
            <ButtonLink to="/prysm" variant="ghost">Explore PRYSM</ButtonLink>
          </Buttons>
        </Stack>
      </Wrap>
    </Section>
  )
}
