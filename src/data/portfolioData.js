/**
 * Central portfolio data (EN/FA).
 * Components import this and use useLanguage() to pick en or fa.
 */

// ─── Navigation ─────────────────────────────────────────────────────────────
export const navLinks = {
  en: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'languages', label: 'Languages' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'contact', label: 'Contact' },
  ],
  fa: [
    { id: 'hero', label: 'خانه' },
    { id: 'about', label: 'درباره من' },
    { id: 'skills', label: 'مهارت‌ها' },
    { id: 'education', label: 'تحصیلات' },
    { id: 'languages', label: 'زبان‌ها' },
    { id: 'experience', label: 'تجربه کاری' },
    { id: 'projects', label: 'پروژه‌ها' },
    { id: 'knowledge', label: 'دانش‌ دیگر' },
    { id: 'contact', label: 'تماس' },
  ],
}

// ─── Hero ───────────────────────────────────────────────────────────────────
export const hero = {
  titleEn: 'FRONT END DEVELOPER',
  titleFa: 'توسعه‌دهنده فرانت‌اند',
  taglineEn:
    'Results-driven Front End Developer with 1 year of hands-on experience building responsive, high-performance user interfaces with React.js.',
  taglineFa:
    'برنامه‌نویس فرانت‌اند نتیجه‌گرا با یک سال تجربه در ساخت رابط‌های کاربری واکنش‌گرا و پرکاربرد با React.js.',
  downloadResumeEn: 'Download Resume',
  downloadResumeFa: 'دانلود رزومه',
  contactMeEn: 'Contact Me',
  contactMeFa: 'تماس با من',
}

// ─── About ──────────────────────────────────────────────────────────────────
export const about = {
  headingEn: 'About / Profile',
  headingFa: 'درباره من / پروفایل',
  profileEn:
    'Results-driven Front End Developer with 1 year of hands-on experience in a B2B SaaS environment, specializing in React.js to build responsive, high-performance user interfaces. Skilled at integrating modern AI-powered tools to streamline development workflows, enhance code quality, and accelerate feature delivery. Passionate about creating intuitive user experiences that drive business value.',
  profileFa:
    'توسعه‌دهنده فرانت‌اند نتیجه‌گرا با یک سال تجربه کاری در محیط نرم‌افزارهای سازمانی B2B، مسلط به React.js برای ساخت رابط‌های کاربری واکنش‌گرا و پرکارایی. آشنا با استفاده از ابزارهای هوشمند و مبتنی بر هوش مصنوعی برای بهبود فرایند توسعه، افزایش کیفیت کد و تسریع ارائه قابلیت‌ها. علاقه‌مند به خلق تجربه‌های کاربری شهودی که برای کسب‌وکار ارزش ایجاد می‌کنند.',
}

// ─── Skills (names only; icons stay in component) ───────────────────────────
export const skills = {
  technical: [
    { nameEn: 'Html & CSS', nameFa: 'Html & CSS' },
    { nameEn: 'TailwindCss', nameFa: 'TailwindCss' },
    { nameEn: 'JavaScript', nameFa: 'JavaScript' },
    { nameEn: 'React.js', nameFa: 'React.js' },
    { nameEn: 'Next.js', nameFa: 'Next.js' },
    { nameEn: 'Git & Gitlab', nameFa: 'Git & Gitlab' },
  ],
  soft: [
    { nameEn: 'Team work', nameFa: 'کار تیمی' },
    { nameEn: 'Responsible', nameFa: 'مسئولیت‌پذیر' },
    { nameEn: 'Good communication', nameFa: 'ارتباط مؤثر' },
    { nameEn: 'Punctual', nameFa: 'وقت‌شناس' },
  ],
  headingEn: 'Skills',
  headingFa: 'مهارت‌ها',
  technicalLabelEn: 'Technical',
  technicalLabelFa: 'مهارت‌های فنی',
  softLabelEn: 'Soft',
  softLabelFa: 'مهارت‌های نرم',
}

// ─── Education ──────────────────────────────────────────────────────────────
export const education = {
  headingEn: 'Education',
  headingFa: 'تحصیلات',
  textEn:
    "Bachelor's degree in computer engineering, Islamic Azad University, Science And Research Branch, 2020-2024.",
  textFa: 'کارشناسی مهندسی کامپیوتر، دانشگاه آزاد اسلامی واحد علوم و تحقیقات، ۱۴۰۰–۱۴۰۴.',
}

