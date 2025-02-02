import { createClient } from '@vercel/edge-config'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe with the correct secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

const config = createClient(process.env.EDGE_CONFIG!)

// Helper function to get tournament name (you can expand this with actual tournament data)
function getTournamentName(tournamentId: string): string {
  const tournaments: { [key: string]: string } = {
    'feb2024': 'February 9th Tournament 2024',
    'feb16': 'February 16th Tournament 2024',
    'feb23': 'February 23rd Tournament 2024',
    'mar2': 'March 2nd Tournament 2024',
    'mar9': 'March 9th Tournament 2024',
    'mar16': 'March 16th Tournament 2024',
    'mar23': 'March 23rd Tournament 2024',
    'mar30': 'March 30th Tournament 2024'
  }
  
  const tournamentName = tournaments[tournamentId]
  if (!tournamentName) {
    console.error(`Tournament ID ${tournamentId} not found in lookup table`)
    return 'Tournament Registration'
  }
  return tournamentName
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { teamName, coachName, coachEmail, coachPhone, ageGroup, numberOfPlayers, city, state, tournamentId, tournamentName } = data

    // Create a unique ID for the registration
    const registrationId = `reg_${Date.now()}`

    // Get existing registrations or initialize empty array
    const existingRegistrations = (await config.get(`tournament_${tournamentId}_registrations`)) || []

    // Add new registration
    const newRegistration = {
      registrationId,
      teamName,
      coachName,
      coachEmail,
      coachPhone,
      ageGroup,
      numberOfPlayers,
      city,
      state,
      tournamentName,
      registrationDate: new Date().toISOString(),
      status: 'pending'
    }

    // Update registrations in Edge Config
    await config.upsert([{
      key: `tournament_${tournamentId}_registrations`,
      value: [...existingRegistrations, newRegistration]
    }])

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 14000, // $140.00
      currency: 'usd',
      metadata: {
        registrationId,
        tournamentId,
        tournamentName,
        teamName,
        coachName
      },
      description: `Tournament Registration - ${tournamentName} - ${teamName} (${ageGroup})`
    })

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret,
      registrationId 
    })

  } catch (error) {
    console.error('Error processing registration:', error)
    return NextResponse.json(
      { error: 'Error processing registration' },
      { status: 500 }
    )
  }
}

// Handle successful payments
export async function PUT(req: Request) {
  try {
    const { registrationId, tournamentId } = await req.json()
    
    // Get existing registrations
    const registrations = await config.get(`tournament_${tournamentId}_registrations`) || []
    
    // Update registration status
    const updatedRegistrations = registrations.map((reg: any) => 
      reg.registrationId === registrationId 
        ? { ...reg, status: 'paid' }
        : reg
    )

    // Save updated registrations using upsert
    await config.upsert([{
      key: `tournament_${tournamentId}_registrations`,
      value: updatedRegistrations
    }])
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating registration:', error)
    return NextResponse.json(
      { error: 'Error updating registration' },
      { status: 500 }
    )
  }
}

// Get all registrations for a tournament
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const tournamentId = searchParams.get('tournamentId')
  
  if (!tournamentId) {
    return NextResponse.json(
      { error: 'Tournament ID is required' },
      { status: 400 }
    )
  }

  try {
    // Get registrations from Edge Config
    const registrations = await config.get(`tournament_${tournamentId}_registrations`) || []
    
    return NextResponse.json({ registrations })
  } catch (error) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json(
      { error: 'Error fetching registrations' },
      { status: 500 }
    )
  }
} 