import { NextResponse } from 'next/server'

const ADMIN_EMAIL = 'your-email@example.com' // Replace with your email

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // For now, just log the booking data
    console.log('New booking request:', data)

    // TODO: Add email sending functionality
    // TODO: Add database storage
    
    return NextResponse.json({ 
      message: 'Booking request received',
      success: true 
    })
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json(
      { message: 'Error processing booking request' },
      { status: 500 }
    )
  }
} 