import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'Sports Unlimited - Building Community Through Sports'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0B2447, #19376D)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <img
            src={`https://sports-unlimited.vercel.app/images/basketball.jpg`}
            alt="Basketball"
            width="120"
            height="120"
            style={{
              borderRadius: '60px',
              marginRight: '20px',
            }}
          />
        </div>
        <h1
          style={{
            fontSize: '60px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Sports Unlimited
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: 'white',
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: '800px',
          }}
        >
          Join our community of young athletes in Durham
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '40px',
            gap: '20px',
          }}
        >
          <div
            style={{
              background: '#D21312',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '24px',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            #SportsUnlimited
          </div>
          <div
            style={{
              background: 'white',
              color: '#0B2447',
              padding: '12px 24px',
              borderRadius: '24px',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            @SportsUnlimited
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 