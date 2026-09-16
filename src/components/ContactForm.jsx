import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { personal } from '../data/portfolio'
import { CheckIcon, MailIcon, SendIcon, SpinnerIcon } from './icons'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = { name: '', email: '', subject: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const isSending = status === 'sending'

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (status !== 'sending') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name.trim()) {
      setStatus('error')
      setError('Merci d\'indiquer votre nom.')
      return
    }
    if (!EMAIL_RE.test(form.email)) {
      setStatus('error')
      setError('Merci d\'indiquer une adresse e-mail valide.')
      return
    }
    if (!form.subject.trim()) {
      setStatus('error')
      setError('Merci d\'indiquer un objet.')
      return
    }
    if (form.message.trim().length < 10) {
      setStatus('error')
      setError('Votre message est trop court (10 caractères minimum).')
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setError(
        'Le service d\'envoi n\'est pas encore configuré. Revenez bientôt !',
      )
      return
    }

    setStatus('sending')
    setError('')

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: personal.email,
          from_name: form.name.trim(),
          reply_to: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        },
        { publicKey: PUBLIC_KEY },
      )
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setError(
        'Une erreur est survenue lors de l\'envoi. Veuillez réessayer dans un instant.',
      )
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-head">
        <span className="contact-form-icon">
          <MailIcon size={20} />
        </span>
        <div>
          <h3 className="contact-form-title">Envoyez-moi un e-mail</h3>
          <p className="contact-form-sub">
            Réponse à {personal.email}
          </p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="cf-name">
            Votre nom
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            className="contact-form-input"
            placeholder="Ex : Jean Rakoto"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>

        <div className="contact-form-field">
          <label className="contact-form-label" htmlFor="cf-email">
            Votre e-mail <span className="required">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            className="contact-form-input"
            placeholder="vous@exemple.com"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="cf-subject">
          Objet
        </label>
        <input
          id="cf-subject"
          name="subject"
          type="text"
          className="contact-form-input"
          placeholder="Ex : Proposition de stage"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form-field">
        <label className="contact-form-label" htmlFor="cf-message">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          className="contact-form-input contact-form-textarea"
          placeholder="Dites-moi en quelques mots ce qui vous amène…"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary contact-form-submit"
        disabled={isSending}
      >
        {isSending ? (
          <>
            <SpinnerIcon size={18} />
            Envoi en cours…
          </>
        ) : (
          <>
            <SendIcon size={18} />
            Envoyer le message
          </>
        )}
      </button>

      {status === 'error' && (
        <p className="contact-form-msg contact-form-msg-error">{error}</p>
      )}

      {status === 'success' && (
        <p className="contact-form-msg contact-form-msg-success">
          <CheckIcon size={18} />
          Message envoyé avec succès ! Je vous répondrai très vite.
        </p>
      )}
    </form>
  )
}