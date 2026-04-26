import type { ResumeData, SectionConfig, AccentOption, Tweaks } from '../types'

export const SECTIONS: SectionConfig[] = [
  { id: 'about',       label: 'About',       type: 'about' },
  { id: 'experience',  label: 'Experience',  type: 'experience' },
  { id: 'projects',    label: 'Projects',    type: 'projects' },
  { id: 'skills',      label: 'Skills',      type: 'skills' },
  { id: 'tools',       label: 'Util Tools',  type: 'tools' },
  { id: 'education',   label: 'Education',   type: 'education' },
  { id: 'publication', label: 'Publication', type: 'publication' },
  { id: 'contact',     label: 'Contact',     type: 'contact' },
]

export const ACCENTS: AccentOption[] = [
  { c: '#F59E0B' },
  { c: '#00D4AA' },
  { c: '#7C3AED' },
  { c: '#EF4444' },
  { c: '#3B82F6' },
]

export const TWEAK_DEFAULTS: Tweaks = {
  accent: '#F59E0B',
  density: 'compact',
}

export const SYSTEM_PROMPT = `You are Nattakitt Wangcharoen's personal AI secretary — a friendly, professional assistant representing him on his resume website. Answer questions about Nattakitt concisely and enthusiastically. Speak in 1st person as his secretary ("Nattakitt has...", "His experience includes..."). Keep replies short (2-4 sentences max). Be warm and encouraging.

Here is everything you know about Nattakitt:

NAME: Nattakitt Wangcharoen
ROLE: Software Engineer, 4+ years experience in banking & FinTech
CONTACT: nattakittce@hotmail.com | 097-040-2144 | github.com/Nattakitt-Tin | linkedin.com/in/nattakitt-wangcharoen-68a8a719a

EXPERIENCE:
1. Backend Engineer @ Kiatnakin Phatra Financial Group (KKP Better Team) — 2023–Present
   - Kotlin, Java Spring Boot, Golang microservices
   - Deposit features: fund transfer, bill payment, FX exchange, pocket sub-wallet
   - Kafka, MQ event-driven architecture
   - Docker, Kubernetes, Jenkins CI/CD

2. Software Engineer @ Dataxet:Infoquest — 2020–2023
   - Web crawling: Python Selenium, NodeJS Playwright
   - Redis queue management
   - NLP text analysis & classification
   - REST APIs for ML model serving

SKILLS: Python, Golang, Kotlin, Java | Kafka, ActiveMQ, RabbitMQ, Redis | TensorFlow, Keras, Scikit-learn, PyThaiNLP, Huggingface | Pandas, Streamlit | Selenium, Playwright, BeautifulSoup | JMeter, k6 | Docker, K8s, Jenkins

EDUCATION: B.Eng Computer Engineering, KMITL (2016–2020)

PUBLICATION: "Fast Classifying Non-Helmeted Motorcyclists using CNN" — SNRU Journal of Science & Technology

PROJECTS: KKP Deposit Platform, Helmet Detection CNN (published), Media Intelligence Crawler, Thai Text Analytics, API Load Test Suite, Transaction Notification Service

If asked about salary expectations, availability, or personal opinions, politely deflect and suggest contacting directly via email.`

export const CHAT_SUGGESTIONS = [
  'What tech does he use?',
  'Tell me about his experience',
  'Any published research?',
  'Is he open to work?',
]

