"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function SkillsOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 400
    canvas.height = 400

    // Skills to display (reduced number)
    const skills = [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "CSS",
      "HTML",
      "Tailwind",
      "Git",
      "AWS",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ]

    class Skill {
      x: number
      y: number
      z: number
      text: string

      constructor(text: string) {
        this.x = (Math.random() - 0.5) * 2
        this.y = (Math.random() - 0.5) * 2
        this.z = (Math.random() - 0.5) * 2
        this.normalize()
        this.text = text
      }

      normalize() {
        const length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        this.x /= length
        this.y /= length
        this.z /= length
      }

      // Project 3D point to 2D
      project(radius: number) {
        return {
          x: this.x * radius * (1 + this.z / 5) + canvas.width / 2,
          y: this.y * radius * (1 + this.z / 5) + canvas.height / 2,
          scale: (this.z + 2) / 3,
          alpha: (this.z + 1) / 2,
        }
      }

      // Rotate around Y axis
      rotateY(angle: number) {
        const cosY = Math.cos(angle)
        const sinY = Math.sin(angle)

        const newX = this.x * cosY - this.z * sinY
        const newZ = this.x * sinY + this.z * cosY

        this.x = newX
        this.z = newZ
      }

      // Rotate around X axis
      rotateX(angle: number) {
        const cosX = Math.cos(angle)
        const sinX = Math.sin(angle)

        const newY = this.y * cosX - this.z * sinX
        const newZ = this.y * sinX + this.z * cosX

        this.y = newY
        this.z = newZ
      }
    }

    // Create skill objects
    const skillObjects = skills.map((skill) => new Skill(skill))

    // Animation variables
    const radius = Math.min(canvas.width, canvas.height) * 0.3
    const animationSpeed = 0.003 // Reduced speed
    let animationId: number | null = null

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Sort by z-index for proper layering
      skillObjects.sort((a, b) => b.z - a.z)

      // Draw each skill
      skillObjects.forEach((skill) => {
        // Rotate the skill
        skill.rotateY(animationSpeed)
        skill.rotateX(animationSpeed / 2)

        // Project to 2D
        const projection = skill.project(radius)

        // Draw text
        ctx.font = `${Math.floor(16 * projection.scale)}px sans-serif`
        ctx.fillStyle = `rgba(255, 255, 255, ${projection.alpha})`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(skill.text, projection.x, projection.y)
      })

      animationId = requestAnimationFrame(animate)
    }

    // Intersection Observer to only animate when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            if (!animationId) {
              animate()
            }
          } else {
            setIsInView(false)
            if (animationId) {
              cancelAnimationFrame(animationId)
              animationId = null
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(canvas)

    // Handle mouse interaction with throttling
    let lastTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastTime < 50) return // Only process every 50ms
      lastTime = now

      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // Adjust animation speed based on mouse position
      const dx = mouseX - canvas.width / 2
      const dy = mouseY - canvas.height / 2

      // Rotate based on mouse position
      skillObjects.forEach((skill) => {
        skill.rotateY(dx * 0.000005)
        skill.rotateX(dy * 0.000005)
      })
    }

    if (isInView) {
      canvas.addEventListener("mousemove", handleMouseMove)
      if (!animationId) {
        animate()
      }
    }

    return () => {
      observer.disconnect()
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isInView])

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md aspect-square"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-pink-500/20 blur-2xl"></div>
      <canvas ref={canvasRef} className="relative z-10 w-full h-full" />
    </motion.div>
  )
}

