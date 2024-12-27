export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-primary"></div>
        <div className="absolute inset-0 animate-ping opacity-75 rounded-full border-2 border-primary"></div>
      </div>
    </div>
  )
}

