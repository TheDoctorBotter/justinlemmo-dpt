import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface MeetTheTherapistProps {
  onBack: () => void;
}

type Language = 'en' | 'es';

const content = {
  en: {
    title: 'Meet the Therapist',
    name: 'Justin Lemmo, PT, DPT',
    degree: 'Doctor of Physical Therapy',
    bilingual: 'Bilingual: English & Spanish',
    sections: {
      profile: {
        title: 'Professional Profile',
        content: `Dr. Justin Lemmo is a Doctor of Physical Therapy with over 15 years of clinical experience in orthopedic rehabilitation, pediatric physical therapy, and early childhood intervention. He is the founder of Buckeye Physical Therapy and provides individualized, one-on-one care focused on functional outcomes and long-term results.

Originally from Youngstown, Ohio, Dr. Lemmo earned a Bachelor of Arts in Spanish and Psychology from Washington & Jefferson College in Washington, Pennsylvania. During his undergraduate education, he completed six months of study abroad in Granada, Spain, strengthening both language proficiency and cultural competence.

He earned his Doctor of Physical Therapy degree from Chatham University in Pittsburgh, Pennsylvania, in 2011.`,
      },
      focus: {
        title: 'Clinical Focus',
        intro: 'Dr. Lemmo has practiced across multiple clinical settings, with focused experience in:',
        items: [
          'Orthopedic rehabilitation',
          'Pediatric physical therapy',
          'Early Childhood Intervention (ECI) services',
        ],
        outro: 'His clinical background supports comprehensive evaluation and treatment across the lifespan, with emphasis on movement quality, functional progression, and individualized care.',
      },
      approach: {
        title: 'Treatment Approach',
        content: `Dr. Lemmo's approach integrates evidence-based practice with clinical judgment developed through years of hands-on experience. Recognizing that rehabilitation is not always linear, treatment plans are tailored to each patient's presentation, response to care, and functional goals.

All visits are conducted on a one-on-one basis, allowing for focused assessment, precise progression, and consistent communication throughout the plan of care.`,
      },
    },
    cta: 'Book Evaluation',
    backLink: '← Back to Home',
  },
  es: {
    title: 'Conozca al Terapeuta',
    name: 'Justin Lemmo, PT, DPT',
    degree: 'Doctor en Terapia Física',
    bilingual: 'Bilingüe: Inglés y Español',
    sections: {
      profile: {
        title: 'Perfil Profesional',
        content: `El Dr. Justin Lemmo es Doctor en Terapia Física con más de 15 años de experiencia clínica en rehabilitación ortopédica, terapia física pediátrica e intervención temprana. Es el fundador de Buckeye Physical Therapy y ofrece atención individualizada, uno a uno, enfocada en resultados funcionales y duraderos.

Originario de Youngstown, Ohio, el Dr. Lemmo obtuvo una Licenciatura en Español y Psicología en Washington & Jefferson College en Washington, Pennsylvania. Como parte de su formación académica, completó seis meses de estudios en el extranjero en Granada, España, fortaleciendo su dominio del idioma y su competencia cultural.

Obtuvo su Doctorado en Terapia Física en Chatham University en Pittsburgh, Pennsylvania, en el año 2011.`,
      },
      focus: {
        title: 'Enfoque Clínico',
        intro: 'El Dr. Lemmo cuenta con experiencia en diversos entornos clínicos, con especialización en:',
        items: [
          'Rehabilitación ortopédica',
          'Terapia física pediátrica',
          'Servicios de Intervención Temprana (ECI)',
        ],
        outro: 'Su experiencia permite una evaluación y tratamiento integral de pacientes de todas las edades, con énfasis en la calidad del movimiento, la función y la progresión individualizada.',
      },
      approach: {
        title: 'Enfoque Terapéutico',
        content: `El enfoque terapéutico del Dr. Lemmo combina la práctica basada en evidencia con el criterio clínico desarrollado a lo largo de años de experiencia directa. Reconoce que la rehabilitación no siempre es lineal y adapta cada plan de tratamiento según la condición, respuesta al tratamiento y objetivos funcionales del paciente.

Todas las sesiones se realizan de manera individual, lo que permite una atención enfocada, progresión precisa y comunicación clara durante todo el proceso de atención.`,
      },
    },
    cta: 'Agendar Evaluación',
    backLink: '← Volver al Inicio',
  },
};

export const MeetTheTherapist: React.FC<MeetTheTherapistProps> = ({ onBack }) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = content[language];

  return (
    <div className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        {/* Back Link */}
        <button
          onClick={onBack}
          className="text-scarlet hover:text-scarlet-600 font-medium mb-8 inline-flex items-center"
        >
          {t.backLink}
        </button>

        {/* Language Toggle */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-lg border border-gray-300 p-1"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                language === 'en'
                  ? 'bg-scarlet text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-pressed={language === 'en'}
              aria-label="English"
            >
              English
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                language === 'es'
                  ? 'bg-scarlet text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-pressed={language === 'es'}
              aria-label="Español"
            >
              Español
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-700 font-medium">{t.name}</p>
          <p className="text-lg text-gray-600">{t.degree}</p>
          <p className="text-base text-scarlet font-medium mt-2">{t.bilingual}</p>
        </div>

        {/* Professional Profile */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            {t.sections.profile.title}
          </h2>
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">
            {t.sections.profile.content}
          </div>
        </section>

        {/* Clinical Focus */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            {t.sections.focus.title}
          </h2>
          <p className="text-gray-600 mb-4">{t.sections.focus.intro}</p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2 pl-2">
            {t.sections.focus.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">{t.sections.focus.outro}</p>
        </section>

        {/* Treatment Approach */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            {t.sections.approach.title}
          </h2>
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">
            {t.sections.approach.content}
          </div>
        </section>

        {/* CTA Button */}
        <div className="text-center">
          <a href="tel:9564765310" className="btn-primary-lg">
            <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
            {t.cta}
          </a>
        </div>
      </div>
    </div>
  );
};
