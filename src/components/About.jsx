import {
  aboutInfo,
  aboutMetrics,
  diplomas,
  interests,
  personal,
  qualities,
} from '../data/portfolio'
import Reveal from './Reveal'
import { DownloadIcon, GraduationIcon } from './icons'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">
            À propos <span className="section-title-accent">de moi</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-bio">
            {personal.profile.map((paragraph) => (
              <p key={paragraph} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="about-block">
              <h4 className="about-block-title">Mes qualités</h4>
              <div className="skill-chips">
                {qualities.map((quality) => (
                  <span key={quality} className="skill-chip">
                    {quality}
                  </span>
                ))}
              </div>
            </div>

            <div className="about-block">
              <h4 className="about-block-title">Centres d'intérêt</h4>
              <div className="interest-list">
                {interests.map((interest) => (
                  <span key={interest} className="interest-item">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <a
              className="btn btn-primary"
              href={`/${personal.cvFile}`}
              download={personal.cvDownloadName}
            >
              <DownloadIcon size={18} />
              Télécharger mon CV (PDF)
            </a>
          </Reveal>

          <Reveal delay={150} className="about-side">
            <div className="about-metrics">
              {aboutMetrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="about-info-card">
              <h4 className="about-block-title">Fiche d'identité</h4>
              {aboutInfo.map((info) => (
                <div key={info.label} className="about-info-row">
                  <span className="about-info-label">{info.label}</span>
                  <span className="about-info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <h3 className="sub-section-title">
            <GraduationIcon size={20} />
            Diplômes & certificats
          </h3>
        </Reveal>

        <div className="diplomas">
          {diplomas.map((diploma, i) => (
            <Reveal key={diploma.title} delay={i * 90}>
              <div className="diploma-card">
                <div className="diploma-year">{diploma.year}</div>
                <h4 className="diploma-title">{diploma.title}</h4>
                <p className="diploma-detail">{diploma.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}