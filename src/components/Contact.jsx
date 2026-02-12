import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { contact as contactData } from '../data/portfolioData'

const iconMap = { email: HiMail, github: FaGithub, linkedin: FaLinkedin }

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const { language } = useLanguage()
  const isFa = language === 'fa'
  const contactInfo = contactData.info.map((item) => ({
    key: item.key,
    label: isFa ? item.labelFa : item.labelEn,
    value: item.value,
    href: item.href,
    icon: iconMap[item.key],
  }))
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      setErrorMessage(isFa ? contactData.form.errorConfigFa : contactData.form.errorConfigEn)
      return
    }
    setStatus('sending')
    setErrorMessage('')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      const fallback = isFa ? contactData.form.errorFallbackFa : contactData.form.errorFallbackEn
      setErrorMessage(err.text || err.message || fallback)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="contact-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {isFa ? contactData.headingFa : contactData.headingEn}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map(({ key, label, value, href, icon: Icon }) => (
              <a
                key={key}
                href={href}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                aria-label={`${label}: ${value}`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span>{value}</span>
              </a>
            ))}
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {isFa ? contactData.form.nameLabelFa : contactData.form.nameLabelEn}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder={isFa ? contactData.form.namePlaceholderFa : contactData.form.namePlaceholderEn}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {isFa ? contactData.form.emailLabelFa : contactData.form.emailLabelEn}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder={isFa ? contactData.form.emailPlaceholderFa : contactData.form.emailPlaceholderEn}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {isFa ? contactData.form.messageLabelFa : contactData.form.messageLabelEn}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                placeholder={isFa ? contactData.form.messagePlaceholderFa : contactData.form.messagePlaceholderEn}
                aria-required="true"
              />
            </div>
            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400" role="status">
                {isFa ? contactData.form.successFa : contactData.form.successEn}
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending'
                ? (isFa ? contactData.form.sendingFa : contactData.form.sendingEn)
                : (isFa ? contactData.form.sendFa : contactData.form.sendEn)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
