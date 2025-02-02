import { get } from '@vercel/edge-config'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Helper function to check environment variables at runtime
function getRequiredEnvVar(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`${name} is not set in environment variables`)
  }
  return value
}

// Initialize Stripe with the correct secret key
const stripe = new Stripe(getRequiredEnvVar('STRIPE_SECRET_KEY'), {
  apiVersion: '2025-01-27.acacia',
  typescript: true,
})

// Helper function to get tournament name
function getTournamentName(tournamentId: string): string {
  const tournaments: { [key: string]: string } = {
    'feb8': 'SU Winter Showcase - February 8th 2025',
    'feb15': 'SU Hoops Challenge - February 15th 2025',
    'feb22': 'SU Battle on Tobacco Road - February 22nd 2025',
    'mar1': 'SU March Jam Session - March 1st 2025',
    'mar15': 'Tory Trueluck Invitational - March 15th 2025',
    'mar29': 'SU Spring Showdown - March 29th 2025',
    'nov27': 'Quiz Bowl Tournament - November 27th 2024'
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
    // Validate Stripe configuration
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Missing Stripe secret key')
      return NextResponse.json(
        { error: 'Payment configuration error' },
        { status: 500 }
      )
    }

    // Check environment variables at runtime
    const edgeConfigId = getRequiredEnvVar('EDGE_CONFIG_ID')
    const edgeConfigToken = getRequiredEnvVar('EDGE_CONFIG_TOKEN')

    const data = await req.json()
    const { teamName, coachName, coachEmail, coachPhone, ageGroup, numberOfPlayers, city, state, tournamentId } = data

    // Get tournament name
    const tournamentName = getTournamentName(tournamentId)

    // Create a unique ID for the registration
    const registrationId = `reg_${Date.now()}`

    try {
      // Get existing registrations or initialize empty array
      const existingRegistrations = await get<any[]>(`tournament_${tournamentId}_registrations`) || []

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

      // Update registrations array
      const updatedRegistrations = [...existingRegistrations, newRegistration]

      // Update Edge Config using the REST API
      const response = await fetch(`https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${edgeConfigToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            operation: 'update',
            key: `tournament_${tournamentId}_registrations`,
            value: updatedRegistrations
          }]
        })
      })

      if (!response.ok) {
        throw new Error('Failed to update Edge Config')
      }

      // Determine payment amount based on tournament
      const amount = tournamentId === 'nov27' ? 200 : 14000 // $2.00 for Quiz Bowl, $140.00 for others

      try {
        // Create payment intent with tournament-specific amount
        const paymentIntent = await stripe.paymentIntents.create({
          amount, // Amount in cents
          currency: 'usd',
          metadata: {
            registrationId,
            tournamentId,
            tournamentName,
            teamName,
            coachName,
            numberOfPlayers: numberOfPlayers.toString()
          },
          description: `Tournament Registration - ${tournamentName} - Team: ${teamName}`
        })

        return NextResponse.json({ 
          clientSecret: paymentIntent.client_secret,
          registrationId,
          amount
        })
      } catch (stripeError) {
        console.error('Stripe error:', stripeError)
        return NextResponse.json(
          { error: 'Payment processing error' },
          { status: 500 }
        )
      }
    } catch (edgeError) {
      console.error('Edge Config error:', edgeError)
      return NextResponse.json(
        { error: 'Registration storage error' },
        { status: 500 }
      )
    }
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
    // Check environment variables at runtime
    const edgeConfigId = getRequiredEnvVar('EDGE_CONFIG_ID')
    const edgeConfigToken = getRequiredEnvVar('EDGE_CONFIG_TOKEN')

    const { registrationId, tournamentId } = await req.json()
    
    // Get existing registrations
    const registrations = await get<any[]>(`tournament_${tournamentId}_registrations`) || []
    
    // Update registration status
    const updatedRegistrations = registrations.map((reg: any) => 
      reg.registrationId === registrationId 
        ? { ...reg, status: 'paid' }
        : reg
    )

    // Update Edge Config using the REST API
    const response = await fetch(`https://api.vercel.com/v1/edge-config/${edgeConfigId}/items`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${edgeConfigToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          operation: 'update',
          key: `tournament_${tournamentId}_registrations`,
          value: updatedRegistrations
        }]
      })
    })

    if (!response.ok) {
      throw new Error('Failed to update Edge Config')
    }
    
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
    const registrations = await get<any[]>(`tournament_${tournamentId}_registrations`) || []
    
    return NextResponse.json({ registrations })
  } catch (error) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json(
      { error: 'Error fetching registrations' },
      { status: 500 }
    )
  }
} 