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
            Frontend Developer specializing in building modern and responsive web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm <span className="text-cyan-400 font-semibold">Amany Elfawey</span>, a passionate Frontend Developer and Programming Instructor with +1 year of experience 
                specializing in React.js, Next.js, and TypeScript. I'm currently working at BSA Engineering Consultancy 
                developing large-scale ERP systems.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in web development started with a strong foundation in HTML, CSS, and JavaScript, 
                and I've continuously grown to work with modern frameworks. I specialize in creating clean, responsive interfaces 
                that deliver optimal user experiences and meet business requirements.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                As a Programming Instructor, I'm passionate about sharing knowledge and have mentored 100+ students in their 
                programming journey. This experience has strengthened my communication skills and deepened my 
                understanding of different learning approaches.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Communication Skills',
                  'Problem Solving',
                  'Adaptability & Continuous Learning',
                  'Time Management',
                  'Leadership',
                  'Teamwork & Collaboration',
                  'Mentoring & Teaching'
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
                href="https://drive.google.com/file/d/1axNWretORNgm6HXNvSzau3xOe880Md2G/view?usp=sharing" 
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
                href="#projects"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Projects
              </a>
            </div>
          </div>

          {/* Right side - Stats/Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">+1</div>
                <div className="text-slate-300">Year Experience</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-slate-300">Students Mentored</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="bg-slate-700 p-6 rounded-xl border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">A+</div>
                <div className="text-slate-300">Graduation Project</div>
              </div>
            </div>

            {/* Current Role */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-semibold text-white mb-2">Current Role</h4>
              <p className="text-cyan-400 font-medium">Frontend Developer</p>
              <p className="text-slate-300 text-sm">BSA Engineering Consultancy</p>
              <p className="text-slate-400 text-xs mt-1">May 2025 - Present</p>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-6 rounded-xl border border-slate-600/30">
              <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
              <p className="text-cyan-400 font-medium">Bachelor's in Computer Science</p>
              <p className="text-slate-300 text-sm">Tanta University</p>
              <p className="text-slate-400 text-xs mt-1">2020 - 2024 • GPA: 3.11</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