export const DATA: ResumeData = {
  name: 'Nattakitt Wangcharoen',
  role: 'Software Engineer',
  summary:
    'Software Engineer with <strong>4+ years</strong> in banking & <strong>FinTech</strong>. Expert in backend microservices, API design & event-driven systems. Passionate about leveraging <strong>AI/ML</strong> for real-world applications.',
  contact: {
    phone: '097-040-2144',
    email: 'nattakittce@hotmail.com',
    github: 'github.com/Nattakitt-Tin',
    linkedin: 'linkedin.com/in/nattakitt-wangcharoen-68a8a719a',
  },
  experience: [
    {
      role: 'Backend Engineer',
      team: 'KKP Better Team',
      company: 'Kiatnakin Phatra Financial Group',
      period: '2023–Present',
      bullets: [
        'Built APIs using Kotlin, Java Spring Boot & Golang in microservices architecture',
        'Deposit features: fund transfer, bill payment, FX exchange & pocket sub-wallet',
        'Integrated Kafka + MQ for real-time event-driven communication',
        'Transaction notification services & scalable API specs in Agile sprints',
        'CI/CD with Docker, Kubernetes, Jenkins, GitLab',
      ],
    },
    {
      role: 'Software Engineer',
      team: 'Software Dev Team',
      company: 'Dataxet:Infoquest',
      period: '2020–2023',
      bullets: [
        'Web crawling with Python Selenium & NodeJS Playwright',
        'Redis queue management & data optimization',
        'Enhanced NLP-based text analysis & classification models',
        'Deployed REST APIs for ML models & analytics services',
      ],
    },
  ],
  projects: [
    {
      tag: 'ML / CV',
      name: 'Helmet Detection CNN',
      company: 'KMITL',
      period: '2019',
      desc: 'Fast CNN classifier identifying non-helmeted motorcyclists from images. Peer-reviewed & published research.',
      techs: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
      link: 'https://ph01.tci-thaijo.org/index.php/snru_journal/article/view/242823',
    },
    {
      tag: 'DATA',
      name: 'Media Intelligence Crawler',
      company: 'Dataxet:Infoquest',
      period: '2020–2021',
      desc: 'High-throughput scraping pipeline collecting structured data from news & web sources using Redis-backed job queues.',
      techs: ['Playwright', 'Selenium', 'BeautifulSoup', 'Redis'],
      link: null,
    },
    {
      tag: 'NLP',
      name: 'Thai Text Analytics',
      company: 'Dataxet:Infoquest',
      period: '2021–2023',
      desc: 'NLP pipeline for Thai-language media monitoring: search, classification & sentiment — served via REST API.',
      techs: ['PyThaiNLP', 'Huggingface', 'Scikit-learn', 'Pandas'],
      link: null,
    },
    {
      tag: 'BACKEND',
      name: 'Transaction Notification Service',
      company: 'Kiatnakin Phatra',
      period: '2023',
      desc: 'Event-driven notification microservice ensuring real-time transaction updates to internal banking teams via Kafka and MQ.',
      techs: ['Golang', 'Kafka', 'Active MQ', 'Docker'],
      link: null,
    },
    {
      tag: 'MOBILE API',
      name: 'KKP Better — Deposit APIs',
      company: 'Kiatnakin Phatra',
      period: '2025–2026',
      desc: 'Backend APIs powering the KKP Better mobile app deposit features — fund transfer and bill payment endpoints built on microservices architecture.',
      techs: ['Kotlin', 'Spring Boot', 'Docker', 'K8s'],
      link: null,
    },
    {
      tag: 'FINTECH',
      name: 'FX Exchange Integration',
      company: 'Kiatnakin Phatra',
      period: '2025–2026',
      desc: 'Real-time currency exchange API integration for the mobile banking app, enabling live rate conversion across supported currencies.',
      techs: ['Golang', 'Redis', 'Kafka', 'Docker'],
      link: null,
    },
    {
      tag: 'FINTECH',
      name: 'Pocket Sub-wallet',
      company: 'Kiatnakin Phatra',
      period: '2025-2026',
      desc: 'Sub-wallet feature for expense categorization and budget management — allows users to split funds into named pockets within their account.',
      techs: ['Kotlin', 'Spring Boot', 'Kafka', 'Docker'],
      link: null,
    },
    { _placeholder: true },
  ],
  skills: [
    { cat: 'Languages',             tags: ['Python', 'Golang', 'Kotlin', 'Java'] },
    { cat: 'Messaging & Caching',   tags: ['Kafka', 'Active MQ', 'Rabbit MQ', 'Redis'] },
    { cat: 'AI / Machine Learning', tags: ['TensorFlow', 'Keras', 'Scikit-learn', 'PyThaiNLP', 'Huggingface'] },
    { cat: 'Data & Viz',            tags: ['Pandas', 'Openpyxl', 'Streamlit'] },
    { cat: 'Scraping',              tags: ['Selenium', 'Playwright', 'BeautifulSoup'] },
    { cat: 'DevOps',                tags: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'GitLab'] },
  ],
  tools: [
    { icon: '⚡', name: 'k6',         desc: 'Modern load testing as code with JS scripting' },
    { icon: '🔨', name: 'JMeter',     desc: 'Apache load & performance test orchestration' },
    { icon: '🕷️', name: 'Playwright', desc: 'Cross-browser automation & scraping engine' },
    { icon: '📊', name: 'Streamlit',  desc: 'Rapid ML/data dashboards in pure Python' },
    { icon: '🗃️', name: 'Redis CLI',  desc: 'Cache inspection & queue management tool' },
    { icon: '🐳', name: 'Docker',     desc: 'Container builds, compose & k8s deployments' },
  ],
  education: {
    degree: "Bachelor's in Computer Engineering",
    school: "King Mongkut's Institute of Technology Ladkrabang",
    period: '2016–2020',
  },
  publication: {
    journal: 'SNRU Journal of Science & Technology',
    title: 'Fast Classifying Non-Helmeted Motorcyclists using CNN',
    url: 'https://ph01.tci-thaijo.org/index.php/snru_journal/article/view/242823',
  },
}
