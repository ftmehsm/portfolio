import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const contactInfoEn = [
  { label: 'Email', value: 'ftmbesinuss@gmail.com', href: 'mailto:ftmbesinuss@gmail.com', icon: HiMail },
  { label: 'GitHub', value: 'github.com/ftmehsn', href: 'https://github.com/ftmehsn', icon: FaGithub },
  { label: 'LinkedIn', value: 'linkedin.com/in/fatemehesm', href: 'https://www.linkedin.com/in/fatemehesm', icon: FaLinkedin },
]

const contactInfoFa = [
  { label: 'ایمیل', value: 'ftmbesinuss@gmail.com', href: 'mailto:ftmbesinuss@gmail.com', icon: HiMail },
  { label: 'گیت‌هاب', value: 'github.com/ftmehsn', href: 'https://github.com/ftmehsn', icon: FaGithub },
  { label: 'لینکدین', value: 'linkedin.com/in/fatemehesm', href: 'https://www.linkedin.com/in/fatemehesm', icon: FaLinkedin },
]

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const { language } = useLanguage()
  const contactInfo = language === 'fa' ? contactInfoFa : contactInfoEn
  const formRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus('error')
      setErrorMessage(
        language === 'fa'
          ? 'ایمیل پیکربندی نشده است. مقادیر VITE_EMAILJS_* را در فایل .env تنظیم کنید.'
          : 'Email is not configured. Add VITE_EMAILJS_* keys to .env',
      )
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
      const fallback = language === 'fa' ? 'ارسال ناموفق بود. لطفاً دوباره تلاش کنید.' : 'Failed to send. Please try again.'
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
          {language === 'fa' ? 'تماس' : 'Contact'}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
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
                {language === 'fa' ? 'نام' : 'Name'}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder={language === 'fa' ? 'نام شما' : 'Your name'}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {language === 'fa' ? 'ایمیل' : 'Email'}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder={language === 'fa' ? 'ایمیل شما' : 'your@email.com'}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {language === 'fa' ? 'پیام' : 'Message'}
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                placeholder={language === 'fa' ? 'پیام شما' : 'Your message'}
                aria-required="true"
              />
            </div>
            {status === 'success' && (
              <p className="text-sm text-green-600 dark:text-green-400" role="status">
                {language === 'fa' ? 'ممنون! پیام شما با موفقیت ارسال شد.' : 'Thank you! Your message has been sent.'}
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
                ? language === 'fa'
                  ? 'در حال ارسال…'
                  : 'Sending…'
                : language === 'fa'
                ? 'ارسال پیام'
                : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
