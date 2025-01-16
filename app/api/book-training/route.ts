import { NextResponse } from 'next/server'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL

if (!ADMIN_EMAIL) {
  console.warn('ADMIN_EMAIL environment variable is not set')
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Log the booking data
    console.log('New booking request:', {
      ...data,
      date: new Date(data.date).toLocaleDateString(),
      adminEmail: ADMIN_EMAIL
    })

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