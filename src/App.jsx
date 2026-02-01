import { FaMobileAlt, FaServer, FaNetworkWired, FaCogs, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaArrowRight, FaCodeBranch, FaCloud, FaShieldAlt } from "react-icons/fa"; // Added FaArrowRight, FaCodeBranch, FaCloud, FaShieldAlt for new icons

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans antialiased"> {/* Slightly darker bg, added antialiased */}

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#" className="text-white font-extrabold tracking-tight text-2xl hover:text-blue-400 transition-colors">
            Roshan<span className="text-blue-500">.Dev</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#what-i-do" className="text-gray-300 hover:text-white transition-colors">Expertise</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Systems</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Tech Stack</a>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen px-6 flex items-center pt-24 pb-12">
        {/* Background Overlay - Adjusted for better visual depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" style={{ backgroundImage: "url(/hero-bg.png)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'darken' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>


        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between relative z-10 w-full">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left md:pr-12 mt-8 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight"> {/* Larger, bolder, tighter tracking */}
              Roshan Aryal: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">System Architect</span> & Senior Mobile Engineer
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
              I build scalable mobile ecosystems from modular Flutter apps to robust Node.js backends and resilient cloud infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 shadow-lg transition-all transform hover:-translate-y-1"
              >
                Let's Talk <FaArrowRight className="ml-2 text-sm" />
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-200 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Hero Photo (already defined as your photo /hero-bg.png) - No changes here as per your instruction */}
          <div className="flex-1 mb-8 md:mb-0 flex justify-center md:justify-end">
            <img
              src="/hero-bg.png"
              alt="Roshan Aryal"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-500/50" // Added rounded-full and border
            />
          </div>
        </div>
      </section>

      {/* --- What I Do (Expertise Section) --- */}
      <section id="what-i-do" className="py-24 px-6 bg-[#0a0a0a]"> {/* Renamed ID for clarity */}
        <h2 className="text-4xl font-bold mb-6 text-center text-white">
          What I Actually Do
        </h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          I provide end-to-end solutions, bridging the gap between mobile user experience and robust, scalable backend systems.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted grid layout */}
          {[
            { title: "Mobile Engineering", desc: "Crafting highly performant & modular Flutter and Native Android applications, focusing on scalable architecture and seamless user experiences.", icon: <FaMobileAlt className="text-4xl mb-4 text-indigo-400" /> },
            { title: "Backend Systems Design", desc: "Building resilient Node.js backends with Express and MongoDB, specializing in secure APIs, efficient data handling, and microservices architecture.", icon: <FaServer className="text-4xl mb-4 text-green-400" /> },
            { title: "Network & VPN Solutions", desc: "Expert in integrating WireGuard & OpenVPN, developing native bindings for complex networking, and managing secure connection protocols.", icon: <FaNetworkWired className="text-4xl mb-4 text-yellow-400" /> },
            { title: "DevOps & Cloud Infra", desc: "Implementing CI/CD pipelines (GitHub Actions), Docker, PM2, Nginx, and VPS management for zero-downtime deployments and optimal system monitoring.", icon: <FaCloud className="text-4xl mb-4 text-pink-400" /> }, // Changed icon to FaCloud
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-3xl p-8 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 bg-[#111] transform hover:-translate-y-2"> {/* Enhanced styling */}
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-24 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Real Products, Real Impact
        </h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          Showcasing a selection of full-stack mobile systems that are live and used by hundreds of thousands of users.
        </p>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12"> {/* Increased max-w, larger gap */}
          {[
            {
              name: "Speed VPN Pro (500k+ Downloads)",
              desc: "Architected and developed a high-performance VPN ecosystem. This involved modular Flutter UI, custom Native Android (Java/Kotlin) WireGuard/OpenVPN integration, and a scalable Node.js backend managing secure user sessions, authentication, and subscriptions.",
              stack: ["Flutter","Java/Kotlin", "Node.js", "WireGuard","OpenVPN", "MongoDB"],
              image: "https://play-lh.googleusercontent.com/K5Q0Qqvwnhx8p_h-nGxa9QghOJPNiYzozRL1Q2PqJcCNr8psRj-MMOr39xJ1SP0pbuAWePBZEz5UwX6oarUci1Q=w526-h296-rw",
              playstore: "https://play.google.com/store/apps/details?id=com.aarappstudios.speedvpnpro",
              appstore: null
            },
            {
              name: "MindWell: Meditation & Wellness Platform",
              desc: "Developed an engaging mental wellness application with a clean, modular Flutter architecture. Implemented advanced state management, integrated subscription systems via RevenueCat, and ensured a production-ready, cross-platform user experience.",
              stack: ["Flutter", "Firebase", "RevenueCat", "Clean Architecture"],
              image: "https://play-lh.googleusercontent.com/68Gi1W3MvAB2dJ2vE9TxuxFualu85WuYfOfx5FKDtvjw8CUo5jFZKGnWd3T1FUD0yg=w526-h296-rw",
              playstore: "https://play.google.com/store/apps/details?id=com.example.mindwell",
              appstore: null
            }
          ].map((p, i) => (
            <div key={i} className="group bg-gray-800 border border-gray-700 rounded-3xl p-8 hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> {/* Enhanced styling */}
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-cover rounded-2xl mb-6 transform transition-transform duration-500 group-hover:scale-102 shadow-lg" // Larger image, rounded more, scale effect
                />
              )}
              <h3 className="text-3xl font-bold mb-3 text-white">{p.name}</h3> {/* Larger title */}
              <p className="text-gray-300 mb-6 leading-relaxed">{p.desc}</p> {/* Better readability */}

              <div className="flex flex-wrap gap-3 mb-6"> {/* Larger gap */}
                {p.stack.map((tech, j) => (
                  <span key={j} className="text-sm bg-gray-700 text-gray-200 px-3 py-1.5 rounded-full font-medium">{tech}</span>
                ))}
              </div>

              <div className="flex gap-4"> {/* Larger gap */}
                {p.playstore && <a href={p.playstore} target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-2.5 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md">Play Store <FaArrowRight className="ml-2 text-sm" /></a>}
                {p.appstore && <a href={p.appstore} target="_blank" rel="noopener noreferrer" className="flex items-center px-5 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-md">App Store <FaArrowRight className="ml-2 text-sm" /></a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Skills / Tech Stack --- */}
      <section id="skills" className="py-24 px-6 bg-[#0a0a0a] text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">
          My Comprehensive Tech Stack
        </h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          Leveraging a robust set of tools and platforms to build efficient, scalable, and maintainable systems.
        </p>

        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6"> {/* Increased max-w, larger gaps */}
          {[
            "Flutter", "Dart", "Android (Kotlin & Java)", "Node.js", "Express.js", "MongoDB Atlas", "SQL/PostgreSQL",
            "WireGuard", "OpenVPN", "Docker", "PM2", "Nginx", "Linux Server Admin", "CI/CD (GitHub Actions)",
            "RevenueCat", "Firebase", "REST APIs", "WebSockets", "Cloudflare", "Git", "Jira/Trello", "Microservices"
          ].map((skill, i) => (
            <span key={i} className="px-5 py-2 bg-gray-800 text-gray-200 rounded-full text-base font-medium hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">{skill}</span> // Enhanced styling
          ))}
        </div>
      </section>

      {/* --- Work Experience Section --- */}
      <section id="experience" className="py-24 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <FaBriefcase className="inline-block text-blue-400 text-4xl mr-4 mb-2" /> Professional Journey
        </h2>

        <div className="max-w-3xl mx-auto space-y-16"> {/* Increased space-y */}

          {/* Job 1: Aryal Technology (Your Own Venture - consolidated) */}
          <div className="relative pl-8 md:pl-20 group">
            <div className="absolute left-0 md:left-8 top-1 h-full w-1 bg-gray-800 group-hover:bg-blue-500 transition-colors duration-300"></div>
            <div className="absolute left-0 md:left-8 top-0 w-5 h-5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center text-xs text-white">
              <FaCodeBranch /> {/* Icon for founder/branching out */}
            </div>
            <h3 className="text-3xl font-semibold text-white">Founder & Lead Engineer</h3> {/* Larger title */}
            <p className="text-gray-400 text-xl mb-2">Aryal Technology, Pokhara, Nepal</p> {/* Larger text */}
            <p className="text-gray-500 text-base mb-6">Jan 2020 – Present</p> {/* Larger text, more mb */}
            <ul className="list-disc list-inside text-gray-300 space-y-3"> {/* Larger space-y */}
              <li>Architected, developed, and launched multiple production mobile applications (Flutter), including a VPN service (500k+ downloads) and a mental wellness platform (MindWell).</li>
              <li>Designed and implemented robust Node.js backends, managing MongoDB Atlas, secure session handling, authentication (JWT), and custom API rate limiting for scalable performance.</li>
              <li>Managed end-to-end cloud infrastructure (Linux VPS, PM2, Nginx, SSL), ensuring high availability, scalability, and cost-efficiency for live production systems.</li>
              <li>Developed custom Native Android bridges (Java/Kotlin) for Flutter to integrate advanced OS-level functionalities like VPN services and background processing.</li>
              <li>Spearheaded CI/CD pipelines and automated deployments, enabling rapid iteration and zero-downtime releases across various environments.</li>
            </ul>
          </div>

          {/* Job 2: Hamro Patro Inc. */}
          <div className="relative pl-8 md:pl-20 group">
            <div className="absolute left-0 md:left-8 top-1 h-full w-1 bg-gray-800 group-hover:bg-blue-500 transition-colors duration-300"></div>
            <div className="absolute left-0 md:left-8 top-0 w-5 h-5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center text-xs text-white">
              <FaCogs /> {/* Icon for development/maintenance */}
            </div>
            <h3 className="text-3xl font-semibold text-white">Android Developer</h3>
            <p className="text-gray-400 text-xl mb-2">Hamro Patro Inc., Kathmandu, Nepal</p>
            <p className="text-gray-500 text-base mb-6">Aug 2023 – April 2024</p>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Maintained and enhanced the flagship **Hamro Patro Android application**, catering to a large user base with high-performance and stability requirements.</li>
              <li>Implemented critical new features and modules, ensuring seamless integration with existing complex codebase and third-party services.</li>
              <li>Identified and resolved complex bugs, optimized app performance, and improved user experience through diligent code review and testing.</li>
              <li>Collaborated with product and design teams to translate requirements into technical specifications, actively contributing to feature roadmap and delivery.</li>
            </ul>
          </div>

        </div>
      </section>


      {/* --- Education Section --- */}
      <section id="education" className="py-24 px-6 bg-[#0a0a0a] text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <FaGraduationCap className="inline-block text-blue-400 text-4xl mr-4 mb-2" /> Education
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative pl-8 md:pl-20 group">
            <div className="absolute left-0 md:left-8 top-1 h-full w-1 bg-gray-800 group-hover:bg-blue-500 transition-colors duration-300"></div>
            <div className="absolute left-0 md:left-8 top-0 w-5 h-5 rounded-full bg-blue-600 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center text-xs text-white">
              <FaShieldAlt /> {/* Icon for academic achievement */}
            </div>
            <h3 className="text-3xl font-semibold text-white">BE Computer Engineering</h3>
            <p className="text-gray-400 text-xl mb-1">Pokhara University</p>
            <p className="text-gray-500 text-base">Graduated: 2023</p>
          </div>
        </div>
      </section>


      {/* --- Hobbies / Interests --- */}
      <section id="hobbies" className="py-24 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Beyond the Code
        </h2>
        <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
          When I'm not building systems, I find balance and inspiration through...
        </p>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Music", image: "https://img.drz.lazcdn.com/static/np/p/def69ea6d9de77bd65e19fd0435caefa.jpg_720x720q80.jpg" },
            { name: "Traveling", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDYONMzfxBBGpFfn-GxfMa3Gq3fWjoCltwA&s" },
            { name: "Photography", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Added a third hobby example
            { name: "Reading", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, // Added a fourth hobby example
          ].map((hobby, i) => (
            <div key={i} className="flex flex-col items-center text-center group bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"> {/* Enhanced styling */}
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-gray-600 group-hover:border-blue-500 transition-colors duration-300">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="font-semibold text-xl text-white group-hover:text-blue-400 transition-colors">{hobby.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 px-6 bg-[#0a0a0a] text-white">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Let's Build Something Great Together
        </h2>

        <p className="text-lg text-gray-400 mb-10 text-center max-w-2xl mx-auto">
          Whether you need a full-stack mobile system or specialized expertise, I'm ready to discuss your project.
        </p>

        {/* Location */}
        <div className="flex justify-center items-center gap-2 mt-3 mb-12 text-gray-500">
          <FaMapMarkerAlt className="text-base text-blue-400" />
          <span className="text-base">
           Pokhara , Nepal 33700
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="mailto:roshanar.dev@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-all transform hover:-translate-y-1"
          >
            <FaEnvelope className="text-xl" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/roshanaryal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-200 rounded-xl hover:border-white hover:text-white hover:shadow-md transition-all"
          >
            <FaLinkedin className="text-xl text-blue-400" />
            Connect on LinkedIn
          </a>

          <a
            href="https://github.com/roshanaryal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-200 rounded-xl hover:border-white hover:text-white hover:shadow-md transition-all"
          >
            <FaGithub className="text-xl text-gray-400" />
            View My GitHub
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 text-center bg-[#111] border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Roshan Aryal. All rights reserved. Built with passion and code.
        </p>
      </footer>

    </div>
  )
}

export default App;