import { Sparkles } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import ProjectsSection from "@/components/projects-section";

// Lazy load heavy components
const MagicParticles = dynamic(
  () =>
    import("@/components/magic-particles").then((mod) => mod.MagicParticles),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
    ),
  }
);

const SkillsOrb = dynamic(
  () => import("@/components/skills-orb").then((mod) => mod.SkillsOrb),
  {
    ssr: false,
    loading: () => (
      <div className="relative mx-auto w-full max-w-md aspect-square flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-pink-500/20 blur-2xl"></div>
        <p className="text-gray-400">Loading skills...</p>
      </div>
    ),
  }
);

const MagicCursor = dynamic(
  () => import("@/components/magic-cursor").then((mod) => mod.MagicCursor),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden">
      <MagicCursor />
      <MagicParticles />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-pink-500/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500 flex items-center gap-2"
            >
              <Sparkles className="h-5 w-5 text-pink-400" />
              <span>Tallal Mirza</span>
            </Link>
            <div className="hidden md:flex gap-8">
              {["Creations", "Skills", "Education", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <button className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-32 flex flex-col items-center text-center z-10">
          <div className="mb-6 inline-block relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
              Software Engineer
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300">
            Crafting <span className="text-green-400">magical</span> digital
            experiences with code and{" "}
            <span className="text-pink-400">creativity</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="#creations"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <ProjectsSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
            Arcane Arsenal
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <SkillsOrb />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">
                  Frontend Sorcery
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["TypeScript", "React", "Next.js", "GraphQL"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full text-sm bg-green-900/30 border border-green-700/30 text-green-300"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-pink-400">
                  Backend Wizardry
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Java", "PostgreSQL", "MongoDB"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm bg-pink-900/30 border border-pink-700/30 text-pink-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  Mystical Arts
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Solana Blockchain",
                    "Software Architecture",
                    "Performance Optimization",
                    "Teaching",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm bg-purple-900/30 border border-purple-700/30 text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
            Arcane Academy
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">
                University of St Andrews
              </h3>
              <p className="text-xl text-pink-400 mb-2">
                BSc in Computer Science
              </p>
              <p className="text-gray-300 mb-4">2017 - 2021</p>
              <p className="text-lg text-gray-300">
                Graduated with a perfect 4.0 GPA, mastering the arcane arts of
                Computer Science and laying the foundation for a journey into
                the realms of software engineering.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <h3 className="text-2xl font-semibold mb-4 text-green-400">
                The Harrodian School
              </h3>
              <p className="text-xl text-pink-400 mb-2">A-Levels</p>
              <p className="text-gray-300 mb-4">2015 - 2017</p>
              <p className="text-lg text-gray-300">
                Maths A*, Physics A*, Biology A*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
            Send a Message
          </h2>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="/"
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500 flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-pink-400" />
                <span>Tallal Mirza</span>
              </Link>
              <p className="text-sm text-gray-400 mt-2">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/tallalnparis4ev"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/null-pointer/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@tallulabellm1"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
