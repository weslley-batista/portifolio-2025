'use client';

import { motion } from 'framer-motion';
import { User, MapPin, Mail, Calendar } from 'lucide-react';
import { personalInfo, skills } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça mais sobre minha jornada, habilidades com a tecnologia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <User className="w-6 h-6 text-primary-600 mr-3" />
              Minha História
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{personalInfo.bio}</p>

              <p>
                Minha jornada no desenvolvimento começou com curiosidade sobre como as aplicações web funcionam.
                Desde então, venho me especializando em tecnologias modernas e melhores práticas de desenvolvimento.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Localização</span>
                </div>
                <p className="font-medium text-gray-900">{personalInfo.location}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Experiência</span>
                </div>
                <p className="font-medium text-gray-900">2.5+ anos</p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Habilidades Técnicas & Soft Skills
            </h3>

            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4">Soft Skills</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-white px-3 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
