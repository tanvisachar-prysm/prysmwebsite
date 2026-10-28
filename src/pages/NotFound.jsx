import { ButtonLink, Buttons, Eyebrow, Lede, Section, Stack, Wrap } from '../components/ui'
import { useSEO } from '../utils/useSEO'

export const NotFound = () => {
  useSEO('Page not found', undefined, { noindex: true })

  return (
    <Section variant="hero">
      <Wrap>
        <Stack loose className="max-w-[46rem]">
          <Eyebrow>Error 404</Eyebrow>
          <h1>Page not found</h1>
          <Lede>The page you are looking for doesn't exist or has been moved. Verify the URL or return to the homepage.</Lede>
          <Buttons><ButtonLink to="/">Go back home</ButtonLink></Buttons>
        </Stack>
      </Wrap>
    </Section>
  )
}
