import { NextRequest, NextResponse } from 'next/server';

interface ProjectRequest {
  name: string;
  email: string;
  phone?: string;
  companyName: string;
  website?: string;
  industry: string;
  currentChallenges: string;
  desiredOutcomes: string;
  existingSystems?: string;
  budgetRange: string;
  timeline: string;
  teamSize: string;
  additionalInfo?: string;
  attachments?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body: ProjectRequest = await req.json();

    // Validate required fields
    const required = ['name', 'email', 'companyName', 'industry', 'currentChallenges', 'desiredOutcomes', 'budgetRange', 'timeline', 'teamSize'];
    for (const field of required) {
      if (!body[field as keyof ProjectRequest]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // TODO: Store in database
    // TODO: Generate plan.md from request data
    // TODO: Configure shadow clone for this specific situation
    // TODO: Send notification email to 8k@ouirise.co

    // Log for development
    console.log('Project Request Received:', {
      company: body.companyName,
      industry: body.industry,
      budget: body.budgetRange,
      timeline: body.timeline,
    });

    // Generate a request ID
    const requestId = `REQ-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      status: 'received',
      requestId,
      message: 'Project request received. Plan generation initiated.',
      nextSteps: [
        'Shadow clone configuration in progress',
        'Preliminary plan will be delivered within 24-48 hours',
        'You will receive an email with your customized plan.md',
      ],
    });
  } catch (error) {
    console.error('Project request error:', error);
    return NextResponse.json(
      { error: 'Failed to process project request' },
      { status: 500 }
    );
  }
}
