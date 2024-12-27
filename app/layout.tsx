import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackgroundParticles } from "@/components/background-particles"
import { MouseFollower } from "@/components/mouse-follower"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mā'in - Web Developer & Designer",
  description: "Personal portfolio and blog of Mā'in, a web developer and designer.",
  metadataBase: new URL('https://maain.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <MouseFollower />
            <BackgroundParticles className="fixed inset-0 -z-10 animate-fade-in" quantity={100} />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

