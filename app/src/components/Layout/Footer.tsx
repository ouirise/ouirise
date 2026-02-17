import { Hexagon } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  { href: '/prompts', label: 'Resources' },
  { href: '/method', label: 'Method' },
  { href: '/history', label: 'History' },
  { href: '/about', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-fog/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-fog font-bold text-lg hover:text-ray transition-colors flex items-center gap-2"
        >
          <Hexagon className="text-ray" size={18} strokeWidth={2.5} />
          OuiRise
        </Link>

        {/* Email */}
        <a 
          href="mailto:8k@ouirise.co" 
          className="text-mist text-sm hover:text-ray transition-colors"
        >
          8k@ouirise.co
        </a>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-mist hover:text-ray transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
