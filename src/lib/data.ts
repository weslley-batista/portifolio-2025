import { Experience, Project, Technology, SocialLink } from '@/types';

export const personalInfo = {
  name: 'Weslley Batista',
  title: 'Desenvolvedor Full Stack',
  headline: 'Transformando ideias em experiências digitais incríveis',
  description: 'Desenvolvedor apaixonado por tecnologia, especializado em criar aplicações web modernas e responsivas. Com experiência em React, Next.js, Node.js e TypeScript.',
  email: 'prg.weslleybatista@gmail.com',
  location: 'Pernambuco, Brasil',
  bio: 'Olá! Sou Weslley Batista, um desenvolvedor full stack apaixonado por criar experiências digitais que fazem a diferença. Com mais de 2.5 anos de experiência no desenvolvimento web, especializo-me em tecnologias modernas como React, Next.js e Node.js.',
  avatar: '/images/avatar.jpg',
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Desenvolvedor Full Stack',
    company: 'Visagio',
    period: '2025 - 2025',
    description: 'Desenvolvimento full stack em projeto do setor supply chain, utilizando Ruby on Rails, Bootstrap e jQuery para criação de interfaces dinâmicas e sistemas robustos.',
    technologies: ['Ruby on Rails', 'Bootstrap', 'jQuery', 'Monolito'],
  },
  {
    id: '2',
    title: 'Desenvolvedor Full Stack',
    company: 'Visagio',
    period: '2024 - 2025',
    description: 'Desenvolvimento full stack em projeto do setor de energia, integrando React, .NET, Python e Azure para soluções escaláveis na nuvem.',
    technologies: ['React', '.NET', 'Python', 'Azure', 'Microservices',	'API REST', 'Monolito'],
  },
  {
    id: '3',
    title: 'Desenvolvedor Frontend',
    company: 'Startup',
    period: '2024 - 2024',
    description: 'Desenvolvimento frontend em projeto do setor educacional, utilizando React, Next.js, Material UI e Tailwind CSS para interfaces modernas e responsivas.',
    technologies: ['React', 'Next.js', 'Material UI', 'Tailwind CSS'],
  },
  {
    id: '4',
    title: 'Desenvolvedor Frontend',
    company: 'Citi',
    period: '2023 - 2024',
    description: 'Desenvolvimento frontend em projeto do setor político, utilizando React, Next.js e Material UI para criação de interfaces interativas e acessíveis.',
    technologies: ['React', 'Next.js', 'Material UI'],
  },
  {
    id: '5',
    title: 'Desenvolvedor Full Stack',
    company: 'Citi',
    period: '2023 - 2023',
    description: 'Desenvolvimento full stack em projeto do setor ambiental, utilizando React, Next.js, Node.js, PostgreSQL e Digital Ocean para aplicações web escaláveis.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Digital Ocean'],
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Monitoramento Ambiental - Frontend',
    description: 'Painel que exibe em tempo real dados ambientais (temperatura, umidade, qualidade da água/ar, presença de espécies monitoradas). Representa estações de monitoramento conectadas via API.',
    image: '/images/monitoramentoAmbiental.avif',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'API REST', 'Real-time'],
    githubUrl: 'https://github.com/weslley-batista/Monitoramento_ambiental_Frontend',
    demoUrl: '',
    featured: true,
  },
  {
    id: '2',
    title: 'Monitoramento Ambiental - Backend',
    description: 'API backend para sistema de monitoramento ambiental, responsável pela coleta e processamento de dados de sensores e estações de monitoramento.',
    image: '/images/monitoramentoAmbiental1.avif',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'API REST'],
    githubUrl: 'https://github.com/weslley-batista/Monitoramento_ambiental_Backend/tree/main/Monitoramento_ambiental_Backend',
    demoUrl: '',
    featured: true,
  },
  {
    id: '3',
    title: 'Autenticação JWT',
    description: 'Sistema de autenticação seguro utilizando JSON Web Tokens para controle de acesso e autorização em aplicações web.',
    image: '/images/project1.jpg',
    technologies: ['Node.js', 'Express', 'JWT', 'bcrypt', 'PostgreSQL'],
    githubUrl: 'https://github.com/weslley-batista/Auth-JWT',
    demoUrl: '',
  },
  {
    id: '4',
    title: 'Autenticação com Firebase',
    description: 'Sistema de autenticação integrado com Google Firebase, incluindo login social e gerenciamento de usuários.',
    image: '/images/project1.jpg',
    technologies: ['Firebase', 'React', 'Google Auth', 'TypeScript'],
    githubUrl: 'https://github.com/weslley-batista/Firebase-Auth-Google',
    demoUrl: '',
  },
];

