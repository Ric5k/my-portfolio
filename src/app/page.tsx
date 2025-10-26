import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, MailIcon, XIcon } from '@/components/icons'

const skills = [
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'AWS',
]

const projects = [
  {
    title: 'Book Search App',
    description:
      'A simple way to discover, save, and review books with friends.',
    link: 'https://github.com/Ric5k/book-search-app',
    tech: ['Next.js', 'TypeScript', 'FastAPI'],
  },
  {
    title: 'Travel Planner',
    description:
      'Plan journeys, compare routes, and share itineraries in a lightweight dashboard.',
    link: 'https://github.com/Ric5k/travel-planner',
    tech: ['Next.js', 'Mapbox', 'MongoDB'],
  },
  {
    title: 'Task API',
    description:
      'A reliable API for team task tracking with real-time updates and reporting.',
    link: 'https://github.com/Ric5k/task-api',
    tech: ['Rust', 'PostgreSQL', 'Docker'],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <Image
            src="https://github.com/Ric5k.png"
            alt="Riku"
            width={120}
            height={120}
            className="rounded-full border border-slate-200 shadow-sm dark:border-slate-800"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold md:text-5xl">Riku</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Backend engineer focused on building dependable services and clean developer
              experiences.
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400">
              I enjoy working end to end: designing APIs, tuning databases, and automating releases
              so teams can ship with confidence.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:riku04.dev@gmail.com"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
            <a
              href="https://github.com/Ric5k"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://x.com/rickdevyo"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-900"
            >
              <XIcon className="h-4 w-4" />
              X
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            I love untangling complex requirements and turning them into calm, predictable systems.
            Whether it is a greenfield idea or a legacy codebase, my goal is the same: keep things
            fast, understandable, and easy to extend.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 className="text-center text-2xl font-semibold">Skills</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm dark:border-slate-800"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 className="text-center text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="mt-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  View project
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Have a project in mind or just want to say hello? Drop me a line and let us build
            something useful together.
          </p>
          <a
            href="mailto:riku04.dev@gmail.com"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Get in touch
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-xs text-slate-500 dark:text-slate-500">
        © {new Date().getFullYear()} Riku. All rights reserved.
      </footer>
    </main>
  )
}
