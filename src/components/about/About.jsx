import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Frontend Developer specializing in modern React applications and enterprise systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm <span className="text-cyan-400 font-semibold">Amany Elfawey</span>, a Frontend Developer 
                with 1.5+ years of hands-on experience building responsive React applications. Currently working at BSA Engineering Consultancy 
                on large-scale ERP systems, and also running freelance Shopify projects — building and customizing e-commerce stores for clients.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in building modern, scalable UI components — from real-time platforms using WebSocket integration to 
                complex enterprise dashboards with React Query. On the Shopify side, I customize themes, develop custom features, 
                and create complete e-commerce solutions. My strength lies in translating designs into clean, maintainable code 
                and collaborating effectively with cross-functional teams throughout the development lifecycle.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Beyond building products, I've mentored 100+ students in frontend development (HTML, CSS, JavaScript, React) through code reviews and 
                technical sessions — an experience that sharpened my communication and ability to explain technical concepts clearly.
              </p>

              {/* What I'm looking for */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5 rounded-xl border border-cyan-500/30 mt-6">
                <h4 className="text-white font-semibold mb-2">Currently Open To</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Frontend Developer roles in product teams, ERP/SaaS platforms, or modern web applications where I can contribute to building exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Key Strengths</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'React.js & TypeScript',
                  'Component Architecture',
                  'Responsive Design',
                  'Problem Solving',
                  'Cross-functional Collaboration',
                  'Code Review',
                  'Mentoring & Teaching',
                  'Clean Code'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-slate-700 text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="https://drive.google.com/file/d/18dpY-E3TMSX6f-oI3J-Bt9Gxika6AMT8/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <a 
                href="#contact"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right side - Stats/Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1.5+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-slate-300">Students Mentored</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Enterprise</div>
                <div className="text-slate-300">ERP Systems</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">A+</div>
                <div className="text-slate-300">Graduation Project</div>
              </div>
            </div>

            {/* Current Role */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-white mb-3">Current Roles</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-cyan-400 font-medium">Freelance Shopify Developer</p>
                  <p className="text-slate-300 text-sm">Building e-commerce stores</p>
                  <p className="text-slate-400 text-xs mt-1">May 2025 - Present</p>
                </div>
                <div className="border-t border-cyan-500/20 pt-3">
                  <p className="text-cyan-400 font-medium">Frontend Developer</p>
                  <p className="text-slate-300 text-sm">BSA Engineering Consultancy</p>
                  <p className="text-slate-400 text-xs mt-1">May 2025 - Present</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-6 rounded-xl border border-slate-600/30">
              <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
              <p className="text-cyan-400 font-medium">B.Sc. in Computer Science</p>
              <p className="text-slate-300 text-sm">Tanta University — Faculty of Computers and Information</p>
              <p className="text-slate-400 text-xs mt-1">Oct 2020 – Jul 2024 • GPA: 3.11</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
