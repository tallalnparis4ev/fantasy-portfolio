import React from "react";
import { ProjectCard } from "./project-card";

const ProjectsSection = () => {
  // Projects data array
  // Object mapping project names to their data
  const Projects = {
    DiaFinder: {
      role: "Founder",
      title: "DiaFinder",
      description:
        "Launched DiaFinder: A life-saving tool connecting diabetics to essential medication worldwide. Built the complete platform from scratch using React, TypeScript & Next.js, deployed via Vercel.",
      longDescription: [
        "💊 DiaFinder helps people find diabetic medication anywhere in the world.",
        "💻 Developed the entire codebase using React, TypeScript & Next.js",
        "🚀 Deployed with Vercel",
      ],
      tags: ["React", "TypeScript", "Next.js", "Vercel"],
      image: "/novos.svg?height=300&width=400",
      color: "green",
    },
    EatOut: {
      role: "Founder",
      title: "Eat Out",
      description:
        "Built Eat Out, a global restaurant finder for any diet. Developed the entire codebase with React, TypeScript, and Next.js, powered by PostgreSQL, and deployed on Vercel.",
      longDescription: [
        "🍽 Eat Out helps people find restaurants that align with their diets anywhere in the world.",
        "💻 Built the entire codebase using React, TypeScript & Next.js",
        "📊 Database: PostgreSQL",
        "🚀 Deployed with Vercel",
      ],
      tags: ["React", "TypeScript", "Next.js", "PostgreSQL", "Vercel"],
      image: "/eatout.svg",
      color: "pink",
    },
    MagicEden: {
      role: "Software Engineer",
      title: "Magic Eden",
      description:
        "Developed high-performance systems with TypeScript, Rust, and React. Optimized Solana NFT indexers, achieving 67%-100% higher success rates and 6x-200x speed boosts. Built and led Solana NFT trading infrastructure, handling tens of millions daily with top-tier reliability.",
      longDescription: [
        "💻 Developed high-performance systems using TypeScript, Rust, and React.",
        "🔹 Principal developer for Solana NFT indexers – optimized design to minimize latency and prevent race conditions, leading to a 67%-100% increase in transaction success rates and 6x-200x speed improvements across different endpoints.",
        "🔹 Built the backbone of Solana NFT trading, ensuring high-volume transactions worth tens of millions daily with unmatched reliability and efficiency.",
        "🔹 Led the development of our public API, significantly improving reliability and user experience.",
        "🔹 Developed critical operational software, introducing endpoint-level rate limiting, automatic documentation generation, and an A/B testing framework, while addressing API partners' needs and driving continuous improvements.",
      ],
      tags: ["TypeScript", "Rust", "Solana", "Blockchain"],
      image: "/ME_Full_Gradient.png",
      color: "purple",
    },
    bp: {
      role: "Senior Software Engineer",
      title: "bp",
      description:
        "Built and optimized large-scale systems with TypeScript, GraphQL, and React. Engineered polling, caching, and request chunking to enhance efficiency for a service in 50+ countries, handling millions in transactions monthly while improving accessibility.",
      longDescription: [
        "💻 Built and optimized large-scale systems using TypeScript, GraphQL, and React.",
        "🔹 Engineered and implemented advanced optimization solutions from scratch, including polling and caching mechanisms, to overcome limitations in duplex communication. Enhanced system efficiency through request chunking, supporting a service used in 50+ countries and facilitating thousands of weekly transactions worth millions per month.",
        "🔹 Designed and architected a multilingual self-help webpage with full autonomy, successfully localizing content in 6 languages to improve user accessibility and support.",
        "🔹 Led and resolved a wide range of bug fixes across the full technology stack, ensuring robust software performance and reliability.",
      ],
      tags: ["React", "TypeScript", "GraphQL", "i18n"],
      image: "/BP_Helios_logo.svg",
      color: "blue",
    },
    Microsoft: {
      role: "Software Engineer",
      title: "Microsoft",
      description:
        "Modernized and scaled enterprise systems with C# and TypeScript. Migrated a monolith to Service Fabric microservices, enhancing scalability and maintainability. Leveraged .NET 6.0 to optimize performance while handling deployments, monitoring, and candidate assessments.",
      longDescription: [
        "💻 Worked with C# and TypeScript to modernize and scale enterprise systems.",
        "🔹 Converted a monolith to Service Fabric microservices, improving scalability and maintainability.",
        "🔹 Modernized migrated services by leveraging .NET 6.0 features for enhanced performance and efficiency.",
        "🔹 Additional responsibilities:",
        "• Debugging and monitoring alarms 📊",
        "• Deploying and rotating applications 🚀",
        "• Interviewing and assessing candidates 🎯",
      ],
      tags: ["C#", "TypeScript", ".NET 6.0", "Service Fabric"],
      image: "/microsoft.png",
      color: "cyan",
    },
    Cisco: {
      role: "Software Engineer",
      title: "Cisco",
      description:
        "Developed and maintained a public-facing GraphQL API for various features. Implemented a full-stack feature allowing users to set default values and firewall-specific overrides. Participated in the full software development lifecycle, including requirement analysis, coding, and testing.",
      longDescription: [
        "💻 Worked on a public-facing GraphQL API for various features.",
        "🛠️ Developed a full-stack key feature enabling users to specify default values and per-firewall overrides for network entities.",
        "📌 Participated in all stages of software development, including requirement analysis, programming, and automated testing. 🚀",
      ],
      tags: ["C#", "TypeScript", ".NET 6.0", "Service Fabric"],
      image: "/cisco.svg",
      color: "green",
    },
    YouTube: {
      role: "Software Engineer",
      title: "YouTube",
      description: "Teaching Computer Science",
      longDescription: [
        "🚀 Hit 2,000 subs! (absolute legends 💙) in just a few videos teaching about Computer Science interviews within high-frequency trading ⚡📈",
        "🎥 Check it out 👉 youtube.com/@tallulabellm1",
      ],
      tags: ["Computer Science", "YouTube", "High Frequency Trading"],
      image: "/youtube.png",
      color: "blue",
    },
  };

  // Array of project references for ordered display
  const projectsArray = [
    Projects.YouTube,
    Projects.Microsoft,
    Projects.Cisco,
    Projects.DiaFinder,
    Projects.EatOut,
    Projects.MagicEden,
  ];

  // Now you can use projectsArray to map through in your component
  // And access individual projects directly via Projects.DiaFinder, etc.

  return (
    <section id="creations" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-500">
          Enchanted Creations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsArray.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              longDescription={project.longDescription}
              tags={project.tags}
              image={project.image}
              color={
                project.color as
                  | "purple"
                  | "blue"
                  | "cyan"
                  | "green"
                  | "pink"
                  | "orange"
                  | undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