// ─── Experience (multiple jobs; order = most recent first) ───────────────────
export const experienceSection = {
  headingEn: 'Experience',
  headingFa: 'تجربه کاری',
}
export const experiences = [
  {
    companyNameEn: 'Vira Segal',
    companyNameFa: 'ویرا سگال',
    link: null,
    bulletsEn: [
      'Developed responsive web interfaces using React.js',
      'Implemented UI components from designs to production',
      'Fixed bugs and improved app performance',
      'Used AI tools to write cleaner, faster code',
      'Collaborated with team on real client features',
      '3 months of internship',
    ],
    bulletsFa: [
      'توسعه رابط‌های وب واکنش‌گرا با React.js',
      'پیاده‌سازی کامپوننت‌های UI از طراحی تا تولید',
      'رفع باگ و بهبود عملکرد اپلیکیشن',
      'استفاده از ابزارهای هوش مصنوعی برای نوشتن کد تمیزتر و سریع‌تر',
      'همکاری با تیم در قابلیت‌های واقعی برای مشتریان',
      '۳ ماه دوره کارآموزی',
    ],
  },
  {
    companyNameEn: 'Adak company',
    companyNameFa: 'شرکت آداک',
    link: 'https://adak.ir/',
    bulletsEn: [
      '1 year experience in adak company',
      'Adak, a B2B software provider specializing in integrated enterprise solutions for mid-sized and large businesses.',
      'Develops ERP, CRM, and BPA (Business Process Automation) applications to streamline operations and workflows.',
      'Delivers cloud/hybrid platforms for unified data management, process optimization, and digital transformation.',
      'Targets B2B clients with modular tools to enhance efficiency, real-time insights, and system integrations.',
    ],
    bulletsFa: [
      'یک سال سابقه کار در شرکت آداک',
      'آداک، ارائه‌دهنده نرم‌افزارهای سازمانی B2B و راهکارهای یکپارچه برای کسب‌وکارهای متوسط و بزرگ است.',
      'توسعه سیستم‌های ERP، CRM و BPA برای بهینه‌سازی فرایندها و خودکارسازی جریان‌های کاری.',
      'ارائه پلتفرم‌های ابری و هیبریدی برای یکپارچه‌سازی داده‌ها، بهبود فرایندها و تحول دیجیتال.',
      'تمرکز بر مشتریان سازمانی با ابزارهای ماژولار برای افزایش بهره‌وری، بینش آنی و یکپارچگی سامانه‌ها.',
    ],
  },
]

// ─── Languages section ──────────────────────────────────────────────────────
export const languagesSection = {
  headingEn: 'Languages',
  headingFa: 'زبان‌ها',
  englishFluentEn: 'English — Fluent',
  englishFluentFa: 'انگلیسی — مسلط',
}

// ─── Projects ───────────────────────────────────────────────────────────────
export const projects = {
  headingEn: 'Projects',
  headingFa: 'پروژه‌ها',
  viewOnGithubEn: 'View on GitHub',
  viewOnGithubFa: 'مشاهده در گیت‌هاب',
  listEn: [
    {
      title: 'B2B website',
      subtitle: null,
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
      linkLabel: null,
      description:
        'Fullstack social media application similar to Twitter, built with Next.js and TypeScript on both frontend and backend, using Prisma ORM with a PostgreSQL database.',
      tech: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL'],
    },
    {
      title: 'Blog GraphQL with React js',
      subtitle: '(simple practical project)',
      link: 'https://github.com/ftmehsm/blog-graphql',
      linkLabel: null,
      description:
        'Using hygraph to make a database, using MUI to design the project, use graphQL.',
      tech: ['React.js', 'Hygraph', 'GraphQL', 'MUI'],
    },
    {
      title: 'Divar Website',
      subtitle: '(final project of react tutorial)',
      link: 'https://github.com/ftmehsm/divar',
      linkLabel: null,
      description:
        'Using real backend and have experience with swagger, using authorization and authentication concept (with cookies), using react-query, use React-Hook-Form, use TailwindCss for styles, use Context for managing states.',
      tech: ['React', 'Swagger', 'react-query', 'React-Hook-Form', 'TailwindCss', 'Context'],
    },
    {
      title: 'Shopping Cart with React js',
      subtitle: '(simple practical project)',
      link: 'https://github.com/ftmehsm/shoppingCart',
      linkLabel: null,
      description:
        'Using Hooks like useState, useEffect, ..., using Routing (react-router-dom 6), using Redux-toolkit to manage states.',
      tech: ['React.js', 'react-router-dom 6', 'Redux-toolkit'],
    },
  ],
  listFa: [
    {
      title: 'سایت B2B',
      subtitle: null,
      link: 'https://adak.ir/',
      linkLabel: 'adak.ir',
      description:
        'یک سال تجربه در شرکت B2B آداک، توسعه وب‌سایت B2B برای مشتریان سازمانی با استفاده از Next.js و TypeScript و Storybook برای ساخت کامپوننت‌ها.',
      tech: ['Next.js', 'TypeScript', 'Storybook'],
    },
    {
      title: 'اپلیکیشن شبکه اجتماعی',
      subtitle: '(پروژه فول‌استک)',
      link: 'https://github.com/ftmehsm/Social-media-app',
      linkLabel: null,
      description:
        'اپلیکیشن شبکه اجتماعی شبیه توییتر، فول‌استک با Next.js و TypeScript و Prisma ORM و دیتابیس PostgreSQL.',
      tech: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL'],
    },
    {
      title: 'وبلاگ GraphQL با React',
      subtitle: '(پروژه تمرینی ساده)',
      link: 'https://github.com/ftmehsm/blog-graphql',
      linkLabel: null,
      description:
        'استفاده از Hygraph برای دیتابیس، MUI برای طراحی و GraphQL برای دریافت داده‌ها.',
      tech: ['React.js', 'Hygraph', 'GraphQL', 'MUI'],
    },
    {
      title: 'وبسایت دیوار',
      subtitle: '(پروژه نهایی آموزش React)',
      link: 'https://github.com/ftmehsm/divar',
      linkLabel: null,
      description:
        'بک‌اند واقعی و Swagger، احراز هویت با کوکی، React Query، React Hook Form، TailwindCss و Context.',
      tech: ['React', 'Swagger', 'react-query', 'React-Hook-Form', 'TailwindCss', 'Context'],
    },
    {
      title: 'سبد خرید با React',
      subtitle: '(پروژه تمرینی ساده)',
      link: 'https://github.com/ftmehsm/shoppingCart',
      linkLabel: null,
      description:
        'هوک‌های useState و useEffect، مسیریابی با react-router-dom 6 و Redux Toolkit برای مدیریت وضعیت.',
      tech: ['React.js', 'react-router-dom 6', 'Redux-toolkit'],
    },
  ],
}

