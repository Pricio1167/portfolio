import { personal } from '../data/portfolio'
import { MailIcon, WhatsAppIcon } from './icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Noël Pricio RAKOTO.</strong>
          <span>Étudiant en Génie Logiciel — ESMIA Innovation</span>
        </div>

        <div className="footer-socials">
          <a
            href={personal.email ? `mailto:${personal.email}` : '#'}
            aria-label="Email"
            title="Email"
          >
            <MailIcon size={18} />
          </a>
          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} {personal.fullName}. Conçu & développé
          avec passion.
        </p>
      </div>
    </footer>
  )
}