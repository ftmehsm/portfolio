import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiGit,
} from 'react-icons/si'
import { HiUserGroup, HiCheckCircle, HiChat, HiClock } from 'react-icons/hi'
import { skills as skillsData } from '../data/portfolioData'

const technicalIcons = [SiHtml5, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiGit]
const softIcons = [HiUserGroup, HiCheckCircle, HiChat, HiClock]

function SkillCard({ name, icon: Icon, index }) {
  return (
    <motion.div
      className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300 group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <span className="text-2xl text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        <Icon aria-hidden="true" />
      </span>
      <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  const { language } = useLanguage()
  const isFa = language === 'fa'
  const technicalSkills = skillsData.technical.map((s, i) => ({
    name: isFa ? s.nameFa : s.nameEn,
    icon: technicalIcons[i],
  }))
  const softSkills = skillsData.soft.map((s, i) => ({
    name: isFa ? s.nameFa : s.nameEn,
    icon: softIcons[i],
  }))
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="skills-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {isFa ? skillsData.headingFa : skillsData.headingEn}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {isFa ? skillsData.technicalLabelFa : skillsData.technicalLabelEn}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {technicalSkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} index={i} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              {isFa ? skillsData.softLabelFa : skillsData.softLabelEn}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <SkillCard key={skill.name} {...skill} index={i + technicalSkills.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
