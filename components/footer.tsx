export function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mā'in. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  )
}

