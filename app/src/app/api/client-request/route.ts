import { NextRequest, NextResponse } from 'next/server';

interface ClientRequest {
  requestType: string;
  title: string;
  description: string;
  priority: string;
  desiredTimeline: string;
  budgetApproved: string;
  additionalNotes?: string;
  attachments?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: ClientRequest = await req.json();

    // Validate required fields
    const required = ['requestType', 'title', 'description', 'priority', 'desiredTimeline', 'budgetApproved'];
    for (const field of required) {
      if (!body[field as keyof ClientRequest]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // TODO: Store in database
    // TODO: Update existing client record
    // TODO: Update shadow clone with new requirements
    // TODO: Send notification email to 8k@ouirise.co

    // Log for development
    console.log('Client Request Received:', {
      type: body.requestType,
      title: body.title,
      priority: body.priority,
      timeline: body.desiredTimeline,
    });

    // Generate a request ID
    const requestId = `CLI-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      status: 'received',
      requestId,
      message: 'Work request received. Shadow clone updating.',
      nextSteps: [
        'Request added to your project queue',
        'Shadow clone configuration updated',
        'Response within 24 hours',
      ],
    });
  } catch (error) {
    console.error('Client request error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
