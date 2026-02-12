import { motion } from 'framer-motion'
import { HiOfficeBuilding } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'
import { experiences, experienceSection } from '../data/portfolioData'

export default function Experience() {
  const { language } = useLanguage()
  const lang = language === 'fa' ? 'fa' : 'en'

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="experience-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HiOfficeBuilding className="w-8 h-8 text-gray-600 dark:text-gray-400" aria-hidden="true" />
          {language === 'fa' ? experienceSection.headingFa : experienceSection.headingEn}
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((job, idx) => (
            <motion.article
              key={job.companyNameEn}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {job.link ? (
                <>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline underline-offset-2"
                  >
                    {lang === 'fa' ? job.companyNameFa : job.companyNameEn}
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">({job.link})</span>
                </>
              ) : (
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  {lang === 'fa' ? job.companyNameFa : job.companyNameEn}
                </span>
              )}
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                {(lang === 'fa' ? job.bulletsFa : job.bulletsEn).map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
