import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Img } from '../components/Img'
import { Eyebrow, Lede, Section, Split, Stack, Wrap } from '../components/ui'
import { buttonClass } from '../utils/styles'
import { cx } from '../utils/cx'
import { useSEO } from '../utils/useSEO'

const fields = [
  { id: 'f-name', name: 'name', label: 'Name', placeholder: 'Full name', autoComplete: 'name', required: true },
  { id: 'f-org', name: 'org', label: 'Organization', placeholder: 'Health system or foundation', autoComplete: 'organization', required: true },
  { id: 'f-email', name: 'email', label: 'Work email', placeholder: 'you@organization.org', autoComplete: 'email', type: 'email', required: true },
]

const CONTROL = 'w-full px-3.5 py-3 rounded-md border border-line bg-bg text-fg text-[1rem] focus:outline-2 focus:outline-offset-0 focus:outline-accent focus:border-transparent'

const Field = ({ id, label, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-[.88rem] font-semibold">{label}</label>
    {children}
  </div>
)

export const Demo = () => {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  useSEO('Request a Demo', 'See how PRYSM supports prospect identification, physician referrals, and fundraising operations in your health system.')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    // Netlify form submission handling
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(e.currentTarget)).toString(),
    })
      .then((res) => { if (!res.ok) console.error(`Form submission failed: ${res.status}`) })
      .catch((error) => console.error(error))
      .finally(() => navigate('/thank-you'))
  }

  return (
    <Section variant="hero">
      <Wrap>
        <Split top>
          <Stack loose>
            <Eyebrow>Get in touch</Eyebrow>
            <h1>See PRYSM in action.</h1>
            <Lede>See how PRYSM supports prospect identification, physician referrals, and fundraising operations in your health system.</Lede>
            <figure className="mt-5 max-w-[460px] overflow-hidden rounded-xl shadow-[0_18px_50px_rgba(40,24,90,.12)]">
              <Img priority className="block w-full" src="/img/ex-video.jpg" alt="A woman smiling on a video call" />
            </figure>
          </Stack>
          <form className="flex flex-col gap-4.5 p-[clamp(22px,4vw,40px)] rounded-xl border border-panel-line bg-surface" name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <h2 className="text-[1.35rem] leading-[1.25] font-bold after:content-none">Request a Demo</h2>
            {fields.map(({ id, label, ...input }) => (
              <Field key={id} id={id} label={label}><input id={id} className={CONTROL} {...input} /></Field>
            ))}
            <Field id="f-msg" label="Message">
              <textarea id="f-msg" name="msg" placeholder="Tell us about your program" className={cx(CONTROL, 'min-h-[120px] resize-y')}></textarea>
            </Field>
            <div className="flex flex-wrap gap-3 items-center">
              <button className={buttonClass()} type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Submit Request'}</button>
            </div>
          </form>
        </Split>
      </Wrap>
    </Section>
  )
}
