import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'
import { footer as footerData } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  const { language } = useLanguage()
  const isFa = language === 'fa'
  return (
    <footer
      className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Fatemeh Esmailzadeh. {isFa ? footerData.rightsFa : footerData.rightsEn}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={footerData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={footerData.linkedinUrl}
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
          aria-label={isFa ? footerData.backToTopFa : footerData.backToTopEn}
        >
          <HiArrowUp className="w-5 h-5" aria-hidden="true" />
          {isFa ? footerData.backToTopFa : footerData.backToTopEn}
        </button>
      </div>
    </footer>
  )
}
