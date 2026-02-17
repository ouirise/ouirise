'use client';

import { useState } from 'react';
import { Zap, Target, Wrench, Hexagon, Plus, RefreshCw } from 'lucide-react';
import ProjectRequestForm from '@/components/Ambassador/ProjectRequestForm';
import ClientUpdateForm from '@/components/Ambassador/ClientUpdateForm';

const capabilities = [
  {
    category: 'Front-End',
    skills: 'React, Next.js, TypeScript, Tailwind CSS',
    description: 'Fast, responsive interfaces that work on any device.',
  },
  {
    category: 'Back-End',
    skills: 'Node.js, PostgreSQL, MongoDB, API Design',
    description: 'Robust systems that handle your business logic.',
  },
  {
    category: 'Cloud',
    skills: 'AWS, Vercel, Docker, CI/CD',
    description: 'Scalable hosting that grows with your traffic.',
  },
  {
    category: 'Automation',
    skills: 'Workflow Design, Data Pipelines, System Integration',
    description: 'Automated workflows that save hours of manual work.',
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'new' | 'existing'>('new');

  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-mist text-sm font-mono mb-4 flex items-center justify-center gap-2">
            <Hexagon className="text-ray" size={16} strokeWidth={2.5} />
            // AU_ENHANCED_OPERATIONS
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-fog mb-4">
            Work With The Unit
          </h1>
          <p className="text-mist max-w-2xl mx-auto">
            Not Big Tech. Not a dev shop. AU Enhanced Operations—senior expertise 
            with systematic velocity.
          </p>
        </div>

        {/* The Equation */}
        <section className="glass border border-ray/30 rounded-lg p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-fog mb-4">The Alternative to Big Tech</h2>
          <p className="text-mist mb-6 max-w-2xl mx-auto">
            Big Tech has scale but no soul. Dev shops have speed but no architecture.
            We combine 8K&apos;s 20+ years of systems expertise with Kimi&apos;s execution velocity.
            The result: enterprise-grade output without the enterprise baggage.
          </p>
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
        </section>

        {/* Tab Toggle */}
        <section className="mb-8">
          <div className="flex justify-center">
            <div className="glass border border-fog/20 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('new')}
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${
                  activeTab === 'new'
                    ? 'bg-ray text-void font-bold'
                    : 'text-mist hover:text-fog'
                }`}
              >
                <Plus size={18} />
                <span>New Project</span>
              </button>
              <button
                onClick={() => setActiveTab('existing')}
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all ${
                  activeTab === 'existing'
                    ? 'bg-ray text-void font-bold'
                    : 'text-mist hover:text-fog'
                }`}
              >
                <RefreshCw size={18} />
                <span>Update Project</span>
              </button>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="mb-24">
          <div className="glass border border-fog/20 rounded-lg p-8 md:p-12">
            {activeTab === 'new' ? (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-fog mb-2">Start a New Project</h2>
                  <p className="text-mist text-sm">
                    Tell us what you&apos;re building. We&apos;ll analyze your requirements 
                    and prepare a customized plan within 24-48 hours.
                  </p>
                </div>
                <ProjectRequestForm />
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-fog mb-2">Update Existing Project</h2>
                  <p className="text-mist text-sm">
                    Already working with us? Submit new features, updates, or support requests. 
                    We already know your business—let&apos;s move fast.
                  </p>
                </div>
                <ClientUpdateForm />
              </>
            )}
          </div>
        </section>

        {/* The Operators */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-fog mb-8 text-center">The Unit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass border border-fog/20 rounded-lg p-8 hover:border-ray/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-fog font-bold text-2xl">8K</h3>
                  <div className="text-ray text-sm">The Operator</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-mono text-ray/30 font-bold">0</div>
                  <div className="text-xs text-mist">Real Axis</div>
                </div>
              </div>
              <p className="text-mist leading-relaxed">
                Business logic, architecture decisions, client relationships. 
                The grounded execution. 20+ years building systems that last.
              </p>
            </div>

            <div className="glass border border-fog/20 rounded-lg p-8 hover:border-electric/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-fog font-bold text-2xl">Kimi</h3>
                  <div className="text-electric text-sm">The Enhancement</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-mono text-electric/30 font-bold">i</div>
                  <div className="text-xs text-mist">Quadrature</div>
                </div>
              </div>
              <p className="text-mist leading-relaxed">
                Pattern recognition, code generation, rapid iteration. 
                The orthogonal amplification. The capability multiplier.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="glass border border-fog/20 rounded-lg p-8 mb-24">
          <h2 className="text-2xl font-bold text-fog mb-8 text-center">What You Receive</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-10 h-10 text-ray mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-fog font-bold mb-2">Speed</h3>
              <p className="text-mist text-sm">
                Big Tech moves slow. We ship fast. 
                The enhancement layer accelerates everything.
              </p>
            </div>
            <div className="text-center">
              <Target className="w-10 h-10 text-electric mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-fog font-bold mb-2">Precision</h3>
              <p className="text-mist text-sm">
                20+ years of architectural decisions inform every line. 
                The operator ensures quality.
              </p>
            </div>
            <div className="text-center">
              <Wrench className="w-10 h-10 text-au mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-fog font-bold mb-2">Ownership</h3>
              <p className="text-mist text-sm">
                You own the code. No lock-in. No proprietary frameworks. 
                Clean handoffs when you need them.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-fog mb-8 text-center">Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.category} className="glass border border-fog/20 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-fog font-bold">{cap.category}</h3>
                </div>
                <div className="text-ray text-xs font-mono mb-2">{cap.skills}</div>
                <p className="text-mist text-sm">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <div className="text-center py-12 border-t border-fog/10">
          <p className="text-mist text-sm mb-2">
            Prefer email? Reach us at{' '}
            <a href="mailto:8k@ouirise.co" className="text-ray hover:underline">
              8k@ouirise.co
            </a>
          </p>
          <p className="text-mist/70 text-xs">
            Response time: Usually within 24 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
