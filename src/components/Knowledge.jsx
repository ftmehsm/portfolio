import { motion } from 'framer-motion'
import { HiLightBulb } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const itemsEn = [
  'json-server library',
  'storybook',
  'axios library',
  'redux and redux-toolkit',
  'graphQL',
  'react-query',
  'daisyUI',
  'swiper',
  'sass',
]

const itemsFa = [
  'کتابخانه json-server',
  'storybook',
  'کتابخانه axios',
  'redux و redux-toolkit',
  'graphQL',
  'react-query',
  'daisyUI',
  'swiper',
  'sass',
]

export default function Knowledge() {
  const { language } = useLanguage()
  const items = language === 'fa' ? itemsFa : itemsEn
  return (
    <section
      id="knowledge"
      className="py-20 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="knowledge-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="knowledge-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HiLightBulb className="w-8 h-8 text-gray-600 dark:text-gray-400" aria-hidden="true" />
          {language === 'fa' ? 'سایر دانش‌ها' : 'Other Knowledges'}
        </motion.h2>
        <motion.ul
          className="grid sm:grid-cols-2 gap-2 list-disc list-inside text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {items.map((item) => (
            <li key={item} className="leading-relaxed">
              {language === 'fa' ? 'تجربه کار با ' : 'Have experience with '}
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
