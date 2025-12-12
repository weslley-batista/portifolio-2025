'use client';

import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">WB</h3>
            <p className="text-gray-300 mb-4">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '#home' },
                { name: 'Sobre', href: '#about' },
                { name: 'Experiências', href: '#experience' },
                { name: 'Projetos', href: '#projects' },
                { name: 'Contato', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-current" /> por Weslley Batista © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