// ─── Other Knowledges ───────────────────────────────────────────────────────
export const knowledge = {
  headingEn: 'Other Knowledges',
  headingFa: 'سایر دانش‌ها',
  prefixEn: 'Have experience with ',
  prefixFa: 'تجربه کار با ',
  itemsEn: [
    'json-server library',
    'storybook',
    'axios library',
    'redux and redux-toolkit',
    'graphQL',
    'react-query',
    'daisyUI',
    'swiper',
    'sass',
  ],
  itemsFa: [
    'کتابخانه json-server',
    'storybook',
    'کتابخانه axios',
    'redux و redux-toolkit',
    'graphQL',
    'react-query',
    'daisyUI',
    'swiper',
    'sass',
  ],
}

// ─── Contact ────────────────────────────────────────────────────────────────
export const contact = {
  headingEn: 'Contact',
  headingFa: 'تماس',
  // icon key: 'email' | 'github' | 'linkedin' (component maps to icon component)
  info: [
    { key: 'email', value: 'ftmbesinuss@gmail.com', href: 'mailto:ftmbesinuss@gmail.com', labelEn: 'Email', labelFa: 'ایمیل' },
    { key: 'github', value: 'github.com/ftmehsn', href: 'https://github.com/ftmehsn', labelEn: 'GitHub', labelFa: 'گیت‌هاب' },
    { key: 'linkedin', value: 'linkedin.com/in/fatemehesm', href: 'https://www.linkedin.com/in/fatemehesm', labelEn: 'LinkedIn', labelFa: 'لینکدین' },
  ],
  form: {
    nameLabelEn: 'Name',
    nameLabelFa: 'نام',
    namePlaceholderEn: 'Your name',
    namePlaceholderFa: 'نام شما',
    emailLabelEn: 'Email',
    emailLabelFa: 'ایمیل',
    emailPlaceholderEn: 'your@email.com',
    emailPlaceholderFa: 'ایمیل شما',
    messageLabelEn: 'Message',
    messageLabelFa: 'پیام',
    messagePlaceholderEn: 'Your message',
    messagePlaceholderFa: 'پیام شما',
    sendEn: 'Send message',
    sendFa: 'ارسال پیام',
    sendingEn: 'Sending…',
    sendingFa: 'در حال ارسال…',
    successEn: 'Thank you! Your message has been sent.',
    successFa: 'ممنون! پیام شما با موفقیت ارسال شد.',
    errorConfigEn: 'Email is not configured. Add VITE_EMAILJS_* keys to .env',
    errorConfigFa: 'ایمیل پیکربندی نشده است. مقادیر VITE_EMAILJS_* را در فایل .env تنظیم کنید.',
    errorFallbackEn: 'Failed to send. Please try again.',
    errorFallbackFa: 'ارسال ناموفق بود. لطفاً دوباره تلاش کنید.',
  },
}

// ─── Footer ─────────────────────────────────────────────────────────────────
export const footer = {
  rightsEn: 'All rights reserved.',
  rightsFa: 'کلیه حقوق محفوظ است.',
  backToTopEn: 'Back to top',
  backToTopFa: 'بازگشت به بالا',
  githubUrl: 'https://github.com/ftmehsn',
  linkedinUrl: 'https://www.linkedin.com/in/fatemehesm',
}
