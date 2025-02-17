import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://xiaohai-nct.netlify.app/api/public/announcements', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch announcements' }, { status: 500 })
  }
} 