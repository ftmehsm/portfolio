import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiExternalLink } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'
import { projects as projectsData } from '../data/portfolioData'

export default function Projects() {
  const { language } = useLanguage()
  const isFa = language === 'fa'
  const projects = isFa ? projectsData.listFa : projectsData.listEn
  const linkLabelFallback = isFa ? projectsData.viewOnGithubFa : projectsData.viewOnGithubEn
  const liveDemoLabel = isFa ? projectsData.liveDemoFa : projectsData.liveDemoEn
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="projects-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {isFa ? projectsData.headingFa : projectsData.headingEn}
        </motion.h2>
        <div className="space-y-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`project-content-${index}`}
                id={`project-toggle-${index}`}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                  {project.subtitle && (
                    <span className="font-normal text-gray-500 dark:text-gray-400">
                      {' '}
                      {project.subtitle}
                    </span>
                  )}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-gray-500 dark:text-gray-400"
                >
                  <HiChevronDown className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`project-content-${index}`}
                    role="region"
                    aria-labelledby={`project-toggle-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-4 sm:p-5 pt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline"
                          >
                            {liveDemoLabel}
                            <HiExternalLink className="w-4 h-4" aria-hidden="true" />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline"
                          >
                            {project.linkLabel != null ? project.linkLabel : linkLabelFallback}
                            <HiExternalLink className="w-4 h-4" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                      <p className="mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