export const technologies: Technology[] = [
  // Frontend
  { id: '1', name: 'TypeScript', icon: '🔷', category: 'frontend', level: 'advanced' },
  { id: '2', name: 'JavaScript', icon: '🟨', category: 'frontend', level: 'advanced' },
  { id: '3', name: 'Next.js', icon: '▲', category: 'frontend', level: 'advanced' },
  { id: '4', name: 'React.js', icon: '⚛️', category: 'frontend', level: 'advanced' },
  { id: '5', name: 'Angular', icon: '🅰️', category: 'frontend', level: 'intermediate' },
  { id: '6', name: 'Tailwind', icon: '💨', category: 'frontend', level: 'advanced' },
  { id: '7', name: 'shadcn/ui', icon: '🎯', category: 'frontend', level: 'advanced' },
  { id: '8', name: 'Material UI', icon: '📦', category: 'frontend', level: 'advanced' },
  { id: '9', name: 'Bootstrap', icon: '🅱️', category: 'frontend', level: 'intermediate' },
  { id: '10', name: 'jQuery', icon: '💛', category: 'frontend', level: 'intermediate' },

  // Backend
  { id: '11', name: 'Node.js', icon: '🟢', category: 'backend', level: 'advanced' },
  { id: '12', name: 'Express', icon: '🚂', category: 'backend', level: 'advanced' },
  { id: '13', name: 'Nest', icon: '🪺', category: 'backend', level: 'intermediate' },
  { id: '14', name: 'Python', icon: '🐍', category: 'backend', level: 'intermediate' },
  { id: '15', name: 'C#', icon: '💎', category: 'backend', level: 'intermediate' },
  { id: '16', name: 'Ruby on Rails', icon: '💎', category: 'backend', level: 'beginner' },
  { id: '17', name: '.NET', icon: '🔷', category: 'backend', level: 'intermediate' },

  // Database
  { id: '16', name: 'PostgreSQL', icon: '🐘', category: 'database', level: 'advanced' },
  { id: '17', name: 'SQL Server', icon: '🗄️', category: 'database', level: 'intermediate' },
  { id: '18', name: 'Redis', icon: '🔴', category: 'database', level: 'beginner' },

  // Tools
  { id: '19', name: 'Prisma ORM', icon: '🔷', category: 'tools', level: 'advanced' },
  { id: '20', name: 'Git', icon: '📚', category: 'tools', level: 'advanced' },
  { id: '21', name: 'Docker', icon: '🐳', category: 'tools', level: 'intermediate' },
  { id: '22', name: 'Figma', icon: '🎨', category: 'tools', level: 'advanced' },
  { id: '23', name: 'Azure', icon: '☁️', category: 'tools', level: 'beginner' },
  { id: '24', name: 'Digital Ocean', icon: '🌊', category: 'tools', level: 'intermediate' },
  { id: '25', name: 'Microservices', icon: '🌐', category: 'tools', level: 'intermediate' },
  { id: '26', name: 'API REST', icon: '🕸️', category: 'tools', level: 'intermediate' },
  { id: '27', name: 'Monolito', icon: '🟦', category: 'tools', level: 'intermediate' },
];

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    name: 'GitHub',
    url: 'https://github.com/weslley-batista',
    icon: 'github',
  },
  {
    id: '2',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/weslley-batista-113885163',
    icon: 'linkedin',
  },
  {
    id: '3',
    name: 'Email',
    url: 'mailto:prg.weslleybatista@gmail.com',
    icon: 'mail',
  },
];

export const skills = [
  'Resolução de Problemas',
  'Trabalho em Equipe',
  'Aprendizado Contínuo',
  'Comunicação',
  'Adaptabilidade',
  'Criatividade',
  'Foco em Resultados',
  'Proatividade',
];
