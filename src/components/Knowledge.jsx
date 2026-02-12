import { motion } from 'framer-motion'
import { HiLightBulb } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'
import { knowledge as knowledgeData } from '../data/portfolioData'

export default function Knowledge() {
  const { language } = useLanguage()
  const isFa = language === 'fa'
  const items = isFa ? knowledgeData.itemsFa : knowledgeData.itemsEn
  const prefix = isFa ? knowledgeData.prefixFa : knowledgeData.prefixEn
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
          {isFa ? knowledgeData.headingFa : knowledgeData.headingEn}
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
              {prefix}
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
