"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { Github, Instagram, DiscIcon as Discord, MessageSquare } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center py-20">
      <div className="container px-4 text-center">
        <motion.h1
          className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-6xl font-bold text-transparent sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&apos;m Mā&apos;in
        </motion.h1>
        
        <motion.div
          className="mt-4 text-2xl text-muted-foreground sm:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A passionate{" "}
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "UI/UX Designer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-primary"
          />
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="rounded-full">
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://github.com/CodingNaughty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://discordapp.com/users/ay_em.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Discord className="h-6 w-6" />
            <span className="sr-only">Discord</span>
          </a>
          <a
            href="https://instagram.com/ay_em.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://tiktok.com/ay_em.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="sr-only">TikTok</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

