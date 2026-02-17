import ClientUpdateForm from '@/components/Ambassador/ClientUpdateForm';

export const metadata = {
  title: 'OuiRise // Client Portal',
  description: 'Existing client project updates and new work requests.',
};

export default function PortalPage() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-mist text-sm font-mono mb-4">
            // CLIENT_PORTAL
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-fog mb-4">
            Client Portal
          </h1>
          <p className="text-mist max-w-2xl mx-auto">
            Welcome back. Submit new work requests, feature additions, or project updates. 
            We already know your business—let&apos;s move fast.
          </p>
        </div>

        {/* Quick Actions */}
        <section className="grid sm:grid-cols-3 gap-4 mb-12">
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-ray mb-1">New Feature</div>
            <div className="text-mist text-sm">Add functionality</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-electric mb-1">Update</div>
            <div className="text-mist text-sm">Modify existing</div>
          </div>
          <div className="glass border border-fog/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-au mb-1">Support</div>
            <div className="text-mist text-sm">Fix or optimize</div>
          </div>
        </section>

        {/* Client Update Form */}
        <section className="glass border border-fog/20 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-fog mb-2">Submit Work Request</h2>
            <p className="text-mist text-sm">
              Tell us what you need. We&apos;ll scope it and get started.
            </p>
          </div>
          <ClientUpdateForm />
        </section>

        {/* Contact */}
        <div className="mt-16 text-center">
          <p className="text-mist text-sm">
            Need to discuss something urgent?{' '}
            <a href="mailto:8k@ouirise.co" className="text-ray hover:underline">
              8k@ouirise.co
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
