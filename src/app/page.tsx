import Link from 'next/link'
import Image from "next/image";
import { GithubIcon, XIcon, LinkedinIcon, ExternalLinkIcon, MailIcon } from '@/components/icons';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in-up">
            <div className="relative inline-block">
              <Image
                src="https://github.com/Ric5k.png"
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full shadow-2xl mx-auto border-4 border-white/20 dark:border-slate-700/50"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            </div>
            <h1 className="text-6xl font-bold mt-8 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Riku
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mt-4 font-medium">
              Backend Engineer & Full-Stack Developer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable applications with modern technologies. 
              I specialize in creating robust backend systems and intuitive user interfaces 
              that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Technologies I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "TypeScript", href: "/typescript", color: "from-blue-500 to-blue-600", level: "Expert" },
            { name: "PostgreSQL", href: "/postgresql", color: "from-indigo-500 to-indigo-600", level: "Advanced" },
            { name: "Next.js", href: "/next.js", color: "from-slate-500 to-slate-600", level: "Expert" },
            { name: "Rust", href: "/rust", color: "from-orange-500 to-orange-600", level: "Intermediate" },
            { name: "React", href: "/react", color: "from-cyan-500 to-cyan-600", level: "Expert" },
            { name: "Node.js", href: "/nodejs", color: "from-green-500 to-green-600", level: "Advanced" },
            { name: "Docker", href: "/docker", color: "from-blue-400 to-blue-500", level: "Intermediate" },
            { name: "AWS", href: "/aws", color: "from-yellow-500 to-orange-500", level: "Intermediate" },
          ].map((skill) => (
            <Link
              key={skill.name}
              href={skill.href}
              className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white relative z-10">
                {skill.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 relative z-10">
                {skill.level}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            My journey in software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a passionate backend engineer with over 3 years of experience building scalable 
              applications and robust systems. My journey began with a curiosity for how things work, 
              which led me to discover the world of programming.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in creating high-performance backend systems using modern technologies 
              like TypeScript, Rust, and PostgreSQL. I am particularly interested in system architecture, 
              database optimization, and building APIs that can handle millions of requests.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When I am not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community through blog posts and talks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">20+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Technologies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Open Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            My professional journey
          </p>
        </div>
        
        <div className="space-y-8">
          {[
            {
              title: "Senior Backend Engineer",
              company: "TechCorp Solutions",
              period: "2022 - Present",
              description: "Leading backend development for high-traffic applications serving millions of users. Architected microservices using TypeScript and Rust, resulting in 40% performance improvement.",
              achievements: [
                "Improved API response times by 40% through optimization",
                "Led migration from monolithic to microservices architecture",
                "Mentored 3 junior developers",
                "Implemented CI/CD pipelines reducing deployment time by 60%"
              ]
            },
            {
              title: "Full-Stack Developer",
              company: "StartupXYZ",
              period: "2021 - 2022",
              description: "Developed full-stack applications using React, Node.js, and PostgreSQL. Built scalable systems from scratch and collaborated with cross-functional teams.",
              achievements: [
                "Built and launched 5 web applications",
                "Implemented real-time features using WebSockets",
                "Optimized database queries improving performance by 30%",
                "Established coding standards and best practices"
              ]
            },
            {
              title: "Junior Developer",
              company: "Digital Agency ABC",
              period: "2020 - 2021",
              description: "Started my professional journey building client websites and learning modern web development practices. Gained experience in various technologies and frameworks.",
              achievements: [
                "Developed 10+ client websites",
                "Learned modern JavaScript frameworks",
                "Contributed to team projects and code reviews",
                "Improved problem-solving and debugging skills"
              ]
            }
          ].map((exp, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Works Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Some of my recent work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Book Search App", 
              desc: "A comprehensive full-stack application for searching, managing, and reviewing books. Features include user authentication, book recommendations, and social sharing capabilities.",
              tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
              gradient: "from-green-500 to-emerald-600",
              features: ["User Authentication", "Book Search", "Reviews & Ratings", "Recommendations"],
              status: "Live"
            },
            { 
              title: "Travel Planner", 
              desc: "Interactive map-based travel planning dashboard with real-time data integration. Users can plan routes, find attractions, and share travel itineraries with friends.",
              tech: ["Next.js", "Mapbox", "Node.js", "MongoDB", "Stripe"],
              gradient: "from-blue-500 to-cyan-600",
              features: ["Interactive Maps", "Route Planning", "Real-time Data", "Payment Integration"],
              status: "In Development"
            },
            { 
              title: "Who Is Channel", 
              desc: "Modern YouTube channel introduction page with dynamic content management system. Features custom video player, analytics dashboard, and subscriber engagement tools.",
              tech: ["Next.js", "TypeScript", "Tailwind CSS", "YouTube API", "Vercel"],
              gradient: "from-purple-500 to-pink-600",
              features: ["Dynamic Content", "Analytics Dashboard", "Video Player", "SEO Optimized"],
              status: "Live"
            },
            { 
              title: "E-commerce Platform", 
              desc: "Scalable e-commerce solution with advanced inventory management, payment processing, and customer analytics. Built with microservices architecture.",
              tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
              gradient: "from-orange-500 to-red-600",
              features: ["Inventory Management", "Payment Processing", "Analytics", "Microservices"],
              status: "Live"
            },
            { 
              title: "Task Management API", 
              desc: "High-performance REST API for task management with real-time collaboration features. Includes WebSocket support and advanced filtering capabilities.",
              tech: ["Rust", "PostgreSQL", "Redis", "WebSocket", "Docker"],
              gradient: "from-indigo-500 to-purple-600",
              features: ["Real-time Sync", "Advanced Filtering", "WebSocket Support", "High Performance"],
              status: "Live"
            },
            { 
              title: "Weather Dashboard", 
              desc: "Real-time weather monitoring dashboard with historical data analysis and predictive forecasting. Features interactive charts and location-based alerts.",
              tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
              gradient: "from-teal-500 to-blue-600",
              features: ["Real-time Data", "Historical Analysis", "Predictive Forecasting", "Interactive Charts"],
              status: "Live"
            },
          ].map((work, index) => (
            <div
              key={work.title}
              className="group relative overflow-hidden rounded-2xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {work.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      work.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {work.status}
                    </span>
                    <ExternalLinkIcon className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {work.desc}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    {work.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {work.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-sm text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Lets work together on your next project
          </p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:riku04.dev@gmail.com"
            className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
          >
            <MailIcon className="w-5 h-5" />
            <span className="font-medium">Email</span>
          </a>
          <a
            href="https://github.com/Ric5k"
            className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
          >
            <GithubIcon className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://x.com/rickdevyo"
            className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
          >
            <XIcon className="w-5 h-5" />
            <span className="font-medium">X (Twitter)</span>
          </a>
        </div>
      </section>
    </main>
  );
}
