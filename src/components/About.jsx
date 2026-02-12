import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { about } from '../data/portfolioData'

export default function About() {
  const { language } = useLanguage()
  const isFa = language === 'fa'
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          {isFa ? about.headingFa : about.headingEn}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isFa ? about.profileFa : about.profileEn}
        </motion.p>
      </div>
    </section>
  )
}
