import { FaMobileAlt, FaServer, FaNetworkWired, FaCogs, FaLinkedin, FaGithub, FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";

function App() {
  return (
    <div className="bg-black text-white font-sans">

      {/* Hero */}
      <section className="relative h-screen px-6 flex items-center">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between relative z-10">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left md:pr-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Roshan Aryal
            </h1>

            <p className="text-lg md:text-xl text-white max-w-xl mb-8">
              Senior Mobile Engineer — Flutter • Android • Backend • DevOps <br />
              Building scalable apps, backend systems, and full-stack products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 shadow-md transition"
              >
                Hire Me
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Hero Photo */}
          <div className="flex-1 mb-8 md:mb-0 flex justify-center md:justify-end">
            <img
              src="/hero-bg.png" // replace with your image path
              alt="Roshan Aryal"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24 px-6 mx-auto bg-gray-900">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          What I Actually Do
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Mobile Apps", desc: "Flutter & Native Android apps used by real users. Modular architecture, clean state management, production-ready.", icon: <FaMobileAlt className="text-4xl mb-4 text-indigo-400" /> },
            { title: "Backend Systems", desc: "Node.js, Express, MongoDB. Authentication, subscriptions, sessions, scalable APIs.", icon: <FaServer className="text-4xl mb-4 text-green-400" /> },
            { title: "VPN & Networking", desc: "WireGuard & OpenVPN integration, native bindings, session handling, server management.", icon: <FaNetworkWired className="text-4xl mb-4 text-yellow-400" /> },
            { title: "DevOps & CI/CD", desc: "VPS setup, PM2, Docker, GitHub Actions, zero-downtime deployments.", icon: <FaCogs className="text-4xl mb-4 text-pink-400" /> },
          ].map((item, i) => (
            <div key={i} className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:shadow-lg transition bg-black">
              <div className="flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:scale-105">
                {item.icon}
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-black text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Real Products I've Built
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Speed VPN Pro (500k+ Downloads)",
            desc: "Production-ready VPN apps with modular Flutter architecture. Integrated in-app purchases, scalable backend handling for user sessions and authentication, plus seamless WireGuard & OpenVPN VPN integration."
,               stack: ["Flutter","Java/Kotlin", "Node.js", "WireGuard","OpenVPN", "MongoDB"],
              image: "https://play-lh.googleusercontent.com/K5Q0Qqvwnhx8p_h-nGxa9QghOJPNiYzozRL1Q2PqJcCNr8psRj-MMOr39xJ1SP0pbuAWePBZEz5UwX6oarUci1Q=w526-h296-rw",
              playstore: "https://play.google.com/store/apps/details?id=com.aarappstudios.speedvpnpro",
              appstore: null
            },
            {
              name: "MindWell : Mediation tracker & mental wellness",
desc: "Mental wellness app with modular Flutter architecture, subscription management via RevenueCat and cross-platform production-ready design."
,              stack: ["Flutter", "Firebase", "RevenueCat"],
              image: "https://play-lh.googleusercontent.com/68Gi1W3MvAB2dJ2vE9TxuxFualu85WuYfOfx5FKDtvjw8CUo5jFZKGnWd3T1FUD0yg=w526-h296-rw",
              playstore: "https://play.google.com/store/apps/details?id=com.example.mindwell",
              appstore: null
            }
          ].map((p, i) => (
            <div key={i} className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-lg transition">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover rounded-xl mb-4 transform transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-400 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((tech, j) => (
                  <span key={j} className="text-sm bg-gray-800 px-2 py-1 rounded-full">{tech}</span>
                ))}
              </div>

              <div className="flex gap-3">
                {p.playstore && <a href={p.playstore} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-green-500 text-black rounded-lg font-medium hover:bg-green-600 transition">Play Store</a>}
                {p.appstore && <a href={p.appstore} target="_blank" rel="noopener noreferrer" className="px-3 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">App Store</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills / Tech Stack */}
      <section id="skills" className="py-24 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Technologies
        </h2>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            "Flutter",
            "Android (Kotlin & Java)",
            "Node.js",
            "Express",
            "MongoDB",
            "WireGuard / OpenVPN",
            "Docker",
            "PM2",
            "CI/CD (GitHub Actions)",
            "RevenueCat",
            "REST & WebSockets",
            "VPS / Server Management"
          ].map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-700 hover:shadow-md transition">{skill}</span>
          ))}
        </div>
      </section>

      {/* Hobbies / Interests */}
      <section id="hobbies" className="py-24 px-6 bg-black text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Hobbies & Interests
        </h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Music", image: "https://img.drz.lazcdn.com/static/np/p/def69ea6d9de77bd65e19fd0435caefa.jpg_720x720q80.jpg" },
            { name: "Traveling", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDYONMzfxBBGpFfn-GxfMa3Gq3fWjoCltwA&s" },

          ].map((hobby, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 mb-4 overflow-hidden rounded-full">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="font-medium text-lg">{hobby.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
    {/* Contact */}
<section id="contact" className="py-24 px-6 bg-gray-900 text-white">
  <h2 className="text-3xl font-bold mb-4 text-center">
    Contact
  </h2>

  <p className="text-center text-gray-400 max-w-2xl mx-auto">
    Let’s connect.
  </p>

  {/* Location */}
  <div className="flex justify-center items-center gap-2 mt-3 mb-10 text-gray-500">
    <FaMapMarkerAlt className="text-sm" />
    <span className="text-sm">
     Pokhara , Nepal 33700
    </span>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    <a
      href="mailto:roshanar.dev@gmail.com"
      className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 shadow-md transition"
    >
      <FaEnvelope className="text-xl" />
      roshanar.dev@gmail.com
    </a>

    <a
      href="https://www.linkedin.com/in/roshanaryal"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-xl hover:border-white shadow-md transition"
    >
      <FaLinkedin className="text-xl text-blue-400" />
      LinkedIn
    </a>

    <a
      href="https://github.com/roshanaryal"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-xl hover:border-white shadow-md transition"
    >
      <FaGithub className="text-xl text-gray-400" />
      GitHub
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 text-center bg-black border-t border-gray-800">
        <p className="text-gray-500">
          © 2026 Roshan Aryal. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App;
