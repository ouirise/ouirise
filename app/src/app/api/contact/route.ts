import { NextRequest, NextResponse } from 'next/server';
import { logWitness } from '@/lib/mongodb';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, remember } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If remember is false, just acknowledge without storage
    if (!remember) {
      return NextResponse.json({
        status: 'delivered',
        stored: false,
        message: 'Message delivered without storage',
      });
    }

    // Log to Witness collection (opt-in only)
    await logWitness({
      name,
      email,
      message,
      timestamp: new Date(),
    });

    return NextResponse.json({
      status: 'witnessed',
      stored: true,
      message: 'Message recorded in Witness log',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
