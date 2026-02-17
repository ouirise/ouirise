import ScrollCard from '@/components/Mentor/ScrollCard';

export const metadata = {
  title: 'OuiRise // Resources',
  description: 'Templates, checklists, and tools for building digital products.',
};

const resources = [
  {
    title: 'Project Brief Template',
    content: `PROJECT BRIEF

OVERVIEW:
- Project name:
- Business goal (one sentence):
- Success metric (how we know it worked):

USERS:
- Primary user (who uses this most):
- Their goal (what are they trying to do):
- Their context (device, environment, urgency):

FEATURES:
Must-have (launch without these? No):
1.
2.
3.

Nice-to-have (can add later):
1.
2.

CONSTRAINTS:
- Budget range:
- Hard deadline (if any):
- Existing systems to integrate:

QUESTIONS FOR DEVELOPER:
- What tech stack do you recommend and why?
- What's the biggest risk in this project?
- What happens if we cut scope by 50%?`,
    voltage: '0.6B' as const,
    burden: 'Guardian' as const,
  },
  {
    title: 'Technical Spec Template',
    content: `# Technical Specification

## Architecture Overview
- Front-end framework:
- Back-end framework:
- Database:
- Hosting provider:

## Data Model
[Describe key entities and relationships]

## API Endpoints
| Endpoint | Method | Purpose |
|----------|--------|---------|
| /api/x   | GET    | Describe  |

## User Flows
1. Registration/login
2. Core feature A
3. Core feature B

## Security Considerations
- Authentication method:
- Data encryption:
- Privacy compliance (GDPR/CCPA):

## Performance Targets
- Page load time: < 2 seconds
- Mobile responsive: Yes
- Supported browsers: Chrome, Safari, Firefox, Edge`,
    voltage: '0.8B' as const,
    burden: 'Mentor' as const,
  },
  {
    title: 'Pre-Launch Checklist',
    content: `LAUNCH READINESS REVIEW

FUNCTIONALITY:
[ ] All must-have features work
[ ] User registration flows end-to-end
[ ] Payment processing tested (if applicable)
[ ] Forms validate and submit correctly
[ ] Error messages are helpful

PERFORMANCE:
[ ] Site loads in < 3 seconds
[ ] Images optimized
[ ] Mobile responsive on actual devices
[ ] Works on Chrome, Safari, Firefox

SECURITY:
[ ] HTTPS enabled
[ ] Strong passwords enforced
[ ] Sensitive data encrypted
[ ] Admin access restricted

LEGAL:
[ ] Privacy policy posted
[ ] Terms of service posted
[ ] Cookie consent (if EU users)

BACKUP:
[ ] Database backup scheduled
[ ] Code in version control
[ ] Deployment process documented`,
    voltage: '0.6B' as const,
    burden: 'Guardian' as const,
  },
  {
    title: 'Automation & Workflow Brief',
    content: `# Automation Feature Specification

BUSINESS CASE:
- What repetitive task does this automate?
- How many hours per week does it save?
- Success metric for this feature:

AUTOMATION TYPE:
[ ] Data sync between tools
[ ] Report generation
[ ] Email/notification workflows
[ ] Form processing
[ ] Content publishing
[ ] Other:

INTEGRATION REQUIREMENTS:
- Source systems (where data comes from):
- Destination systems (where data goes):
- Trigger events (what starts the workflow):
- Schedule (real-time, hourly, daily):

DATA CONSIDERATIONS:
- What data flows through the system?
- Who owns that data?
- Privacy implications:
- Can users opt out?

IMPLEMENTATION:
- Self-hosted (private, your infrastructure)
- Cloud service (Zapier, Make, etc.)
- Hybrid approach
- Custom build

COST PROJECTION:
- Setup cost:
- Monthly operational cost:
- Maintenance considerations:

HUMAN OVERSIGHT:
- Who monitors the system?
- Escalation path for failures:
- Fallback when automation fails:`,
    voltage: 'Kimi' as const,
    burden: 'Ambassador' as const,
  },
  {
    title: 'Client Communication Guide',
    content: `# How to Talk to Developers

DO:
[√] Describe the problem, not the solution
  ("Users can't find their order history" 
   not "Add a dropdown menu")

[√] Provide context
  ("This is for our B2B customers who...")

[√] Share examples
  ("Like how Airbnb does their booking flow")

[√] Prioritize
  ("If we can only have one, make it X")

[√] Ask questions
  ("Is this technically feasible?" 
   "What's the simpler version?")

DON'T:
[×] Prescribe implementation details
  ("Use React hooks for the state management")

[×] Assume technical knowledge
  (You don't need to know how it works, 
   just what it should do)

[×] Change scope mid-sprint without discussion

[×] Skip user testing because "we know what users want"

QUESTIONS THAT HELP:
- "What's the riskiest assumption here?"
- "What can we build in 2 weeks to test this?"
- "What would we cut if we had to launch tomorrow?"`,
    voltage: '0.8B' as const,
    burden: 'Witness' as const,
  },
];

export default function PromptsPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-mist text-sm font-mono mb-4">
            // RESOURCE_LIBRARY
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-fog mb-4">
            Resources
          </h1>
          <p className="text-mist max-w-2xl mx-auto">
            Templates, checklists, and guides for building digital products. 
            Free to use. Modify for your needs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
          <div className="glass border border-fog/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-ray">{resources.length}</div>
            <div className="text-mist text-xs">Templates</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-electric">3</div>
            <div className="text-mist text-xs">Complexity Levels</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-ray">∞</div>
            <div className="text-mist text-xs">Modifications</div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <ScrollCard key={index} {...resource} />
          ))}
        </div>

        {/* Note */}
        <div className="glass border border-fog/20 rounded-lg p-6 mt-12">
          <h3 className="text-fog font-bold mb-2">How to Use These</h3>
          <p className="text-mist text-sm">
            These templates come from real projects. Fill them out before your first call with us—or any developer. 
            The clearer your brief, the better your outcome. And the less you'll pay for discovery.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-fog/10">
          <p className="text-mist text-sm">
            Released under MIT License. Use freely. No attribution required.
          </p>
        </div>
      </div>
    </main>
  );
}
