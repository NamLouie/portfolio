import './App.css'


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 flex">
        {/* Left Sidebar Header */}
        <header className="w-full lg:w-96 bg-black/40 backdrop-blur-xl shadow-2xl min-h-screen lg:fixed left-0 top-0 border-r border-gray-700/50">
          <div className="p-6 lg:p-8 h-full flex flex-col">
            {/* Profile Picture - Centered */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                    <img 
                      src="/assets/profile.jpg" 
                      alt="profile picture" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-black animate-pulse"></div>
              </div>
            </div>
            
            {/* Name - Below Profile Picture */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-3 animate-pulse">
                Rommel Louie Sumande
              </h1>
              <div className="relative">
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold mb-4">
                  Software QA Engineer
                </p>
                <div className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="mb-10">
              <ul className="space-y-3">
                {['About', 'Skills', 'Experience','Projects','Education','Contact'].map((item, index) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="group flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="font-medium">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Quick Contact Info */}
            <div className="space-y-4 mt-auto">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">louiesumande08@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors p-3 rounded-xl hover:bg-white/5">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Iloilo City</span>
              </div>
            </div>
          </div>
        </header>

        {/* Right Side Content - Now takes full available width */}
        <main className="flex-1 p-6 lg:p-8 w-full lg:ml-96">
          {/* Hero Section */}
          <section className="mb-12 text-center">
            <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-6">
            Portfolio
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">About Me</h2>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed">
               Detail-oriented Software QA Engineer with hands-on experience in manual testing, UI/UX design,
              and web application development. Proficient in Playwright and Cucumber frameworks, with a solid
              foundation in test case creation, functional testing, and CI/CD deployment. Adept at identifying
              bugs, enhancing usability, and collaborating in agile development teams.
            </p>
          </section>

          {/* Technical Skills Section */}
          <section id="skills" className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
             <div className="group/skill relative overflow-hidden">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                  {/* JavaScript SVG Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
                  </svg>
                </div>
                <h3 className="text-center font-bold text-white text-lg">JavaScript</h3>
              </div>
            </div>

            <div className="group/skill relative overflow-hidden">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                  {/* Simple test/check icon representing BDD testing */}
                   <img 
                          src="/assets/cucumber.png" 
                          alt="Cucumber logo" 
                          className="w-9 h-9 object-contain" 
                        />     
                </div>
                <h3 className="text-center font-bold text-white text-lg">Cucumber</h3>
              </div>
            </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                          <img 
                          src="/assets/playwright-seeklogo.png" 
                          alt="Playwright logo" 
                          className="w-9 h-9 object-contain" 
                        />      
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">Playwright</h3>
                </div>
              </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                     <img 
                          src="/assets/jira.png" 
                          alt="jira logo" 
                          className="w-9 h-9 object-contain" 
                        />     
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">Jira</h3>
                </div>
              </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                    <img 
                          src="/assets/figma.png" 
                          alt="figma logo" 
                          className="w-9 h-9 object-contain" 
                        />     
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">Figma</h3>
                </div>
              </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                    <img 
                          src="/assets/devops.png" 
                          alt="devops logo" 
                          className="w-9 h-9 object-contain" 
                        />   
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">CI/CD</h3>
                </div>
              </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                    <img 
                          src="/assets/github-sign.png" 
                          alt="github logo" 
                          className="w-9 h-9 object-contain" 
                        />   
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">Github</h3>
                </div>
              </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                    <span className="text-white font-black text-lg">M</span>
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">Manual testing</h3>
                </div>
              </div>

              <div className="group/skill relative overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-xl group-hover/skill:rotate-12 transition-transform">
                    <img 
                          src="/assets/bootstrap.png" 
                          alt="bootstrap logo" 
                          className="w-9 h-9 object-contain" 
                        />   
                  </div>
                  <h3 className="text-center font-bold text-white text-lg">Bootstrap</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6.586l-1.293-1.293A1 1 0 0115 12h-2V8H7v4H5a1 1 0 00-.707.293L3 13.586V8a2 2 0 012-2h1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">Experience</h2>
            </div>
            <div className="space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-400/50 to-transparent"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Internship, Prometheus</h3>
                    <span className="text-blue-400 font-bold text-lg bg-blue-400/20 px-4 py-1 rounded-full">Feb 2025 - May 2025</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-lg">Software Quality Assurance and UI/UX Intern</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Implemented automated testing frameworks with Playwright and Cucumber</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Created test cases and test scripts for web applications</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Performed manual testing</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Joined beta testing for Goozam Mobile App</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Redesigned and researched user experience improvements for specific sections of the Prometheus and WARP Website, enhancing usability and visual design </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full shadow-lg"></div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Thesis, University of San Agustin</h3>
                    <span className="text-green-400 font-bold text-lg bg-green-400/20 px-4 py-1 rounded-full">2024 - 2025</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-lg">Developed a Web Application for Peer-to-Peer Support and Mentoring</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Created a Web Application using Laravel, MySQL, JavaScript, and Bootstrap</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Lead the tester to test the web application, providing them with the necessary functions and features to test</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Deployed the web application using CI/CD pipeline Github Actions</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-gray-300">Performed functional testing throughout the development phase to ensure core features worked as intended</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* My Projects Section */}
          <section id="projects" className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">My Projects</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Project 1 - Peer-to-Peer Support Platform */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 group/project">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover/project:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">Laravel</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">JavaScript</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Peer-to-Peer Support & Mentoring Platform</h3>
                <img src="assets/Landing.png" alt="Landing Page" className="w-full h-100 rounded-2xl mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A comprehensive web application designed to connect students and professionals for peer support and mentoring. 
                  Features include user matching, messaging system, and progress tracking.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Built with Laravel backend and MySQL database</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Responsive frontend using Bootstrap and JavaScript</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>CI/CD deployment using GitHub Actions</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-center">
                    View Project
                  </a>
                </div>
              </div>

              {/* Project 2 - Test Automation Framework */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 group/project">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl group-hover/project:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium">Playwright</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium">Cucumber</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Internship QA Documentation</h3>
                <img src="assets/QA_internship.png" alt="QA Internship Project" className="w-full h-100 rounded-2xl mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  For my internship QA project, I documented detailed test scenarios and test cases in Notion to showcase my work. The automation scripts built with Playwright and Cucumber were confidential, but the documentation highlights my process in structuring tests, defining expected results, and ensuring traceability.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Cross-browser testing with Playwright</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Documented test cases and scenarios using spreadsheets</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>Performed manual testing</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.notion.so/Internship-Prometheus-25a5086a787380f39f83d2bfa9d784a8?source=copy_link" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-center">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mb-12 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Bachelor's Degree in Information Technology</h3>
                  <span className="text-purple-400 font-bold text-lg bg-purple-400/20 px-4 py-1 rounded-full">2021 - 2025</span>
                </div>
                <p className="text-gray-300 mb-3 text-lg">University of San Agustin</p>
                <p className="text-gray-300">
                  Relevant coursework in software engineering, testing methodologies, and quality assurance
                </p>
              </div>
              
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
            </div>
            <p className="text-gray-300 text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss quality assurance, testing automation, or any other tech topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:your.email@example.com"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Send Email
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/rommel-louie-sumande-b8b74526b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gray-500/50 border border-gray-600"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
              <a
                href="https://github.com/NamLouie"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-black/50 border border-gray-700"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App