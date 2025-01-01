import Image from 'next/image'

export default function OGImageExample() {
  return (
    <div className="relative w-[1200px] h-[630px] bg-primary overflow-hidden">
      <Image
        src="/images/sports-action-shot.jpg"
        alt="Sports action"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-accent">
        <Image
          src="/images/sports-unlimited-logo.jpg"
          alt="Sports Unlimited Logo"
          width={300}
          height={150}
          className="mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Sports Unlimited</h1>
        <p className="text-2xl">Empowering Youth, One Game at a Time</p>
      </div>
    </div>
  )
}

