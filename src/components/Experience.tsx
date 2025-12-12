'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 section-padding">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experiências Profissionais
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minha trajetória profissional e os projetos nos quais contribuí
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="card p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {experience.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline decoration */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-0.5 bg-primary-200"></div>
        </div>
      </div>
    </section>
  );
}
