import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/portfolio'
import Reveal from './Reveal'
import {
  CameraIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  TrashIcon,
  WhatsAppIcon,
} from './icons'

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
  const [photo, setPhoto] = useState(() => {
    try {
      return localStorage.getItem('portfolio-photo') || null
    } catch {
      return null
    }
  })
  const fileInputRef = useRef(null)
  const photoKey = 'portfolio-photo'

  const openPicker = () => fileInputRef.current?.click()

  const onSelectFile = (e) => {
    const file = e.target.files?.[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const MAX = 1100
        const scale = Math.min(1, MAX / Math.max(img.width, img.height))
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        const dataUrl = canvas.toDataURL('image/jpeg', 0.86)
        setPhoto(dataUrl)
        try {
          localStorage.setItem(photoKey, dataUrl)
        } catch {
          /* localStorage plein ou indisponible */
        }
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
    e.target.value = ''
  }

  const removePhoto = () => {
    setPhoto(null)
    try {
      localStorage.removeItem(photoKey)
    } catch {
      /* ignore */
    }
  }

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
          {photo ? (
            <img
              src={photo}
              alt="Photo de RAKOTO Noël Pricio"
              className="hero-avatar-img"
            />
          ) : (
            <span>{personal.initials}</span>
          )}

          <button
            type="button"
            className="hero-avatar-cam"
            onClick={photo ? removePhoto : openPicker}
            aria-label={
              photo ? 'Retirer la photo' : 'Importer une photo de profil'
            }
            title={photo ? 'Retirer la photo' : 'Importer ma photo'}
          >
            {photo ? <TrashIcon size={18} /> : <CameraIcon size={18} />}
          </button>
        </div>

        <p className="hero-avatar-hint">
          {photo
            ? 'Cliquez sur la corbeille pour retirer'
            : 'Cliquez sur l\'appareil photo pour choisir votre image'}
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          aria-hidden="true"
          tabIndex={-1}
          style={{ display: 'none' }}
          onChange={onSelectFile}
        />
      </Reveal>
    </section>
  )
}