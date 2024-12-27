import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  // Here, you can implement your preferred method to store or forward the message
  // For example, you could save it to a database, send it to an email service, or log it to a file

  // For demonstration purposes, we'll just log it to the console
  console.log('New message received:')
  console.log('Name:', name)
  console.log('Email:', email)
  console.log('Message:', message)

  // In a real-world scenario, you might want to add error handling and validation here

  return NextResponse.json({ message: 'Message received successfully' }, { status: 200 })
}

