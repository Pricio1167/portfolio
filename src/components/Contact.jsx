import { contactItems, personal } from '../data/portfolio'
import Reveal from './Reveal'
import {
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './icons'

const itemIcons = {
  whatsapp: WhatsAppIcon,
  email: MailIcon,
  'phone-1': PhoneIcon,
  'phone-2': PhoneIcon,
}

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">
            Restons <span className="section-title-accent">en contact</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="section-subtitle">
            Un projet, un stage, une opportunité ? Je suis ouvert aux échanges
            et disponible pour discuter.
          </p>
        </Reveal>

        <div className="contact-grid">
          {contactItems.map((item, i) => {
            const Icon = itemIcons[item.id]
            return (
              <Reveal key={item.id} delay={i * 90}>
                <a
                  className={`contact-card contact-card-${item.id}`}
                  href={item.href}
                  target={item.id === 'whatsapp' ? '_blank' : undefined}
                  rel={item.id === 'whatsapp' ? 'noreferrer' : undefined}
                >
                  <span className="contact-icon">
                    <Icon size={22} />
                  </span>
                  <span className="contact-info">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                    <span className="contact-hint">{item.hint}</span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200}>
          <div className="contact-download">
            <a
              className="btn btn-primary btn-lg"
              href={`/${personal.cvFile}`}
              download={personal.cvDownloadName}
            >
              <DownloadIcon size={20} />
              Télécharger mon CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}