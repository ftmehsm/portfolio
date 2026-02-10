import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const profileEn =
  'Results-driven Front End Developer with 1 year of hands-on experience in a B2B SaaS environment, specializing in React.js to build responsive, high-performance user interfaces. Skilled at integrating modern AI-powered tools to streamline development workflows, enhance code quality, and accelerate feature delivery. Passionate about creating intuitive user experiences that drive business value.'

const profileFa =
  'توسعه‌دهنده فرانت‌اند نتیجه‌گرا با یک سال تجربه کاری در محیط نرم‌افزارهای سازمانی B2B، مسلط به React.js برای ساخت رابط‌های کاربری واکنش‌گرا و پرکارایی. آشنا با استفاده از ابزارهای هوشمند و مبتنی بر هوش مصنوعی برای بهبود فرایند توسعه، افزایش کیفیت کد و تسریع ارائه قابلیت‌ها. علاقه‌مند به خلق تجربه‌های کاربری شهودی که برای کسب‌وکار ارزش ایجاد می‌کنند.'

export default function About() {
  const { language } = useLanguage()
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          {language === 'fa' ? 'درباره من / پروفایل' : 'About / Profile'}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {language === 'fa' ? profileFa : profileEn}
        </motion.p>
      </div>
    </section>
  )
}
