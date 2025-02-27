"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  color?: "green" | "pink" | "purple" | "blue" | "cyan" | "orange"
}

export function ProjectCard({ title, description, tags, image, color = "default" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const colorMap = {
    green: {
      bg: "bg-green-900/20",
      border: "border-green-700/30",
      glow: "group-hover:shadow-green-500/20",
      text: "text-green-400",
    },
    pink: {
      bg: "bg-pink-900/20",
      border: "border-pink-700/30",
      glow: "group-hover:shadow-pink-500/20",
      text: "text-pink-400",
    },
    purple: {
      bg: "bg-purple-900/20",
      border: "border-purple-700/30",
      glow: "group-hover:shadow-purple-500/20",
      text: "text-purple-400",
    },
    blue: {
      bg: "bg-blue-900/20",
      border: "border-blue-700/30",
      glow: "group-hover:shadow-blue-500/20",
      text: "text-blue-400",
    },
    cyan: {
      bg: "bg-cyan-900/20",
      border: "border-cyan-700/30",
      glow: "group-hover:shadow-cyan-500/20",
      text: "text-cyan-400",
    },
    orange: {
      bg: "bg-orange-900/20",
      border: "border-orange-700/30",
      glow: "group-hover:shadow-orange-500/20",
      text: "text-orange-400",
    },
    default: {
      bg: "bg-gray-900/20",
      border: "border-gray-700/30",
      glow: "group-hover:shadow-gray-500/20",
      text: "text-gray-400",
    },
  }

  return (
    <motion.div
      className={`rounded-xl overflow-hidden ${colorMap[color].bg} border ${colorMap[color].border} group transition-all duration-300 hover:shadow-xl ${colorMap[color].glow} relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      <div className="p-6 relative">
        <h3 className={`text-xl font-bold mb-2 ${colorMap[color].text}`}>{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-xs ${colorMap[color].bg} border ${colorMap[color].border} ${colorMap[color].text}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-pink-500"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  )
}

