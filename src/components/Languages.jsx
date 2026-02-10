import { motion } from 'framer-motion'
import { HiTranslate } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

export default function Languages() {
  const { language } = useLanguage()
  return (
    <section
      id="languages"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800"
      aria-labelledby="languages-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="languages-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HiTranslate className="w-8 h-8 text-gray-600 dark:text-gray-400" aria-hidden="true" />
          {language === 'fa' ? 'زبان‌ها' : 'Languages'}
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium">
            {language === 'fa' ? 'انگلیسی — مسلط' : 'English — Fluent'}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
