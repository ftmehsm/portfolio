import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiExternalLink } from 'react-icons/hi'
import { useLanguage } from '../context/LanguageContext'

const projectsEn = [
  {
    title: 'B2B website',
    link: 'https://adak.ir/',
    linkLabel: 'adak.ir',
    description:
      '1 year experience in adak b2b company, a b2b website for company customers, using next.js and typescript, using storybook to make components.',
    tech: ['Next.js', 'TypeScript', 'Storybook'],
  },
  {
    title: 'Social media web app',
    subtitle: '(fullstack project)',
    link: 'https://github.com/ftmehsm/Social-media-app',
    linkLabel: 'View on GitHub',
    description:
      'Fullstack social media application similar to Twitter, built with Next.js and TypeScript on both frontend and backend, using Prisma ORM with a PostgreSQL database.',
    tech: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    title: 'Blog GraphQL with React js',
    subtitle: '(simple practical project)',
    link: 'https://github.com/ftmehsm/blog-graphql',
    linkLabel: 'View on GitHub',
    description:
      'Using hygraph to make a database, using MUI to design the project, use graphQL.',
    tech: ['React.js', 'Hygraph', 'GraphQL', 'MUI'],
  },
  {
    title: 'Divar Website',
    subtitle: '(final project of react tutorial)',
    link: 'https://github.com/ftmehsm/divar',
    linkLabel: 'View on GitHub',
    description:
      'Using real backend and have experience with swagger, using authorization and authentication concept (with cookies), using react-query, use React-Hook-Form, use TailwindCss for styles, use Context for managing states.',
    tech: ['React', 'Swagger', 'react-query', 'React-Hook-Form', 'TailwindCss', 'Context'],
  },
  {
    title: 'Shopping Cart with React js',
    subtitle: '(simple practical project)',
    link: 'https://github.com/ftmehsm/shoppingCart',
    linkLabel: 'View on GitHub',
    description:
      'Using Hooks like useState, useEffect, ..., using Routing (react-router-dom 6), using Redux-toolkit to manage states.',
    tech: ['React.js', 'react-router-dom 6', 'Redux-toolkit'],
  },
]

const projectsFa = [
  {
    title: 'سایت B2B',
    link: 'https://adak.ir/',
    linkLabel: 'adak.ir',
    description:
      'یک سال تجربه در شرکت B2B آداک، توسعه وب‌سایت B2B برای مشتریان سازمانی با استفاده از Next.js و TypeScript و استفاده از Storybook برای ساخت کامپوننت‌ها.',
    tech: ['Next.js', 'TypeScript', 'Storybook'],
  },
  {
    title: 'اپلیکیشن شبکه اجتماعی',
    subtitle: '(پروژه فول‌استک)',
    link: 'https://github.com/ftmehsm/Social-media-app',
    linkLabel: 'مشاهده در گیت‌هاب',
    description:
      'اپلیکیشن شبکه اجتماعی شبیه توییتر، پیاده‌سازی شده به صورت فول‌استک با Next.js و TypeScript در فرانت‌اند و بک‌اند، استفاده از Prisma ORM و دیتابیس PostgreSQL.',
    tech: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL'],
  },
  {
    title: 'وبلاگ GraphQL با React',
    subtitle: '(پروژه تمرینی ساده)',
    link: 'https://github.com/ftmehsm/blog-graphql',
    linkLabel: 'مشاهده در گیت‌هاب',
    description:
      'استفاده از Hygraph برای ساخت دیتابیس، استفاده از MUI برای طراحی رابط کاربری و استفاده از GraphQL برای دریافت داده‌ها.',
    tech: ['React.js', 'Hygraph', 'GraphQL', 'MUI'],
  },
  {
    title: 'وبسایت دیوار',
    subtitle: '(پروژه نهایی آموزش React)',
    link: 'https://github.com/ftmehsm/divar',
    linkLabel: 'مشاهده در گیت‌هاب',
    description:
      'استفاده از بک‌اند واقعی و Swagger، پیاده‌سازی احراز هویت و مجوز با کوکی، استفاده از React Query، React Hook Form، TailwindCss و Context برای مدیریت حالت.',
    tech: ['React', 'Swagger', 'react-query', 'React-Hook-Form', 'TailwindCss', 'Context'],
  },
  {
    title: 'سبد خرید با React',
    subtitle: '(پروژه تمرینی ساده)',
    link: 'https://github.com/ftmehsm/shoppingCart',
    linkLabel: 'مشاهده در گیت‌هاب',
    description:
      'استفاده از هوک‌هایی مثل useState و useEffect، استفاده از مسیریابی با react-router-dom 6 و مدیریت وضعیت با Redux Toolkit.',
    tech: ['React.js', 'react-router-dom 6', 'Redux-toolkit'],
  },
]

export default function Projects() {
  const { language } = useLanguage()
  const projects = language === 'fa' ? projectsFa : projectsEn
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800/30 border-t border-gray-200 dark:border-gray-800"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="projects-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {language === 'fa' ? 'پروژه‌ها' : 'Projects'}
        </motion.h2>
        <div className="space-y-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`project-content-${index}`}
                id={`project-toggle-${index}`}
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                  {project.subtitle && (
                    <span className="font-normal text-gray-500 dark:text-gray-400">
                      {' '}
                      {project.subtitle}
                    </span>
                  )}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-gray-500 dark:text-gray-400"
                >
                  <HiChevronDown className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`project-content-${index}`}
                    role="region"
                    aria-labelledby={`project-toggle-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-4 sm:p-5 pt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:underline mb-2"
                        >
                          {project.linkLabel || project.link}
                          <HiExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                      <p className="mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
