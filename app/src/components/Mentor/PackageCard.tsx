interface PackageProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  burden: 'Guardian' | 'Mentor';
  popular?: boolean;
}

export default function PackageCard({ 
  title, 
  subtitle, 
  price, 
  features, 
  burden, 
  popular 
}: PackageProps) {
  return (
    <div 
      className={`
        glass border rounded-lg p-6 relative transition-all duration-300 hover:border-au/50
        ${popular ? 'border-au' : 'border-fog/20'}
      `}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-au text-void text-xs px-3 py-1 rounded-full font-semibold">
          Most Popular
        </span>
      )}
      <div className="text-ray text-sm mb-2 font-medium">
        {burden === 'Guardian' ? '🛡️' : '📜'} {burden} Protocol
      </div>
      <h3 className="text-fog text-2xl font-bold mb-1">{title}</h3>
      <p className="text-mist text-sm mb-4">{subtitle}</p>
      <div className="text-fog text-3xl font-bold mb-6">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="text-mist text-sm flex items-start">
            <span className="text-ray mr-2">[√]</span>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        className="
          w-full bg-ray/20 text-ray border border-ray/50 py-2 rounded 
          hover:bg-ray/30 hover:glow-ray transition-all duration-300
          font-medium
        "
      >
        {price === 'Contact for Proposal' ? 'Request Audit' : 'Begin Coaching'}
      </button>
    </div>
  );
}
