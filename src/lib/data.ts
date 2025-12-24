import { Experience, Project, Technology, SocialLink } from '@/types';

export const personalInfo = {
  name: 'Weslley Batista',
  title: 'Desenvolvedor Web',
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
    company: 'Visagio - Setor de Supply Chain',
    period: '2025 - 2025',
    description: 'Atuação no desenvolvimento do principal sistema logístico de uma das maiores empresas do setor de suprimentos, responsável pela gestão de uma das maiores frotas de caminhões do país, com operação integrada no Brasil e na Argentina. Principais contribuições: desenvolvimento do módulo central de gestão de cargas, responsável por orquestrar operações logísticas críticas em larga escala; integração do sistema com SAP e Oracle Transportation Management (OTM), garantindo consistência de dados e automação de processos entre sistemas corporativos; construção de uma arquitetura monolítica robusta e escalável utilizando Ruby on Rails, com foco em performance; contribuição direta para a eficiência operacional da cadeia de suprimentos, suportando alto volume de operações logísticas diárias.',
    technologies: ['Ruby on Rails', 'Bootstrap', 'jQuery', 'Monolito', 'SAP', 'OTM'],
  },
  {
    id: '2',
    title: 'Desenvolvedor Full Stack',
    company: 'Visagio - Setor de Óleo e Gás',
    period: '2024 - 2025',
    description: 'Atuação em projeto estratégico com aproximadamente 40 membros no time para o setor de energia, desenvolvendo e evoluindo o principal portal corporativo de gestão de projetos, métricas, KPIs e desempenho, utilizado por mais de 5000 usuários em FPSOs e plataformas offshore. Principais contribuições: otimização de queries e performance no backend, reduzindo tempos de resposta em funcionalidades críticas do portal; melhoria significativa do desempenho frontend, focando em experiência do usuário em ambientes com conectividade limitada (offshore); desenvolvimento de um pipeline de ETL, viabilizando a consolidação e análise de grandes volumes de dados operacionais e gerenciais; participação ativa com um time de 4 pessoas no redesign de dois dos principais módulos do portal, impactando diretamente a usabilidade do sistema corporativo.',
    technologies: ['React', '.NET', 'Python', 'Azure', 'Microservices', 'API REST', 'Monolito', 'ETL'],
  },
  {
    id: '3',
    title: 'Desenvolvedor Frontend e Backend',
    company: 'Citi - Setor Político',
    period: '2023 - 2024',
    description: 'Atuação no desenvolvimento de uma plataforma de análise de dados políticos em escala nacional, com o objetivo de mapear intenções de voto e desempenho de candidatos em diferentes recortes geográficos de bairros específicos até o cenário nacional, sendo usado por centenas de usuários. Principais contribuições: desenvolvimento do frontend da plataforma, focando em visualização clara e acessível de dados políticos complexos; criação de dashboards interativos para análise comparativa entre regiões, candidatos e períodos; implementação de interfaces responsivas e acessíveis, garantindo boa experiência em diferentes dispositivos; participação direta na entrega de uma ferramenta estratégica para análise eleitoral e tomada de decisão baseada em dados.',
    technologies: ['React', 'Next.js', 'Material UI'],
  },
  {
    id: '4',
    title: 'Desenvolvedor Full Stack',
    company: 'Citi - Setor Ambiental',
    period: '2024 - 2024',
    description: 'Atuação no desenvolvimento de uma plataforma voltada à análise e combate ao greenwashing, envolvendo desde interfaces complexas com múltiplos perfis de usuário até a implementação de um algoritmo proprietário de cálculo e classificação. Principais contribuições: atuação full stack no desenvolvimento da plataforma, participando de toda a cadeia de construção do produto; desenvolvimento de interfaces complexas e dashboards, adaptadas a diferentes níveis de acesso e permissões; implementação de backend robusto em Node.js, responsável por regras de negócio, autenticação e processamento de dados; criação e otimização de banco de dados PostgreSQL, com consultas eficientes e migrações automatizadas; implementação de um algoritmo próprio de cálculo, núcleo do produto, responsável pela análise e classificação de práticas de greenwashing.',
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
    title: 'Buscador de Preços com Scraping',
    description: 'Aplicação web completa para busca de preços em tempo real através de scraping de múltiplas lojas online (Amazon, Magazine Luiza, Casas Bahia). Inclui cache inteligente, filtros avançados, interface responsiva e tratamento robusto de erros.',
    image: '/images/webscraping.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Cheerio', 'API Routes', 'Web Scraping'],
    githubUrl: 'https://github.com/weslley-batista/BuscadorPreco-scraping',
    demoUrl: '',
    featured: true,
  },
  {
    id: '4',
    title: 'Autenticação JWT',
    description: 'Sistema de autenticação seguro utilizando JSON Web Tokens para controle de acesso e autorização em aplicações web.',
    image: '/images/project1.jpg',
    technologies: ['Node.js', 'Express', 'JWT', 'bcrypt', 'PostgreSQL'],
    githubUrl: 'https://github.com/weslley-batista/Auth-JWT',
    demoUrl: '',
  },
  {
    id: '5',
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
