import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const currentYear = new Date().getFullYear()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  const { language } = useLanguage()
  return (
    <footer
      className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Fatemeh Esmailzadeh.{' '}
          {language === 'fa' ? 'کلیه حقوق محفوظ است.' : 'All rights reserved.'}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ftmehsn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/fatemehesm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label={language === 'fa' ? 'بازگشت به بالا' : 'Back to top'}
        >
          <HiArrowUp className="w-5 h-5" aria-hidden="true" />
          {language === 'fa' ? 'بازگشت به بالا' : 'Back to top'}
        </button>
      </div>
    </footer>
  )
}
