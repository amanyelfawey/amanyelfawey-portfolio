import React, { useState } from 'react';
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
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = [
    {
      id: 1,
      title: 'RPAIR — Competition Management Platform',
      description: 'Large-scale robotics/programming competition platform with real-time judging',
      role: 'Frontend Developer — UI for registration, exams, and judge dashboards',
      challenge: 'Needed real-time score updates across all connected devices during live events',
      solution: 'Integrated WebSocket for live data synchronization; built responsive React components for judges and participants',
      impact: 'Enabled instant scoring updates across devices; supported live competition platform for robotics events',
      image: rpairImage,
      technologies: ['React.js', 'WebSocket', 'Tailwind CSS', 'Real-time Updates'],
      githubLink: null,
      demoLink: 'https://rpair.org/',
      featured: true,
      category: 'Enterprise Platform'
    },
    {
      id: 2,
      title: 'Medix — AI Medical Platform',
      description: 'AI-powered medical platform (graduation project) for appointment booking and MRI analysis',
      role: 'Frontend Developer — Responsive UI, authentication flows, role-based access',
      challenge: 'Required secure role-based access for doctors, patients, and admins with AI-driven MRI analysis',
      solution: 'Built with Next.js and React; implemented auth flows and role-specific dashboards; integrated with AI backend',
      impact: 'Graduation project earned A+ grade; delivered complete medical booking and analysis platform',
      image: medixImage,
      technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Authentication', 'Role-based Access'],
      githubLink: 'https://github.com/amanyelfawey/Medix',
      demoLink: 'https://drive.google.com/file/d/1iL8GScZkv55Em1OYKHR1a2iLIjbxLhcI/view?usp=sharing',
      featured: true,
      category: 'AI / Medical'
    },
    {
      id: 3,
      title: 'Yummy — Recipe Explorer',
      description: 'Recipe discovery app with external API integration for meal browsing',
      role: 'Solo Developer — UI design, API integration, responsive layout',
      challenge: 'Needed fast, user-friendly recipe browsing with external API',
      solution: 'Integrated meal API with dynamic search and filtering; built responsive interface with vanilla JavaScript',
      impact: 'Clean, fast recipe browsing experience across devices',
      image: yummyImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'External API'],
      githubLink: 'https://github.com/amanyelfawey/Yummy-Recipe-Project',
      demoLink: 'https://amanyelfawey.github.io/Yummy-Recipe-Project/',
      featured: true,
      category: 'Web Application'
    },
    {
      id: 4,
      title: 'Task Flow — Smart Task Manager',
      description: 'Task management app with priority levels, filtering, and local storage',
      role: 'Solo Developer — React architecture, state management, UI design',
      challenge: 'Needed intuitive task organization with priority tracking',
      solution: 'Built with React and Vite; implemented priority-based filtering and persistent local storage',
      impact: 'Clean task management interface with smooth UX',
      image: todoImage,
      technologies: ['React.js', 'Vite', 'JavaScript', 'Local Storage'],
      githubLink: 'https://github.com/amanyelfawey/todo-list-app',
      demoLink: 'https://amanyelfawey.github.io/todo-list-app/',
      featured: true,
      category: 'Task Management'
    }
  ];

  const moreProjects = [
    {
      id: 5,
      title: 'CRUDS — Product Manager',
      description: 'Product management system with CRUD operations and inventory tracking',
      image: crudImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'CRUD'],
      githubLink: 'https://github.com/amanyelfawey/CRUDS',
      demoLink: 'https://amanyelfawey.github.io/CRUDS/',
      category: 'Management System'
    },
    {
      id: 6,
      title: 'LinguaFlow — Translator',
      description: 'Multi-language translation with real-time processing',
      image: translateImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API'],
      githubLink: 'https://github.com/amanyelfawey/Live-Language-Translation',
      demoLink: 'https://amanyelfawey.github.io/Live-Language-Translation/',
      category: 'Web Application'
    },
    {
      id: 7,
      title: 'Simone Portfolio',
      description: 'Professional portfolio with modern design and animations',
      image: simoneImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/amanyelfawey/Simone-Project',
      demoLink: 'https://amanyelfawey.github.io/Simone-Project/',
      category: 'Portfolio'
    },
    {
      id: 8,
      title: 'Daniels Portfolio',
      description: 'UI/UX designer portfolio with interactive galleries',
      image: danielsImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/amanyelfawey/Daniels-Project',
      demoLink: 'https://amanyelfawey.github.io/Daniels-Project/',
      category: 'Portfolio'
    },
    {
      id: 9,
      title: 'SweetBakery Store',
      description: 'E-commerce bakery platform with product catalog',
      image: bakeryImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/amanyelfawey/Bakery-Project',
      demoLink: 'https://amanyelfawey.github.io/Bakery-Project/',
      category: 'E-commerce'
    },
    {
      id: 10,
      title: 'HopeBridge Charity',
      description: 'Charity foundation website with donation features',
      image: charityImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/amanyelfawey/charity-project-main',
      demoLink: 'https://amanyelfawey.github.io/charity-project-main/',
      category: 'Non-profit'
    },
    {
      id: 11,
      title: 'InspireMe Quotes',
      description: 'Quote generator with social sharing',
      image: quoteImage,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/amanyelfawey/Quote-App',
      demoLink: 'https://amanyelfawey.github.io/Quote-App/',
      category: 'Web App'
    }
  ];

  const renderFeaturedCard = (project, index) => (
    <div 
      key={project.id}
      className={`bg-slate-700 rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group animate-fade-in-scale animate-delay-${(index % 2 + 1) * 100}`}
    >
      <div className="relative overflow-hidden bg-slate-800 flex items-center justify-center">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain bg-slate-800"
          />
        )}
      </div>

      <div className="p-8">
        <div className="mb-4">
          <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
          <h4 className="text-2xl font-bold text-white mt-2 mb-3">{project.title}</h4>
          <p className="text-slate-300 text-base mb-4">{project.description}</p>
          
          {/* Case Study Details */}
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-cyan-400 font-semibold">Role: </span>
              <span className="text-slate-300">{project.role}</span>
            </div>
            {project.challenge && (
              <div>
                <span className="text-cyan-400 font-semibold">Challenge: </span>
                <span className="text-slate-300">{project.challenge}</span>
              </div>
            )}
            {project.solution && (
              <div>
                <span className="text-cyan-400 font-semibold">Solution: </span>
                <span className="text-slate-300">{project.solution}</span>
              </div>
            )}
            {project.impact && (
              <div>
                <span className="text-cyan-400 font-semibold">Impact: </span>
                <span className="text-slate-300">{project.impact}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 mt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="bg-slate-600 text-cyan-300 px-3 py-1 rounded-full text-xs border border-cyan-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
            >
              GitHub
            </a>
          ) : (
            <div className="flex-1 bg-slate-700 text-slate-400 font-semibold py-3 px-6 rounded-lg text-center cursor-not-allowed">
              Private
            </div>
          )}
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
          >
            View Live
          </a>
        </div>
      </div>
    </div>
  );

  const renderSimpleCard = (project, index) => (
    <div 
      key={project.id}
      className="bg-slate-700 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
    >
      <div className="relative overflow-hidden bg-slate-800 h-48 flex items-center justify-center">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      <div className="p-6">
        <span className="text-cyan-400 text-xs font-medium">{project.category}</span>
        <h4 className="text-lg font-bold text-white mt-1 mb-2">{project.title}</h4>
        <p className="text-slate-300 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-slate-600 text-cyan-300 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-600 hover:bg-slate-500 text-white text-sm font-semibold py-2 rounded-lg transition-all text-center"
          >
            GitHub
          </a>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold py-2 rounded-lg transition-all text-center"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-world applications built with modern frontend technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mb-12">
          {featuredProjects.map((project, index) => renderFeaturedCard(project, index))}
        </div>

        {/* More Projects Toggle */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            aria-expanded={showMore}
          >
            {showMore ? 'Hide Additional Projects' : 'View More Projects'}
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {showMore && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Additional <span className="text-cyan-400">Work</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {moreProjects.map((project, index) => renderSimpleCard(project, index))}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">Explore more on GitHub</p>
          <a 
            href="https://github.com/amanyelfawey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
