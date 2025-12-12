export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'database';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}
