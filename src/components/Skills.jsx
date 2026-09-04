import { skillGroups } from '../data/portfolio'
import Reveal from './Reveal'
import {
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  DevicesIcon,
  GlobeIcon,
  UsersIcon,
  WrenchIcon,
} from './icons'

const icons = {
  code: CodeIcon,
  devices: DevicesIcon,
  database: DatabaseIcon,
  wrench: WrenchIcon,
  users: UsersIcon,
  cpu: CpuIcon,
  globe: GlobeIcon,
}

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <Reveal>
          <h2 className="section-title">
            Mes <span className="section-title-accent">compétences</span>
          </h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon]
            return (
              <Reveal key={group.title} delay={i * 120}>
                <div className="skill-group">
                  <div className="skill-group-head">
                    <span className="skill-group-icon">
                      <Icon size={22} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-chips">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}