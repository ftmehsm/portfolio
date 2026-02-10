import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()
  const taglineEn =
    'Results-driven Front End Developer with 1 year of hands-on experience building responsive, high-performance user interfaces with React.js.'
  const taglineFa =
    'توسعه‌دهنده فرانت‌اند با یک سال تجربه در شرکت B2B نرم‌افزاری. مسلط به React.js برای ساخت صفحات وب سریع و زیبا که روی موبایل و کامپیوتر عالی کار می‌کنه. از ابزارهای هوش مصنوعی جدید استفاده می‌کنم تا کد بهتر و سریع‌تر بنویسم. دوست دارم رابط کاربری بسازم که کاربر راحت باشه و به شرکت کمک کنه بهتر کار کنه.'

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200/30 to-transparent dark:from-gray-700/20 to-transparent -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          FATEMEH ESMAILZADEH
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {language === 'fa' ? 'توسعه‌دهنده فرانت‌اند' : 'FRONT END DEVELOPER'}
        </motion.p>
        {/* <motion.p
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {language === 'fa' ? taglineFa : taglineEn}
        </motion.p> */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            aria-label={language === 'fa' ? 'دانلود رزومه PDF' : 'Download resume PDF'}
          >
            {language === 'fa' ? 'دانلود رزومه' : 'Download Resume'}
          </a>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-colors"
            aria-label={language === 'fa' ? 'رفتن به بخش تماس' : 'Scroll to contact section'}
          >
            {language === 'fa' ? 'تماس با من' : 'Contact Me'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
