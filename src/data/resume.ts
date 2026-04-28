import type { ResumeData, SectionConfig, AccentOption, Tweaks } from '../types'

export const SECTIONS: SectionConfig[] = [
  { id: 'about', label: 'About', type: 'about' },
  { id: 'experience', label: 'Experience', type: 'experience' },
  { id: 'projects', label: 'Projects', type: 'projects' },
  { id: 'skills', label: 'Skills', type: 'skills' },
  { id: 'tools', label: 'Util Tools', type: 'tools' },
  { id: 'education', label: 'Education', type: 'education' },
  { id: 'publication', label: 'Publication', type: 'publication' },
  { id: 'contact', label: 'Contact', type: 'contact' },
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
CONTACT: nattakittce@hotmail.com | 097-0402-144 | github.com/Nattakitt-Tin | linkedin.com/in/nattakitt-wangcharoen-68a8a719a

EXPERIENCE:
1. Backend Engineer @ Kiatnakin Phatra Financial Group (KKP Better) — 2023–Present
   - Architected scalable backend services for a mobile banking platform supporting core financial transactions and high user volume
   - Microservices & RESTful APIs using Kotlin, Java (Spring Boot), and Golang
   - Banking features: fund transfers, bill payments, top-ups, FX with real-time rate integration, and Better Box (sub-wallet for budgeting and fund allocation)
   - Event-driven communication using Kafka and MQ for system decoupling and reliability
   - Built load testing scripts (JMeter, k6) and performed performance tuning & resource optimization
   - Transaction notification systems delivering near real-time updates across services
   - Internal back-office APIs and defined API standards/contracts across teams
   - CI/CD pipelines and containerized deployments using Docker, Kubernetes, and Jenkins

2. Software Engineer @ Dataxet:Infoquest — 2020–2023
   - Scalable web & feed crawling with Python (Selenium) and Node.js (Playwright) for structured data extraction
   - Distributed task queues with Redis for high-speed storage and low-latency retrieval
   - Bespoke automation tools that streamlined internal workflows and reduced manual overhead
   - NLP-based text analysis models to boost search relevance and classification accuracy
   - REST APIs serving production ML models and real-time analytics

SKILLS: Python, Golang, Kotlin, Java | Redis, Kafka, Active MQ, Rabbit MQ | Scikit-learn, PyThaiNLP, Huggingface | JMeter, k6 | Selenium, Playwright, BeautifulSoup | Docker, Kubernetes, Jenkins

EDUCATION: B.Eng Computer Engineering, KMITL (2016–2020)

PUBLICATION: "Fast Classifying Non-Helmeted Motorcyclists using CNN" — SNRU Journal of Science & Technology

PROJECTS: KKP Better — Deposit APIs, Better Box (sub-wallet), FX Exchange Integration, Helmet Detection CNN (published), Media Intelligence Crawler, Thai Text Analytics, Transaction Notification Service

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
    phone: '097-0402-144',
    email: 'nattakittce@hotmail.com',
    github: 'github.com/Nattakitt-Tin',
    linkedin: 'linkedin.com/in/nattakitt-wangcharoen-68a8a719a',
  },
  experience: [
    {
      role: 'Software Engineer (Backend)',
      team: 'KKP Better',
      company: 'Kiatnakin Phatra Financial Group',
      period: '2023–Present',
      bullets: [
        'Architected scalable backend services for a mobile banking platform supporting core financial transactions & high user volume',
        'Microservices & RESTful APIs using Kotlin, Java (Spring Boot) & Golang',
        'Delivered key banking features: fund transfers, bill payments, top-ups, FX with real-time rate integration & Better Box sub-wallet',
        'Event-driven communication via Kafka & MQ for system decoupling and reliability',
        'Load testing (JMeter, k6) with performance tuning & resource optimization for throughput / latency benchmarks',
        'Transaction notification systems delivering near real-time updates across services',
        'Internal back-office APIs & defined API standards / contracts across teams',
        'CI/CD pipelines & containerized deployments using Docker, Kubernetes & Jenkins',
      ],
    },
    {
      role: 'Software Engineer',
      team: 'Software Dev Team',
      company: 'Dataxet:Infoquest',
      period: '2020–2023',
      bullets: [
        'Scalable web & feed crawling using Python (Selenium) & Node.js (Playwright) for structured data extraction',
        'Distributed task queues with Redis for high-speed storage & low-latency retrieval',
        'Bespoke automation tools that streamlined internal workflows and reduced manual overhead',
        'Advanced NLP-based text analysis models to boost search relevance & classification accuracy',
        'Robust REST APIs serving production-ready ML models & real-time analytics',
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
      techs: ['Kotlin', 'Kafka', 'Active MQ', 'Docker', 'K8s'],
      link: null,
    },
    {
      tag: 'MOBILE API',
      name: 'KKP Better — Deposit APIs',
      company: 'Kiatnakin Phatra',
      period: '2025–2026',
      desc: 'Backend APIs powering the KKP Better mobile app deposit features — fund transfer and bill payment endpoints built on microservices architecture.',
      techs: ['Kotlin', 'Spring Boot', 'Kafka'],
      link: null,
    },
    {
      tag: 'FINTECH',
      name: 'FX Exchange Integration',
      company: 'Kiatnakin Phatra',
      period: '2025–2026',
      desc: 'Real-time currency exchange API integration for the mobile banking app, enabling live rate conversion across supported currencies.',
      techs: ['Kotlin', 'Spring Boot', 'Kafka'],
      link: null,
    },
    {
      tag: 'FINTECH',
      name: 'Better Box (Sub-wallet)',
      company: 'Kiatnakin Phatra',
      period: '2025-2026',
      desc: 'Sub-wallet system for budgeting and fund allocation — lets users split funds into named boxes within their account for expense categorization.',
      techs: ['Golang', 'Kotlin', 'Spring Boot', 'Kafka', 'Redis'],
      link: null,
    },
    { _placeholder: true },
  ],
  skills: [
    { cat: 'Programming Languages', tags: ['Python', 'Golang', 'Kotlin', 'Java'] },
    { cat: 'Messaging Event & Caching', tags: ['Redis', 'Kafka', 'Active MQ', 'Rabbit MQ'] },
    { cat: 'AI & Machine Learning', tags: ['Scikit-learn', 'PyThaiNLP', 'Huggingface'] },
    { cat: 'Load Test Tool', tags: ['JMeter', 'k6'] },
    { cat: 'Scraping & Automation', tags: ['Selenium', 'Playwright', 'BeautifulSoup'] },
    { cat: 'DevOps', tags: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub', 'GitLab'] },
  ],
  tools: [
    { icon: '⚡', name: 'k6', desc: 'Modern load testing as code with JS scripting' },
    { icon: '🔨', name: 'JMeter', desc: 'Apache load & performance test orchestration' },
    { icon: '🕷️', name: 'Playwright', desc: 'Cross-browser automation & scraping engine' },
    { icon: '📊', name: 'Streamlit', desc: 'Rapid ML/data dashboards in pure Python' },
    { icon: '🗃️', name: 'Redis CLI', desc: 'Cache inspection & queue management tool' },
    { icon: '🐳', name: 'Docker', desc: 'Container builds, compose & k8s deployments' },
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
