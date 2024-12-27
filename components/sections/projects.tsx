"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Path Of Ummah",
    description: "Website made for a non-profit Discord server to spread the word of Allah almighty",
    image: "https://cdn.discordapp.com/attachments/1283768846515306499/1299326177495875646/pathofummah.png",
    link: "https://pathofummah.netlify.app"
  },
  {
    title: "Adhabee AI",
    description: "A Dhivei AI discord integrated bot under maintenance with mind-blowing capabilities",
    image: "https://cdn.discordapp.com/attachments/1283768846515306499/1299326178091470898/adhabee.png",
    link: "https://adhabeeai.netlify.app"
  },
  {
    title: "Jannatul Firdaus",
    description: "The website of Jannatul Firdaus discord server made to help Muslims learn about Islam",
    image: "https://cdn.discordapp.com/attachments/1212422769577558066/1214539937282662400/pfpggg.png",
    link: "#"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 py-20">
      <div className="container px-4">
        <motion.h2
          className="text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

