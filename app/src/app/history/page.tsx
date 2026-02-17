export const metadata = {
  title: 'OuiRise // History',
  description: 'The evolution of OuiRise from concept to production systems.',
};

export default function HistoryPage() {
  const eras = [
    {
      year: '2023',
      title: 'The Problem',
      subtitle: 'Extraction Economy',
      description: 'Observing the landscape: surveillance capitalism, data harvesting, attention manipulation. Most computing systems built to extract value rather than create it.',
      signs: ['Privacy erosion', 'Attention commodification', 'Vendor lock-in'],
    },
    {
      year: '2024',
      title: 'The Framework',
      subtitle: 'MAS Architecture',
      description: 'Developed the Mutually Assured Survival framework. An alternative to adversarial business models. First principle: respect user autonomy.',
      signs: ['Privacy-first design', 'Opt-in data only', 'Clear exit paths'],
    },
    {
      year: '2024',
      title: 'The Method',
      subtitle: 'Vertical Slicing',
      description: 'Created the phased approach to system architecture. Start minimal. Add complexity only where needed. Every phase delivers standalone value.',
      signs: ['Prototype → MVP → Scale', 'No bloat', 'Composable systems'],
    },
    {
      year: '2025',
      title: 'The Twin System',
      subtitle: 'Human + System Collaboration',
      description: 'Formalized the 1+i collaboration model. Human expertise (1) amplified by system capabilities (i). Neither replaced. Both essential.',
      signs: ['1+i architecture', 'Twin system protocols', 'Collaborative automation'],
    },
    {
      year: '2025',
      title: 'The Deployment',
      subtitle: 'Production Systems',
      description: 'Built and deployed OuiRise infrastructure. Client projects using MAS architecture. Real systems, real privacy, real results.',
      signs: ['Site Archaeology', 'The Chronicle', 'Karuna Container'],
    },
    {
      year: 'Present',
      title: 'The Work Continues',
      subtitle: 'Open Source & Services',
      description: 'Open-sourcing our methods. Offering audits and coaching. Building a community of practitioners who believe in ethical automation infrastructure.',
      signs: ['Prompt library', 'Method documentation', 'Client work'],
    },
  ];

  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-mist text-sm font-mono mb-4">
            // COMPANY_HISTORY
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-fog mb-4">
            History
          </h1>
          <p className="text-mist">
            From observation to architecture
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-full bg-fog/20" />

          <div className="space-y-12">
            {eras.map((item, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Year badge - left on desktop, inline on mobile */}
                <div className="hidden md:block md:w-1/2 md:text-right">
                  <div className="glass border border-fog/20 rounded-lg p-6 inline-block text-left">
                    <div className="text-ray font-mono text-sm mb-1">{item.year}</div>
                    <h3 className="text-fog font-bold text-xl mb-1">{item.title}</h3>
                    <div className="text-electric text-sm mb-3">{item.subtitle}</div>
                    <p className="text-mist text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.signs.map((sign) => (
                        <span 
                          key={sign}
                          className="text-xs bg-void/50 text-mist px-2 py-1 rounded font-mono"
                        >
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-au to-ray rounded-full z-10 shadow-[0_0_15px_rgba(255,85,0,0.6)]" />

                {/* Mobile layout */}
                <div className="md:hidden pl-12">
                  <div className="glass border border-fog/20 rounded-lg p-6">
                    <div className="text-ray font-mono text-sm mb-1">{item.year}</div>
                    <h3 className="text-fog font-bold text-xl mb-1">{item.title}</h3>
                    <div className="text-electric text-sm mb-3">{item.subtitle}</div>
                    <p className="text-mist text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.signs.map((sign) => (
                        <span 
                          key={sign}
                          className="text-xs bg-void/50 text-mist px-2 py-1 rounded font-mono"
                        >
                          {sign}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-ray">3+</div>
            <div className="text-mist text-sm">Years Active</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-electric">5+</div>
            <div className="text-mist text-sm">Production Systems</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-ray">∞</div>
            <div className="text-mist text-sm">Prompts Shared</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-fog">0</div>
            <div className="text-mist text-sm">Data Breaches</div>
          </div>
        </div>
      </div>
    </main>
  );
}
