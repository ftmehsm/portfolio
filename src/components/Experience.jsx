import { motion } from 'framer-motion'
import { HiOfficeBuilding } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const bulletsEn = [
  '1 year experience in adak company',
  'Adak, a B2B software provider specializing in integrated enterprise solutions for mid-sized and large businesses.',
  'Develops ERP, CRM, and BPA (Business Process Automation) applications to streamline operations and workflows.',
  'Delivers cloud/hybrid platforms for unified data management, process optimization, and digital transformation.',
  'Targets B2B clients with modular tools to enhance efficiency, real-time insights, and system integrations.',
]

const bulletsFa = [
  'یک سال سابقه کار در شرکت آداک',
  'آداک، ارائه‌دهنده نرم‌افزارهای سازمانی B2B و راهکارهای یکپارچه برای کسب‌وکارهای متوسط و بزرگ است.',
  'توسعه‌دهنده سیستم‌های ERP، CRM و BPA برای بهینه‌سازی فرایندها و خودکارسازی جریان‌های کاری.',
  'ارائه‌دهنده پلتفرم‌های ابری و هیبریدی برای یکپارچه‌سازی داده‌ها، بهبود فرایندها و تحول دیجیتال.',
  'تمرکز بر مشتریان سازمانی با ابزارهای ماژولار برای افزایش بهره‌وری، بینش آنی و یکپارچگی سامانه‌ها.',
]

export default function Experience() {
  const { language } = useLanguage()
  const bullets = language === 'fa' ? bulletsFa : bulletsEn
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
          {language === 'fa' ? 'تجربه کاری' : 'Experience'}
        </motion.h2>
        <motion.article
          className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="https://adak.ir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline underline-offset-2"
          >
            {language === 'fa' ? 'شرکت آداک' : 'Adak company'}
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">(https://adak.ir/)</span>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
            {bullets.map((item, i) => (
              <li key={i} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  )
}
