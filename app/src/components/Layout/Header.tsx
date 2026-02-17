'use client';

import { Hexagon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/prompts', label: 'Resources' },
  { href: '/method', label: 'Method' },
  { href: '/about', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-fog/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo / Branding */}
          <h1 className="mr-auto">
            <Link 
              href="/" 
              className="text-fog font-bold text-xl hover:text-ray transition-colors flex items-center gap-2"
            >
              <Hexagon className="text-ray" size={20} strokeWidth={2.5} />
              OuiRise
            </Link>
          </h1>

          {/* Navigation */}
          <nav className="flex items-center gap-4 sm:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive 
                      ? 'text-ray font-medium' 
                      : 'text-mist hover:text-ray'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
