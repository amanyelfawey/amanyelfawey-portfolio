import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript (ES6+)', level: 95, icon: '🟨' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'HTML5', level: 98, icon: '🌐' },
        { name: 'CSS3', level: 95, icon: '🎨' },
        { name: 'Python', level: 80, icon: '🐍' }
      ]
    },
    {
      title: 'UI & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 95, icon: '🎨' },
        { name: 'Material UI', level: 85, icon: '🎭' },
        { name: 'Bootstrap', level: 90, icon: '📱' },
        { name: 'Responsive Design', level: 98, icon: '📱' },
        { name: 'Figma', level: 80, icon: '🎨' }
      ]
    },
    {
      title: 'APIs & Data Management',
      skills: [
        { name: 'RESTful APIs', level: 90, icon: '🔗' },
        { name: 'WebSocket', level: 85, icon: '⚡' },
        { name: 'React Query', level: 88, icon: '🔄' },
        { name: 'Context API', level: 90, icon: '📦' }
      ]
    },
    {
      title: 'Tools & Development',
      skills: [
        { name: 'Git & GitHub', level: 92, icon: '🐙' },
        { name: 'Postman', level: 85, icon: '📮' },
        { name: 'Webpack', level: 75, icon: '📦' },
        { name: 'Vite', level: 90, icon: '⚡' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technologies and tools I master in frontend development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`space-y-4 animate-fade-in-scale animate-delay-${(categoryIndex + 1) * 100}`}>
              <h3 className="text-lg font-bold text-white mb-4 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-cyan-500/40 transition-all duration-300">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Certifications - Commented out for now */}
        {/* 
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications & Courses</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Advanced Frontend Development',
                provider: 'UpSkilling',
                year: '2025',
                description: 'React Hooks, React Query, Next.js, TypeScript'
              },
              {
                title: 'Frontend Development Bootcamp',
                provider: 'Career180',
                year: '2024',
                description: '200 hours intensive React.js training'
              },
              {
                title: 'Frontend Development Diploma',
                provider: 'Route',
                year: '2022',
                description: '10+ real-world projects using HTML, CSS, JavaScript'
              },
              {
                title: 'Database Fundamentals',
                provider: 'Mahara-Tech (ITI)',
                year: '2022',
                description: 'SQL, Data Modeling, Relational Databases'
              }
            ].map((cert, index) => (
              <div 
                key={index}
                className="bg-slate-800 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                <p className="text-cyan-400 text-sm mb-2">{cert.provider}</p>
                <p className="text-slate-300 text-sm mb-3">{cert.description}</p>
                <span className="text-cyan-500 text-xs font-medium">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Skills;
