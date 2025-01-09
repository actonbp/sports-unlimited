import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'SAVE Sports - Sports Against Violence Everywhere'
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
          background: 'black',
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            backgroundColor: '#1a1a1a',
            padding: '48px',
            borderRadius: '20px',
            border: '2px solid #D21312',
          }}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logos/save_logo.PNG`}
            alt="SAVE Sports Logo"
            width="300"
            height="300"
            style={{
              objectFit: 'contain',
            }}
          />
          
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
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
                margin: 0,
              }}
            >
              SAVE Sports
            </h1>
            
            <p
              style={{
                fontSize: '32px',
                color: '#D21312',
                textAlign: 'center',
                margin: 0,
              }}
            >
              Sports Against Violence Everywhere
            </p>
          </div>
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