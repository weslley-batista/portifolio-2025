'use client';

import { motion } from 'framer-motion';
import { technologies } from '@/lib/data';

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Banco de Dados',
  tools: 'Ferramentas',
};

const categoryColors = {
  frontend: 'bg-blue-100 text-blue-700 border-blue-200',
  backend: 'bg-green-100 text-green-700 border-green-200',
  database: 'bg-purple-100 text-purple-700 border-purple-200',
  tools: 'bg-orange-100 text-orange-700 border-orange-200',
};

const levelIndicators = {
  beginner: { label: 'Iniciante', color: 'bg-gray-200' },
  intermediate: { label: 'Intermediário', color: 'bg-yellow-200' },
  advanced: { label: 'Avançado', color: 'bg-green-200' },
};

export default function Technologies() {
  const categories = Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>;

  return (
    <section id="technologies" className="bg-gray-50 section-padding">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias & Ferramentas
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stack tecnológico que utilizo no meu dia a dia de desenvolvimento
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter(tech => tech.category === category);

            if (categoryTechs.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {categoryLabels[category]}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categoryTechs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.id}
                      className={`card p-4 text-center group hover:scale-105 transition-all duration-300 cursor-pointer ${
                        categoryColors[category]
                      } border`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <h4 className="font-semibold text-sm mb-2">{tech.name}</h4>

                      {/* Level indicator */}
                      <div className="flex items-center justify-center">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            levelIndicators[tech.level].color
                          }`}
                          title={levelIndicators[tech.level].label}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-12 bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Níveis de Proficiência</h4>
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(levelIndicators).map(([level, info]) => (
              <div key={level} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${info.color}`}></div>
                <span className="text-sm text-gray-600">{info.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
