"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Book, Code, Coffee } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <motion.h2
          className="text-center text-3xl font-bold sm:text-4xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden rounded-xl">
              <CardContent className="p-0">
                <Image
                  src="/profile-image-arabic.png"
                  alt="Mā'in"
                  width={600}
                  height={800}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-xl">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-4">
                <h3 className="text-2xl font-semibold mb-4">Hello, I'm Mā'in</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  I'm a passionate web developer and designer based in the Maldives. With a keen eye for detail and a love for creating seamless user experiences, I specialize in building modern, responsive websites and applications.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a cup of coffee while brainstorming my next big idea.
                </p>
                <Button className="rounded-lg">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </TabsContent>
              <TabsContent value="experience" className="mt-4">
                <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="text-lg font-semibold">Web Developer</h4>
                    <p className="text-muted-foreground">2020 - Present</p>
                    <p>Dedicate to create responsive web applications using React and Next.js.</p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                    <p className="text-muted-foreground">2020 - Present</p>
                    <p>Designed user interfaces for various web and mobile applications, focusing on user experience and accessibility.</p>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="education" className="mt-4">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="text-lg font-semibold">Legacy Web Development</h4>
                    <p className="text-muted-foreground">Free Code Camp | 2022</p>
                    <p>Specialized in Responsive Web designs and Interaction</p>
                  </li>
                  <li>
                    <h4 className="text-lg font-semibold">Web Development Course</h4>
                    <p className="text-muted-foreground">Harvard University Online | 2021 - 2022</p>
                    <p>Completed course modules in basic computer, web management and development</p>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="rounded-xl">
            <CardContent className="flex flex-col items-center p-6">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-center text-muted-foreground">I write clean, maintainable, and efficient code.</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl">
            <CardContent className="flex flex-col items-center p-6">
              <Book className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="text-center text-muted-foreground">I'm always learning and staying up-to-date with the latest technologies.</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl">
            <CardContent className="flex flex-col items-center p-6">
              <Coffee className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-center text-muted-foreground">I'm passionate about creating amazing web experiences.</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl">
            <CardContent className="flex flex-col items-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary mb-4">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-center text-muted-foreground">I excel in team environments and enjoy collaborative problem-solving.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

