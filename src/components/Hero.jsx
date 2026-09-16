import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'
import Reveal from './Reveal'
import { DownloadIcon, MailIcon, MapPinIcon, WhatsAppIcon } from './icons'

function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (!deleting && sub === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && sub === 0) {
      timeout = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }, 10)
    } else {
      timeout = setTimeout(
        () => setSub((s) => s + (deleting ? -1 : 1)),
        deleting ? 35 : 85,
      )
    }

    return () => clearTimeout(timeout)
  }, [sub, deleting, index, words])

  return words[index].slice(0, sub)
}

export default function Hero() {
  const typed = useTypewriter(personal.roles)

  return (
    <section id="home" className="hero">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-content">
        <Reveal>
          <span className="hero-badge">Bonjour, moi c'est</span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero-name">
            RAKOTO Noël <span className="hero-name-accent">Pricio.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero-typing">
            <span className="hero-typing-caret" />
            {typed}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="hero-sub">{personal.status} · {personal.school}</p>
        </Reveal>

        <Reveal delay={400}>
          <p className="hero-location">
            <MapPinIcon size={16} /> {personal.location}
          </p>
        </Reveal>

        <Reveal delay={450}>
          <p className="hero-intro">
            Développeur web & mobile motivé, j'aime transformer des idées en
            solutions utiles — du web à l'IA appliquée.
          </p>
        </Reveal>

        <Reveal delay={550}>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={`/${personal.cvFile}`}
              download={personal.cvDownloadName}
            >
              <DownloadIcon size={18} />
              Télécharger mon CV
            </a>
            <a
              className="btn btn-secondary"
              href={`mailto:${personal.email}`}
            >
              <MailIcon size={18} />
              Me contacter
            </a>
          </div>
        </Reveal>

        <Reveal delay={650}>
          <div className="hero-socials">
            <span className="hero-socials-label">Dispo sur :</span>
            <a
              className="hero-social"
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              className="hero-social"
              href={`mailto:${personal.email}`}
              aria-label="Email"
              title="Email"
            >
              <MailIcon size={20} />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={250} className="hero-avatar-wrap">
        <div className="hero-avatar">
          <img
            src="/profile.jpg"
            alt={`Photo de ${personal.fullName}`}
            className="hero-avatar-img"
          />
        </div>
      </Reveal>
    </section>
  )
}