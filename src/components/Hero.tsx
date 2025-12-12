'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou{' '}
              <span className="text-primary-600">{personalInfo.name.split(' ')[0]}</span>
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {personalInfo.headline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={scrollToAbout}
                className="btn-primary"
              >
                Conheça meu trabalho
              </button>

              <a
                href="/cv-weslley-batista.pdf"
                download
                className="btn-secondary"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src={personalInfo.avatar}
                  alt={`Foto de perfil de ${personalInfo.name}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full animate-bounce-subtle"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors animate-bounce"
            aria-label="Rolar para baixo"
          >
            <span className="text-sm mb-2">Descubra mais</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
