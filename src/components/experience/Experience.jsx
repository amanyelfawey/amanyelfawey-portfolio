import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'BSA Engineering Consultancy',
      period: 'May 2025 - Present',
      type: 'Full-time',
      location: 'Egypt',
      description: 'Working on a large-scale ERP system, contributing to multiple enterprise-level projects',
      achievements: [
        'Developing and maintaining core frontend features using React.js, TypeScript, and TailwindCSS',
        'Building and optimizing reusable components to ensure consistency and scalability across the system',
        'Integrating with backend APIs using React Query to display real-time data efficiently',
        'Contributing to multiple enterprise-level projects'
      ],
      technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'React Query', 'ERP Systems'],
      current: true
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Stem AI',
      period: 'December 2024 - May 2025',
      type: 'Full-time',
      location: 'Egypt',
      description: 'Contributed to the development of RPAIR, a large-scale competition platform for robotics and programming events',
      achievements: [
        'Developed a real-time judging system with React.js and WebSocket, enabling instant score updates across all connected devices',
        'Designed responsive UI components (React.js, Tailwind CSS), ensuring seamless performance across all device types',
        'Participated in the software development lifecycle — from requirements gathering and prototyping to development, testing, and deployment',
        'Taught programming fundamentals as a Part-time Programming Instructor, guiding students through Python and Frontend concepts'
      ],
      technologies: ['React.js', 'WebSocket', 'Tailwind CSS', 'Real-time Updates', 'Python Teaching'],
      current: false
    },
    {
      id: 3,
      title: 'Frontend Mentor',
      company: 'Google DSC MTI University',
      period: '2023 - 2024',
      type: 'Part-time',
      location: 'Egypt',
      description: 'Mentored over 100 students in HTML, CSS, JavaScript, and React.js',
      achievements: [
        'Reviewed code, gave feedback, and organized technical sessions to support student growth',
        'Mentored students in developing real projects using modern technologies',
        'Organized technical workshops to enhance student skills'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Mentoring'],
      current: false
    },
    {
      id: 4,
      title: 'Frontend Development Trainee',
      company: 'Information Technology Institute (ITI)',
      period: 'December 2023 - March 2024',
      type: 'Training',
      location: 'Egypt',
      description: 'Built over 8 small web projects combining JavaScript and React.js',
      achievements: [
        'Delivered projects under tight deadlines with focus on responsiveness and clean UI',
        'Developed skills in JavaScript and React.js through practical projects',
        'Learned best practices in frontend development'
      ],
      technologies: ['JavaScript', 'React.js', 'Responsive Design', 'Clean UI'],
      current: false
    },
    {
      id: 5,
      title: 'Frontend Development Intern',
      company: 'Code Clause',
      period: 'July 2023 - August 2023',
      type: 'Internship',
      location: 'Remote',
      description: 'Completed 4 solo web development projects showcasing skills in JavaScript and layout design',
      achievements: [
        'Developed solo projects showcasing skills in JavaScript and layout design',
        'Implemented responsive web applications',
        'Learned fundamentals of frontend development'
      ],
      technologies: ['JavaScript', 'Layout Design', 'Responsive Web', 'Solo Projects'],
      current: false
    },
    {
      id: 6,
      title: 'Frontend Development Student',
      company: 'Route Academy',
      period: '2022',
      type: 'Training Program',
      location: 'Egypt',
      description: 'Completed comprehensive frontend development diploma with 10+ real-world projects',
      achievements: [
        'Built 10+ practical projects using HTML, CSS, and JavaScript',
        'Mastered responsive web design principles and best practices',
        'Developed strong foundation in modern web development',
        'Completed intensive hands-on training program'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web Development'],
      current: false
    }
  ];

  const education = {
    degree: 'Bachelor\'s in Computer Science',
    university: 'Tanta University',
    period: 'October 2020 - July 2024',
    gpa: '3.11',
    graduationProject: 'A+',
    description: 'Graduated from the Faculty of Computers and Information with a GPA of 3.11 and earned A+ in the graduation project (AI-based medical system)'
  };

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Professional <span className="text-cyan-400">Experience</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    My journey of developing skills and experience in the world of frontend development
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
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
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
                      <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
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
