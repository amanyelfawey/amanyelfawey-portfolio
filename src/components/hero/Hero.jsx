import React from 'react';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center space-y-6 animate-fade-in-up">
          {/* Profile image for mobile */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-500/30 relative group">
                <img 
                  src={profileImage} 
                  alt="Amany Elfawey - Front-End Developer" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Text content for mobile */}
          <div className="space-y-4 text-center">
            {/* Name */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Amany</span>{' '}
              <span className="text-cyan-400">Elfawey</span>
            </h1>
            
             {/* Role */}
             <div className="space-y-4">
               <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium">
                 Frontend Developer & Programming Instructor
               </h2>
              {/* <div className="flex flex-wrap gap-3 text-lg text-cyan-300">
                <span className="bg-slate-800 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">React</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">Next.js</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">TypeScript</span>
                <span className="bg-slate-800 px-4 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">Tailwind</span>
              </div> */}
            </div>
            
             {/* Tagline */}
             <div className="max-w-lg">
               <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300 mb-4">
                 Where Creativity Meets Code
               </div>
               <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed">
               I design and develop modern, user-friendly websites that turn creative ideas into real, functional experiences.
               </p>
             </div>
            
             {/* Key Highlights */}
             <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300">
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                 <span>2+ Years Experience</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                 <span>15+ Projects Delivered</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                 <span>100+ Students Mentored</span>
               </div>
             </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
              <a 
                href="#projects"
                className="group bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact"
                className="group border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Let's Connect</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/amanyelfawey" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/amanyelfawey/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Name */}
            <h1 className="text-7xl font-bold leading-tight">
              <span className="text-white">Amany</span>{' '}
              <span className="text-cyan-400">Elfawey</span>
            </h1>
            
             {/* Role */}
             <div className="space-y-4">
               <h2 className="text-2xl text-slate-300 font-medium">
                 Frontend Developer & Programming Instructor
               </h2>
            </div>
            
             {/* Tagline */}
             <div className="max-w-lg">
               <div className="text-3xl font-bold text-cyan-300 mb-4">
                 Where Creativity Meets Code
               </div>
               <p className="text-xl text-slate-400 leading-relaxed">
               I design and develop modern, user-friendly websites that turn creative ideas into real, functional experiences.
               </p>
             </div>
            
             {/* Key Highlights */}
             <div className="flex flex-wrap gap-4 text-sm text-slate-300">
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                 <span>2+ Years Experience</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                 <span>15+ Projects Delivered</span>
               </div>
               <div className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                 <span>100+ Students Mentored</span>
               </div>
             </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="#projects"
                className="group bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact"
                className="group border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Let's Connect</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/amanyelfawey" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/amanyelfawey/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right side - Profile image (Desktop only) */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              {/* Profile image container */}
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-cyan-500/30 relative group">
                <img 
                  src={profileImage} 
                  alt="Amany Elfawey - Front-End Developer" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Professional badge */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="bg-cyan-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-center">
                    <p className="text-sm font-semibold">Available for Projects</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-300 rounded-full opacity-40 animate-bounce"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-300 rounded-full opacity-50 animate-ping"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
