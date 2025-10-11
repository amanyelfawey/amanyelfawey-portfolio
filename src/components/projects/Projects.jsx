import React from 'react';
import rpairImage from '../../assets/projects/rpair.jpg';
import medixImage from '../../assets/projects/medix.jpg';
import todoImage from '../../assets/projects/todo.jpg';
import charityImage from '../../assets/projects/charity.jpg';
import simoneImage from '../../assets/projects/simone.jpg';
import danielsImage from '../../assets/projects/daniels.jpg';
import quoteImage from '../../assets/projects/quote.jpg';
import crudImage from '../../assets/projects/crud.jpg';
import yummyImage from '../../assets/projects/yummy.jpg';
import bakeryImage from '../../assets/projects/bakery.jpg';
import translateImage from '../../assets/projects/translate.jpg';

const Projects = () => {
  const projects = [
    // Professional Enterprise Projects
    {
      id: 1,
      title: 'RPAIR - Robotics Competition Platform',
      description: 'Enterprise-level competition management system for robotics and programming events with real-time scoring and live updates',
      longDescription: 'Built a comprehensive competition platform serving thousands of participants with real-time judging, automated scoring, participant registration, and live leaderboards. Features include role-based access control, real-time WebSocket communication, and responsive dashboards for judges and participants',
      image: rpairImage,
      technologies: ['React.js', 'WebSocket', 'Tailwind CSS', 'Real-time Updates'],
      githubLink: null, // Private repository
      demoLink: 'https://rpair.org/',
      featured: true,
      category: 'Enterprise Platform'
    },
    {
      id: 2,
      title: 'Medix - AI-Powered Medical Platform',
      description: 'Intelligent healthcare platform with AI-driven MRI analysis, appointment scheduling, and patient management system',
      longDescription: 'Developed a cutting-edge medical platform integrating AI technology for MRI analysis and diagnosis. Features include intelligent appointment scheduling, patient data management, AI-powered diagnostic assistance, and secure role-based access for doctors, patients, and administrators',
      image: medixImage,
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'AI Integration', 'Authentication'],
      githubLink: 'https://github.com/amanyelfawey/Medix',
      demoLink: 'https://drive.google.com/file/d/1iL8GScZkv55Em1OYKHR1a2iLIjbxLhcI/view?usp=sharing',
      featured: true,
      category: 'AI/Medical'
    },
    
    // Modern Web Applications
            {
              id: 3,
              title: 'Yummy - Smart Recipe Discovery',
              description: 'Interactive recipe finder with advanced search, ingredient tracking, and personalized meal recommendations',
              longDescription: 'Created an intelligent recipe discovery platform with dynamic search capabilities, ingredient-based filtering, and personalized recommendations. Features include real-time API integration, responsive design, and user-friendly interface for exploring thousands of recipes with detailed cooking instructions',
              image: yummyImage,
              technologies: ['HTML5', 'CSS3', 'JavaScript', 'External API', 'Responsive Design'],
              githubLink: 'https://github.com/amanyelfawey/Yummy-Recipe-Project',
              demoLink: 'https://amanyelfawey.github.io/Yummy-Recipe-Project/',
              featured: true,
              category: 'Food & Recipe'
            },
    {
      id: 4,
      title: 'CRUDS - Advanced Product Manager',
      description: 'Full-featured product management system with CRUD operations, advanced filtering, and inventory tracking',
      longDescription: 'Developed a comprehensive product management solution with complete CRUD functionality, advanced search and filtering capabilities, category management, and inventory tracking. Features include responsive design, data validation, and intuitive user interface for efficient product management',
      image: crudImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'CRUD Operations', 'Search Functionality', 'Responsive Design'],
      githubLink: 'https://github.com/amanyelfawey/CRUDS',
      demoLink: 'https://amanyelfawey.github.io/CRUDS/',
      featured: true,
      category: 'Management System'
    },
    {
      id: 5,
      title: 'TaskFlow - Smart Task Manager',
      description: 'Intelligent task management with priority levels, smart filtering, and productivity analytics',
      longDescription: 'Created a modern task management application with advanced features including priority-based task organization, intelligent filtering, status tracking, and productivity insights. Features include React.js architecture, local storage persistence, and responsive dark theme design',
      image: todoImage,
      technologies: ['React.js', 'Vite', 'JavaScript', 'CSS3', 'Local Storage', 'Responsive Design'],
      githubLink: 'https://github.com/amanyelfawey/todo-list-app',
      demoLink: 'https://amanyelfawey.github.io/todo-list-app/',
      featured: true,
      category: 'Task Management'
    },
            {
              id: 6,
              title: 'LinguaFlow - Smart Translator',
              description: 'Advanced multi-language translation platform with real-time processing and voice integration',
              longDescription: 'Developed a sophisticated translation application with support for multiple languages, real-time text processing, voice-to-text functionality, and intelligent language detection. Features include responsive design, offline capabilities, and seamless user experience across all devices',
              image: translateImage,
              technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design'],
              githubLink: 'https://github.com/amanyelfawey/Live-Language-Translation',
              demoLink: 'https://amanyelfawey.github.io/Live-Language-Translation/',
              featured: true,
              category: 'Web Application'
            },
    
    // Portfolio & Design Projects
    {
      id: 7,
      title: 'Simone Portfolio - Professional Showcase',
      description: 'Elegant portfolio website featuring modern design, interactive elements, and comprehensive project showcase',
      longDescription: 'Designed and developed a sophisticated portfolio website with advanced features including smooth animations, interactive navigation, dynamic content filtering, and responsive design. Features include animated counters, progress indicators, contact form validation, and seamless user experience across all devices',
      image: simoneImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations', 'Form Validation'],
      githubLink: 'https://github.com/amanyelfawey/Simone-Project',
      demoLink: 'https://amanyelfawey.github.io/Simone-Project/',
      featured: true,
      category: 'Portfolio Website'
    },
    {
      id: 8,
      title: 'Daniels Portfolio - Creative Showcase',
      description: 'Stunning UI/UX designer portfolio with interactive galleries, skill visualizations, and client testimonials',
      longDescription: 'Crafted a visually striking portfolio website showcasing design expertise with interactive project galleries, animated skill progress bars, client testimonials, and blog integration. Features include responsive design, smooth animations, and modern UI/UX principles for optimal user engagement',
      image: danielsImage,
      technologies: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX Design', 'Portfolio Filtering'],
      githubLink: 'https://github.com/amanyelfawey/Daniels-Project',
      demoLink: 'https://amanyelfawey.github.io/Daniels-Project/',
      featured: true,
      category: 'Portfolio Website'
    },
    
    // Business & Commercial Projects
            {
              id: 9,
              title: 'SweetBakery - Online Store',
              description: 'Elegant bakery e-commerce platform with product catalog, online ordering, and customer management',
              longDescription: 'Created a comprehensive bakery e-commerce solution featuring beautiful product galleries, secure online ordering system, customer account management, and order tracking. Features include responsive design, payment integration, and modern UI/UX for enhanced customer experience',
              image: bakeryImage,
              technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'E-commerce'],
              githubLink: 'https://github.com/amanyelfawey/Bakery-Project',
              demoLink: 'https://amanyelfawey.github.io/Bakery-Project/',
              featured: true,
              category: 'E-commerce'
            },
    {
      id: 10,
      title: 'HopeBridge - Charity Platform',
      description: 'Comprehensive charity foundation website with donation management, program tracking, and community engagement',
      longDescription: 'Developed a full-featured charity platform with secure donation processing, program management, volunteer coordination, and community engagement tools. Features include responsive design, donation tracking, program showcases, and integrated blog for community updates and success stories',
      image: charityImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Donation System'],
      githubLink: 'https://github.com/amanyelfawey/charity-project-main',
      demoLink: 'https://amanyelfawey.github.io/charity-project-main/',
      featured: true,
      category: 'Charity/Non-profit'
    },
    {
      id: 11,
      title: 'InspireMe - Quote Generator',
      description: 'Dynamic inspiration platform with curated quotes, motivational content, and social sharing features',
      longDescription: 'Created an engaging quote application with intelligent quote curation, category-based filtering, and social sharing capabilities. Features include clean, modern UI design, responsive layout, and instant quote generation with smooth animations for enhanced user experience',
      image: quoteImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design'],
      githubLink: 'https://github.com/amanyelfawey/Quote-App',
      demoLink: 'https://amanyelfawey.github.io/Quote-App/',
      featured: true,
      category: 'Web Application'
    }
  ];

  // Show all projects as featured
  const allProjects = projects;

  return (
            <section id="projects" className="py-20 bg-slate-800">
              <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Featured <span className="text-cyan-400">Projects</span>
                  </h2>
                  <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                    A collection of projects that showcase my skills and experience in frontend development
                  </p>
                </div>

                {/* All Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {allProjects.map((project, index) => (
                      <div 
                        key={project.id}
                        className={`bg-slate-700 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group animate-fade-in-scale animate-delay-${(index % 3 + 1) * 100}`}
                      >
                        {/* Project Image */}
                        <div className="relative overflow-hidden bg-slate-800 flex items-center justify-center">
                  {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain bg-slate-800"
                      />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white text-2xl font-bold">P</span>
                        </div>
                        <p className="text-slate-300 text-sm">Project Screenshot</p>
                      </div>
                    </div>
                  )}
                </div>

                        {/* Project Content */}
                        <div className="p-8">
                  <div className="mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
                    <h4 className="text-2xl font-bold text-white mt-2 mb-4">{project.title}</h4>
                    <p className="text-slate-300 leading-relaxed text-lg">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-slate-600 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4">
                            {project.githubLink ? (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-center text-lg"
                              >
                                GitHub
                              </a>
                            ) : (
                              <div className="flex-1 bg-slate-700 text-slate-400 font-semibold py-4 px-6 rounded-lg text-center cursor-not-allowed text-lg">
                                Private Repo
                              </div>
                            )}
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 text-center text-lg"
                            >
                              View Project
                            </a>
                          </div>
                </div>
              </div>
            ))}
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">Want to see more projects?</p>
          <a 
            href="https://github.com/amanyelfawey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
