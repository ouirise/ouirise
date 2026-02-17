import { Zap, Globe, Cloud, Cpu, Triangle, Atom, FileCode, Leaf } from 'lucide-react';
import Link from 'next/link';
import PackageCard from '@/components/Mentor/PackageCard';
import DeploymentCard from '@/components/Mentor/DeploymentCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-mist text-sm font-mono mb-4 tracking-wider">
                Ouirise Initiative // SYSTEM_INITIALIZED: 2025
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-fog mb-6 tracking-tight leading-none">
                Build Your<br />
                <span className="text-gradient-au">Digital Foundation</span>
              </h1>
              <p className="text-xl text-mist mb-8 leading-relaxed max-w-lg">
                Full-stack web development that scales with your business. 
                Cloud-based systems. Clean code. No technical debt traps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-ray text-void font-bold rounded hover:glow-ray transition-all duration-300"
                >
                  Start a Project
                </Link>
                <Link
                  href="/method"
                  className="inline-flex items-center justify-center px-8 py-3 border border-fog/30 text-fog rounded hover:border-ray hover:text-ray transition-all duration-300"
                >
                  How We Work
                </Link>
              </div>
            </div>
            
            {/* Tech Visual */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fog/10 via-ray/10 to-au/10 rounded-2xl" />
                <div className="absolute inset-4 border border-fog/20 rounded-xl" />
                <div className="absolute inset-8 border border-fog/10 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-ray mx-auto" strokeWidth={1.5} />
                    <div className="text-fog font-mono text-sm">Cloud Native</div>
                    <div className="text-mist font-mono text-xs">Full Stack</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-moon border border-ray/50 px-3 py-1 rounded text-ray text-xs font-mono">
                  Modern Stack
                </div>
                <div className="absolute -bottom-4 -left-4 bg-moon border border-electric/30 px-3 py-1 rounded text-electric text-xs font-mono">
                  Production Ready
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fog/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ray/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* The Unit */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-y border-fog/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-mist text-sm font-mono mb-4">
            // AU_ENHANCED_OPERATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-fog mb-4">
            The Alternative to Big Tech
          </h2>
          <p className="text-mist mb-8 max-w-2xl mx-auto">
            Big Tech has scale but no soul. Dev shops have speed but no architecture.
            The Unit combines 8K&apos;s expertise with Kimi&apos;s velocity—delivering 
            enterprise-grade output without the enterprise baggage.
          </p>
          
          <div className="glass border border-ray/30 rounded-lg p-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm font-mono">
              <div className="text-ray text-center">
                <span className="text-3xl font-bold">8K</span>
                <div className="text-mist">Operator</div>
              </div>
              <div className="text-fog text-2xl">+</div>
              <div className="text-electric text-center">
                <span className="text-3xl font-bold">Kimi</span>
                <div className="text-mist">Enhancement</div>
              </div>
              <div className="text-fog text-2xl">=</div>
              <div className="text-au text-center">
                <span className="text-3xl font-bold">AU</span>
                <div className="text-mist">Output</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - For Non-Techs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-fog mb-4">What We Build</h2>
            <p className="text-mist max-w-2xl mx-auto">
              Think of us as your technical co-founder—without the equity. 
              We architect, build, and deploy the systems that run your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass border border-fog/20 rounded-lg p-6">
              <Globe className="w-10 h-10 text-electric mb-4" strokeWidth={1.5} />
              <h3 className="text-fog font-bold text-lg mb-2">Web Applications</h3>
              <p className="text-mist text-sm">
                Custom apps that work in the browser. Customer portals, internal tools, 
                dashboards—whatever your business needs to operate online.
              </p>
            </div>
            <div className="glass border border-fog/20 rounded-lg p-6">
              <Cloud className="w-10 h-10 text-au mb-4" strokeWidth={1.5} />
              <h3 className="text-fog font-bold text-lg mb-2">Cloud Infrastructure</h3>
              <p className="text-mist text-sm">
                Your software lives on secure, scalable servers. We handle the setup, 
                monitoring, and maintenance so you don't think about servers.
              </p>
            </div>
            <div className="glass border border-fog/20 rounded-lg p-6">
              <Cpu className="w-10 h-10 text-ray mb-4" strokeWidth={1.5} />
              <h3 className="text-fog font-bold text-lg mb-2">Automation & Systems</h3>
              <p className="text-mist text-sm">
                We build workflows that save time—automated reports, data pipelines,
                integrations between tools. Systems that work while you sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-fog mb-4">Business Scaling Services</h2>
            <p className="text-mist max-w-2xl mx-auto">
              Clear scope. Clear pricing. We build what you need now, 
              with room to grow later.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PackageCard
              title="Foundation Build"
              subtitle="Full-Stack Web Development"
              price="Starting at $8,000"
              features={[
                'Custom web application (Next.js/React)',
                'Database design & API development',
                'Cloud deployment & hosting setup',
                'User authentication & security',
                '30-day post-launch support',
              ]}
              burden="Guardian"
            />
            <PackageCard
              title="Scale & Optimize"
              subtitle="Growth & Enhancement"
              price="$2,500/mo retainer"
              features={[
                'Feature additions & iterations',
                'Performance optimization',
                'Workflow automation & integrations',
                'Database scaling & migrations',
                'Priority Slack support',
              ]}
              burden="Mentor"
              popular
            />
          </div>
        </div>
      </section>

      {/* How It Works - Non-Tech Explanation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-moon/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-fog mb-4">How We Work</h2>
            <p className="text-mist">No jargon. No surprises. Just results.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-ray/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ray font-bold text-xl">01</span>
              </div>
              <h3 className="text-fog font-bold mb-2">Discovery</h3>
              <p className="text-mist text-sm">
                We learn your business. What you sell, who you serve, what problem you're solving.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-electric font-bold text-xl">02</span>
              </div>
              <h3 className="text-fog font-bold mb-2">Architecture</h3>
              <p className="text-mist text-sm">
                We design your system. The blueprint before we build. You approve every detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-au/30 to-ray/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ray font-bold text-xl">03</span>
              </div>
              <h3 className="text-fog font-bold mb-2">Build</h3>
              <p className="text-mist text-sm">
                We code in phases. You see progress weekly. No black boxes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fog/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-fog font-bold text-xl">04</span>
              </div>
              <h3 className="text-fog font-bold mb-2">Launch</h3>
              <p className="text-mist text-sm">
                We deploy to production. Train your team. Hand over the keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-fog mb-4">Selected Work</h2>
            <p className="text-mist">Systems we've built and deployed</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <DeploymentCard
              title="Site Archaeology"
              subtitle="Privacy-focused web platform"
              result="Minimal tracking, maximum speed"
              tech="Next.js, TypeScript, Tailwind"
              tag="WEB_APP"
            />
            <DeploymentCard
              title="The Chronicle"
              subtitle="Content management system"
              result="Opt-in data persistence"
              tech="MongoDB, Next.js API, React"
              tag="FULL_STACK"
            />
            <DeploymentCard
              title="Karuna Container"
              subtitle="Automation platform"
              result="Self-hosted workflow engine"
              tech="Node.js, Docker, n8n"
              tag="AUTOMATION"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack - Explained */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-moon/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-fog mb-4">Our Stack</h2>
            <p className="text-mist">Industry-standard tools that won't lock you in</p>
          </div>
          
          <div className="glass border border-fog/20 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Triangle className="w-8 h-8 text-fog mb-2 mx-auto" strokeWidth={1.5} />
                <div className="text-fog font-bold">Next.js</div>
                <div className="text-mist text-xs">Modern web framework</div>
              </div>
              <div>
                <Atom className="w-8 h-8 text-fog mb-2 mx-auto" strokeWidth={1.5} />
                <div className="text-fog font-bold">React</div>
                <div className="text-mist text-xs">User interfaces</div>
              </div>
              <div>
                <FileCode className="w-8 h-8 text-fog mb-2 mx-auto" strokeWidth={1.5} />
                <div className="text-fog font-bold">TypeScript</div>
                <div className="text-mist text-xs">Type-safe code</div>
              </div>
              <div>
                <Leaf className="w-8 h-8 text-fog mb-2 mx-auto" strokeWidth={1.5} />
                <div className="text-fog font-bold">MongoDB</div>
                <div className="text-mist text-xs">Database</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-fog/10 text-center">
              <p className="text-mist text-sm">
                <strong>What this means for you:</strong> Your code is built on technologies 
                used by Netflix, Uber, and Instagram. If you ever need another developer, 
                thousands know these tools. No proprietary black boxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-fog mb-4">
            Ready to build?
          </h2>
          <p className="text-mist mb-8 max-w-2xl mx-auto">
            Tell us what you're trying to solve. We'll tell you if we can help. 
            No sales pitch—just honest technical assessment.
          </p>
          <Link
            href="/about#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-ray text-void font-bold rounded hover:glow-ray transition-all duration-300"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

    </main>
  );
}
