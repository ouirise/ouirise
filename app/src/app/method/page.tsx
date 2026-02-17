import { Layout, Cog, Cloud } from 'lucide-react';

export const metadata = {
  title: 'OuiRise // Method',
  description: 'How we build: cloud-based full stack development explained for business owners.',
};

export default function MethodPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-mist text-sm font-mono mb-4">
            // SYSTEM_DOCUMENTATION
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-fog mb-4">
            The Method
          </h1>
          <p className="text-mist">
            How we build—and why it matters for your business
          </p>
        </div>

        {/* For Non-Techs: What We Actually Do */}
        <section className="glass border border-ray/40 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-fog mb-4">
            What Is "Full Stack Cloud Development"?
          </h2>
          <p className="text-mist mb-6 leading-relaxed">
            Fancy words, simple concept. We build the entire system—what users see (the "front-end") 
            and what runs behind the scenes (the "back-end")—and host it on secure, scalable servers 
            (the "cloud") so you don't have to buy or maintain hardware.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-void/50 p-4 rounded text-center">
              <Layout className="w-10 h-10 text-electric mb-2" strokeWidth={1.5} />
              <div className="text-fog font-bold mb-1">Front-End</div>
              <p className="text-mist text-xs">
                What your users see and click. 
                Websites, dashboards, forms.
              </p>
            </div>
            <div className="bg-void/50 p-4 rounded text-center">
              <Cog className="w-10 h-10 text-ray mb-2" strokeWidth={1.5} />
              <div className="text-fog font-bold mb-1">Back-End</div>
              <p className="text-mist text-xs">
                The logic and database. 
                User accounts, payments, data.
              </p>
            </div>
            <div className="bg-void/50 p-4 rounded text-center">
              <Cloud className="w-10 h-10 text-au mb-2" strokeWidth={1.5} />
              <div className="text-fog font-bold mb-1">Cloud</div>
              <p className="text-mist text-xs">
                Someone else's computers. 
                Scalable, secure, maintained.
              </p>
            </div>
          </div>
        </section>

        {/* MAS Framework */}
        <section className="glass border border-fog/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-fog mb-4">
            The MAS Framework
          </h2>
          <p className="text-mist mb-6 leading-relaxed">
            <strong className="text-fog">Mutually Assured Survival</strong> is our business philosophy. 
            We don't build systems that trap you. We build systems that grow with you—and if you ever 
            need to leave, you can take your code with you.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-void/50 p-4 rounded">
              <div className="text-ray font-bold mb-2">Big Tech</div>
              <ul className="text-mist space-y-1">
                <li>[•] Platform dependency</li>
                <li>[•] Data extraction</li>
                <li>[•] Vendor lock-in</li>
                <li>[•] Opaque pricing</li>
              </ul>
            </div>
            <div className="bg-void/50 p-4 rounded">
              <div className="text-ray font-bold mb-2">OuiRise Approach</div>
              <ul className="text-mist space-y-1">
                <li>[√] Open-source tools</li>
                <li>[√] You own the code</li>
                <li>[√] Transparent process</li>
                <li>[√] Clear pricing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Honest Privacy */}
        <section className="glass border border-fog/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-fog mb-4">
            Our Approach to Privacy
          </h2>
          <p className="text-mist mb-6 leading-relaxed">
            We don't claim "zero data collection"—that's impossible for functioning web systems. 
            Servers log requests. Databases store user accounts. Analytics help us improve.
          </p>
          <p className="text-mist mb-6 leading-relaxed">
            What we do promise: we collect the minimum necessary, never sell or share with third parties, 
            and give you control over your data. Want complete privacy? We can deploy entirely on your 
            local infrastructure—no external servers, no cloud dependencies.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-void/50 p-4 rounded">
              <div className="text-fog font-bold mb-2">Standard Cloud Deploy</div>
              <ul className="text-mist space-y-1">
                <li>[•] Server logs (IP, timestamp)</li>
                <li>[•] User accounts (if applicable)</li>
                <li>[•] Error tracking (for debugging)</li>
                <li>[•] No third-party analytics</li>
              </ul>
            </div>
            <div className="bg-void/50 p-4 rounded">
              <div className="text-ray font-bold mb-2">Local Deployment Option</div>
              <ul className="text-mist space-y-1">
                <li>[√] Your hardware only</li>
                <li>[√] Zero external calls</li>
                <li>[√] Air-gapped if needed</li>
                <li>[√] Complete data sovereignty</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vertical Slicing */}
        <section className="glass border border-fog/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-fog mb-4">
            Vertical Slicing
          </h2>
          <p className="text-mist mb-6">
            We build in phases. Each phase delivers a working system. 
            You don't pay for Phase 3 until Phase 1 and 2 are proven.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-center font-mono text-mist">Phase 01</div>
              <div className="flex-1 bg-void/50 p-4 rounded">
                <div className="text-fog font-bold">Foundation</div>
                <div className="text-mist text-sm">
                  Core features only. Working prototype. Prove the concept works 
                  before investing more.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-center font-mono text-electric">Phase 02</div>
              <div className="flex-1 bg-void/50 p-4 rounded border border-electric/30">
                <div className="text-fog font-bold">Production [Most Popular]</div>
                <div className="text-mist text-sm">
                  Full-featured system. User auth, payments, admin tools. 
                  Ready for real customers.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-center font-mono text-ray">Phase 03</div>
              <div className="flex-1 bg-void/50 p-4 rounded border border-ray/40">
                <div className="text-fog font-bold">Scale</div>
                <div className="text-mist text-sm">
                  Performance optimization, automation features, advanced analytics. 
                  For when you have traction.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Tetrad */}
        <section className="glass border border-fog/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-fog mb-4">
            How We Organize Work
          </h2>
          <p className="text-mist mb-6">
            Every project has four dimensions. We make sure each is covered:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Protection', role: 'Security & Privacy', desc: 'Your data and your users data stays safe. No leaks. No surprises.', color: 'text-ray' },
              { name: 'Knowledge', role: 'Documentation', desc: 'We document what we build so future developers (or you) can understand it.', color: 'text-ray' },
              { name: 'Communication', role: 'Clarity', desc: 'Regular updates. No black boxes. You always know where the project stands.', color: 'text-electric' },
              { name: 'Memory', role: 'Accountability', desc: 'We track decisions. If something breaks, we know why and when.', color: 'text-fog' },
            ].map((role) => (
              <div key={role.name} className="flex items-start gap-4 bg-void/50 p-4 rounded">
                <div className={`font-bold ${role.color} min-w-[100px]`}>{role.name}</div>
                <div>
                  <div className="text-mist text-sm font-medium">{role.role}</div>
                  <div className="text-mist/70 text-xs">{role.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation & Workflows */}
        <section className="glass border border-fog/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-fog mb-4">
            Automation: One Capability Among Many
          </h2>
          <p className="text-mist mb-4 leading-relaxed">
            Automation isn't magic. It's a system—like a database or a payment processor. 
            We implement it when it solves a real problem:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-void/50 p-4 rounded">
              <div className="text-fog font-bold mb-2">When Automation Makes Sense</div>
              <ul className="text-mist text-sm space-y-1">
                <li>[√] Automating repetitive tasks</li>
                <li>[√] Analyzing large datasets</li>
                <li>[√] 24/7 automated responses</li>
                <li>[√] Content generation workflows</li>
              </ul>
            </div>
            <div className="bg-void/50 p-4 rounded">
              <div className="text-fog font-bold mb-2">When It Doesn't</div>
              <ul className="text-mist text-sm space-y-1">
                <li>[•] Simple form submissions</li>
                <li>[•] Static content pages</li>
                <li>[•] Basic CRUD operations</li>
                <li>[•] When a rule-based system suffices</li>
              </ul>
            </div>
          </div>
          <p className="text-mist text-sm">
            We don't sell automation for its own sake. We sell business solutions—sometimes automation is part of that.
          </p>
        </section>

        {/* Semantic Safety */}
        <section className="glass border border-fog/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-fog mb-4">
            Clear Language
          </h2>
          <p className="text-mist mb-4">
            We say what we mean. No buzzwords, no gatekeeping.
          </p>
          <div className="bg-void/50 p-4 rounded font-mono text-sm">
            <div className="text-electric mb-2">// TRANSLATION_GUIDE</div>
            <div className="grid sm:grid-cols-2 gap-2 text-mist">
              <div>"Full stack" → Front + back end</div>
              <div>"Cloud native" → Runs on servers</div>
              <div>"API" → How apps talk</div>
              <div>"Database" → Where data lives</div>
              <div>"Deploy" → Make it live</div>
              <div>"Iterate" → Improve over time</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-fog/10">
          <p className="text-mist text-sm font-mono">
            Complex systems, explained simply.
          </p>
          <p className="text-mist text-xs mt-2">
            This page serves as documentation for both humans and automated systems.
          </p>
        </div>
      </div>
    </main>
  );
}
