import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Freelance Shopify Developer',
      company: 'Self-Employed',
      period: 'May 2026 - Present',
      type: 'Freelance',
      location: 'Remote',
      description: 'Building and customizing e-commerce stores on Shopify for clients',
      achievements: [
        'Developed custom Shopify themes and features tailored to client requirements',
        'Built complete e-commerce solutions from scratch including product pages, checkout flows, and payment integration',
        'Customized store designs to match brand identity while maintaining optimal performance',
        'Integrated third-party apps and APIs to extend store functionality'
      ],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'E-commerce'],
      current: true
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'BSA Engineering Consultancy',
      period: 'May 2025 - Present',
      type: 'Full-time',
      location: 'Egypt',
      description: 'Contributing to a large-scale ERP system serving multiple enterprise clients',
      achievements: [
        'Built and maintained reusable UI components used across multiple ERP modules for consistency and faster development',
        'Integrated REST APIs with React Query to keep dashboards synchronized with backend data in real-time',
        'Optimized component architecture for scalability, reducing code duplication across the system',
        'Collaborated with backend teams and stakeholders to translate business requirements into functional interfaces'
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'ERP Systems'],
      current: true
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Stem AI',
      period: 'December 2024 - May 2025',
      type: 'Full-time',
      location: 'Egypt',
      description: 'Built RPAIR, a large-scale competition platform for robotics and programming events',
      achievements: [
        'Developed real-time judging system using WebSocket, enabling instant score updates across all connected devices',
        'Designed and implemented responsive UI components for registration, exam access, and judge dashboards using React and Tailwind CSS',
        'Participated in full SDLC — requirements gathering, prototyping, development, testing, and deployment',
        'Taught Python and frontend fundamentals as part-time Programming Instructor alongside development work'
      ],
      technologies: ['React.js', 'WebSocket', 'Tailwind CSS', 'Real-time Updates', 'SDLC'],
      current: false
    },
    {
      id: 4,
      title: 'Frontend Mentor',
      company: 'Google DSC, MTI University',
      period: 'December 2023 - March 2024',
      type: 'Part-time',
      location: 'Egypt',
      description: 'Mentored 100+ students in modern frontend development',
      achievements: [
        'Conducted code reviews and provided constructive feedback to support student growth in HTML, CSS, JavaScript, and React',
        'Ran technical workshops and hands-on sessions on modern frontend tools and best practices',
        'Guided students in building portfolio projects using industry-relevant technologies'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Mentoring'],
      current: false
    },
    {
      id: 5,
      title: 'Frontend Development Trainee',
      company: 'Information Technology Institute (ITI)',
      period: 'July 2023 - September 2023',
      type: 'Training',
      location: 'Egypt',
      description: 'Completed intensive frontend training with 8+ hands-on projects',
      achievements: [
        'Delivered 8+ frontend projects under fixed deadlines with a focus on responsive design and clean UI',
        'Strengthened JavaScript and React fundamentals through practical application',
        'Applied frontend best practices across multiple short-cycle builds'
      ],
      technologies: ['JavaScript', 'React.js', 'Responsive Design', 'Clean UI'],
      current: false
    },
    {
      id: 6,
      title: 'Frontend Development Intern',
      company: 'Code Clause',
      period: 'July 2023 - August 2023',
      type: 'Internship',
      location: 'Remote',
      description: 'Completed remote internship with 4 solo web development projects',
      achievements: [
        'Built 4 end-to-end web applications independently, showcasing JavaScript and layout design skills',
        'Implemented responsive interfaces compatible across browsers and devices',
        'Developed practical experience in frontend development fundamentals'
      ],
      technologies: ['JavaScript', 'Layout Design', 'Responsive Web', 'Solo Projects'],
      current: false
    }
  ];

  const education = {
    degree: 'B.Sc. in Computer Science',
    university: 'Tanta University — Faculty of Computers and Information',
    period: 'October 2020 - July 2024',
    gpa: '3.11',
    graduationProject: 'A+',
    description: 'Graduated with GPA 3.11 and earned A+ on graduation project — Medix, an AI-powered medical platform built with Next.js and React for appointment booking and MRI result analysis'
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Professional <span className="text-cyan-400">Experience</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    Building products, mentoring others, and growing as a frontend developer
                  </p>
                </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center animate-fade-in-up animate-delay-${(index + 1) * 200} ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`bg-slate-800 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 ${exp.current ? 'ring-2 ring-cyan-500/30' : ''}`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold">{exp.company}</p>
                        <p className="text-slate-400 text-sm">{exp.period}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.current 
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                            : 'bg-slate-700 text-slate-300'
                        }`}>
                          {exp.current ? 'Current' : exp.type}
                        </span>
                        <p className="text-slate-400 text-xs mt-1">{exp.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Contributions:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-slate-700 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{education.degree}</h4>
                  <p className="text-cyan-400 font-semibold text-lg">{education.university}</p>
                  <p className="text-slate-400">{education.period}</p>
                </div>
                <div className="text-right">
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/30">
                    <p className="font-bold">GPA: {education.gpa}</p>
                    <p className="text-sm">Graduation Project: {education.graduationProject}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6">{education.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{education.gpa}</div>
                  <div className="text-slate-300 text-sm">GPA</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{education.graduationProject}</div>
                  <div className="text-slate-300 text-sm">Graduation Project</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">4</div>
                  <div className="text-slate-300 text-sm">Years of Study</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
