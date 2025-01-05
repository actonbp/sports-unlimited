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
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Logo/Image */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.3))',
          }}
        >
          <img
            src={`https://sports-unlimited.vercel.app/images/basketball.jpg`}
            alt="Basketball"
            width="150"
            height="150"
            style={{
              borderRadius: '75px',
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.1,
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            Sports Unlimited
          </h1>
          
          <p
            style={{
              fontSize: '36px',
              color: 'white',
              textAlign: 'center',
              opacity: 0.9,
              margin: 0,
              maxWidth: '800px',
              textShadow: '1px 1px 4px rgba(0,0,0,0.2)',
            }}
          >
            Building Community Through Sports
          </p>
        </div>

        {/* Call to action */}
        <div
          style={{
            marginTop: '40px',
            background: '#D21312',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '30px',
            fontSize: '28px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        >
          Join Our Community
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await fetch(
            new URL('https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2')
          ).then((res) => res.arrayBuffer()),
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )
} 