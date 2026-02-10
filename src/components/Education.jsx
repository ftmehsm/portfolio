import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const educationEn =
  "Bachelor's degree in computer engineering, Islamic Azad University, Science And Research Branch, 2020-2024."

const educationFa =
  'کارشناسی مهندسی کامپیوتر، دانشگاه آزاد اسلامی واحد علوم و تحقیقات، 1400-1404.'

export default function Education() {
  const { language } = useLanguage()
  return (
    <section
      id="education"
      className="py-20 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="education-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <HiAcademicCap className="w-8 h-8 text-gray-600 dark:text-gray-400" aria-hidden="true" />
          {language === 'fa' ? 'تحصیلات' : 'Education'}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {language === 'fa' ? educationFa : educationEn}
        </motion.p>
      </div>
    </section>
  )
}
