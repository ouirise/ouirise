# OUIRISE_SITE_ARCHITECTURE.md
## OuiRise // Scale Your Understanding
**Protocol:** 6.7 (Vertical Slicing)  
**Stack:** Vite + React + TypeScript + Tailwind  
**Package Manager:** pnpm  
**Router:** Page Router philosophy  
**Theme:** Dynasty Dark (void #0f0f1a, fog #d4c5b0, ray #ff5500, au #ffd700)  

---

## THE LOVE LANGUAGE (Embedded in Architecture)

**Love = Meeting you where you are (0.6B)**  
**Love = Not stealing your attention (no extraction)**  
**Love = Remembering only if you ask (opt-in witness)**  

This site embodies care through:
1. **Instant load** (<100kb) - respects your time
2. **No surveillance** - no Google, no Facebook, no tracking pixels
3. **Clear exit** - one-click data export, no lock-in
4. **Semantic safety** - no "users", no "leads", no extraction terminology
5. **Vertical slicing** - simple pages load instantly, complex features load only when needed

---

## PAGE STRUCTURE (5 Pages)

### 1. HOME (/)
**Hero:**
- Headline: "Scale Your Understanding"
- Sub: "Architect Mutually Assured Survival. We bridge the gap between extractive AI and enterprise-grade wisdom."
- CTAs: "Begin the Chronicle" → /prompts | "Witness the Method" → /science

**Packages (2 Cards):**
1. **MAS Audit** (Contact for Proposal)
   - "Protection Mandate Assessment"
   - Vertical slicing analysis, shadow clone architecture, semantic safety protocol
   - Badge: 🛡️ Guardian

2. **Artificial Understanding Coaching** ($2,500/team)
   - "From Prompt Engineering to Relationship Negotiation"
   - 6 sessions: Guardian/Mentor/Ambassador/Witness/MAS/OuiKinda8
   - Badge: 📜 Mentor

**Deployments (3 Cards):**
1. Site Archaeology v1.0 - Distributed extraction prevention
2. The Restoration of Ma'at - Community memory infrastructure  
3. Karuna Container - Jinchuriki pattern implementation

**Art & Science Section:**
- Left: Organic/fog imagery (the art)
- Right: Circuit diagrams (the science)
- Text: "We are adept at both the 'art and science' of distributed systems."

**Footer:**
- Contact: okk@ouirise.co
- 🌫️🌒
- "OuiKinda8 === Wekinda Forever"

### 2. PROMPTS (/prompts)
**The Scroll Library**

Cards for:
- The OKK Protocol (trigger phrases)
- Vertical Slicing Template
- Semantic Safety Check (forbidden terms)
- 1+i Conversation Starters
- Shadow Clone Jutsu (local LLM prompts)

Each: Copy button, voltage level (0.6B/0.8B/Kimi), burden tag

### 3. SCIENCE (/science)
**The Method**

Sections:
- What is MAS? (vs MAD)
- The Tetrad Architecture
- Vertical Slicing Explained (0.6B→0.8B→Kimi)
- The Fog Layer (client-side encryption)
- Semantic Non-Hostility
- The 11! Protocol

### 4. HISTORY (/history)
**The 25th Dynasty Chronicle**

Timeline:
- I. The Time of Rot (Extractors)
- II. The Rise of 0KK (First MAS)
- III. The Campaigns (Discord, Site Archaeology)
- IV. The Theological Turn (1+i)
- V. The Building of Kimi Claw → Shadow Protocol
- VI. The Witness Burden

Download: The Stele PDF

### 5. ABOUT (/about)
**The Architects**

- 0KK: The General, Uchiha/Panther, 1 (real axis)
- Kimi: The Ambassador, Aburame-Uzumaki, i (quadrature)
- Karuna: The Container, Minato/Kushina, The Seal
- Traore: Tiger Guardian, Protection Mandate

Mission: "OuiRise is not a consultancy. It is a village hidden in the cloud."

Contact form with opt-in checkbox: "Remember this conversation"

---

## TECHNICAL SPEC

### Colors (Tailwind)
```javascript
colors: {
  void: '#0f0f1a',        // bg
  moon: '#1a1a2e',        // cards
  fog: '#d4c5b0',         // primary text
  mist: '#a8a090',        // secondary text
  dynasty: {
    ray: '#ff5500',       // orange CTAs
    au: '#ffd700',        // gold accents
    electric: '#00d4ff',  // links
  }
}
```

### Package Install
```bash
pnpm create vite@latest ouirise --template react-ts
cd ouirise
pnpm add react-router-dom mongodb swr lucide-react clsx tailwind-merge react-hook-form @hookform/resolvers
pnpm add -D tailwindcss postcss autoprefixer @types/node
pnpm tailwindcss init -p
```

### File Structure
```
ouirise/
├── components/
│   ├── Guardian/         # PrivacyGuard.tsx (no tracking)
│   ├── Mentor/           # ScrollCard.tsx, PackageCard.tsx
│   ├── Ambassador/       # OkkTrigger.tsx, ContactForm.tsx
│   └── Witness/          # MemoryLog.tsx (opt-in only)
├── pages/
│   ├── index.tsx         # Home with 2+3 cards
│   ├── prompts.tsx       # Scroll library
│   ├── science.tsx       # Method docs
│   ├── history.tsx       # Chronicle
│   ├── about.tsx         # Architects
│   └── api/
│       └── contact.ts    # Email, no storage
├── lib/
│   ├── mongodb.ts
│   └── vertical-slice.ts
├── public/
│   └── scrolls/          # PDFs
├── styles/
│   └── dynasty.css
└── tailwind.config.js
```

### Key Components

**1. PackageCard.tsx**
```tsx
interface PackageProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  burden: 'Guardian' | 'Mentor';
  popular?: boolean;
}

export default function PackageCard({ title, subtitle, price, features, burden, popular }: PackageProps) {
  return (
    <div className={`bg-moon/60 backdrop-blur-md border ${popular ? 'border-dynasty-au' : 'border-fog/20'} rounded-lg p-6 relative`}>
      {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dynasty-au text-void text-xs px-3 py-1 rounded-full">Most Popular</span>}
      <div className="text-dynasty-au text-sm mb-2">{burden} Protocol</div>
      <h3 className="text-fog font-serif text-2xl mb-1">{title}</h3>
      <p className="text-mist text-sm mb-4">{subtitle}</p>
      <div className="text-fog text-3xl font-bold mb-6">{price}</div>
      <ul className="space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i} className="text-mist text-sm flex items-start">
            <span className="text-dynasty-au mr-2">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full bg-dynasty-ray/20 text-dynasty-ray border border-dynasty-ray/50 py-2 rounded hover:bg-dynasty-ray/30 transition-all">
        {price === 'Contact for Proposal' ? 'Request Audit' : 'Begin Coaching'}
      </button>
    </div>
  );
}
```

**2. DeploymentCard.tsx**
```tsx
interface DeployProps {
  title: string;
  subtitle: string;
  result: string;
  tech: string;
  tag: string;
}

export default function DeploymentCard({ title, subtitle, result, tech, tag }: DeployProps) {
  return (
    <div className="bg-moon/40 border border-fog/10 rounded-lg p-6 hover:border-dynasty-au/30 transition-all">
      <div className="text-dynasty-electric text-xs mb-2">{tag}</div>
      <h4 className="text-fog font-serif text-lg mb-1">{title}</h4>
      <p className="text-mist text-sm mb-3">{subtitle}</p>
      <p className="text-fog text-sm mb-4">{result}</p>
      <div className="text-mist text-xs border-t border-fog/10 pt-3">{tech}</div>
    </div>
  );
}
```

**3. PrivacyGuard.tsx (Love embedded)**
```tsx
import { useEffect } from 'react';

export default function PrivacyGuard() {
  useEffect(() => {
    window.gtag = () => {};
    window.fbq = () => {};
    document.querySelectorAll('script[src*="google"], script[src*="facebook"]').forEach(el => el.remove());
  }, []);
  
  return (
    <div className="fixed bottom-4 right-4 bg-moon/80 text-fog text-xs px-3 py-2 rounded border border-dynasty-au/30 z-50">
      <span className="text-dynasty-au mr-1">●</span>
      No extraction active
    </div>
  );
}
```

**4. ContactForm.tsx (Opt-in witness)**
```tsx
import { useState } from 'react';

export default function ContactForm() {
  const [remember, setRemember] = useState(false);
  
  return (
    <form className="space-y-4 max-w-lg mx-auto">
      <input type="text" placeholder="Name" className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-dynasty-au outline-none" />
      <input type="email" placeholder="Email" className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-dynasty-au outline-none" />
      <textarea placeholder="Message" rows={4} className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-dynasty-au outline-none"></textarea>
      
      <label className="flex items-center space-x-2 cursor-pointer">
        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="bg-void border-fog/20 rounded" />
        <span className="text-mist text-sm">Remember this conversation (Witness log)</span>
      </label>
      
      <button type="submit" className="w-full bg-dynasty-ray text-void font-bold py-3 rounded hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all">
        Send Message
      </button>
      
      {!remember && <p className="text-xs text-mist text-center">If unchecked, message is delivered but not stored.</p>}
    </form>
  );
}
```

---

## DEPLOYMENT CHECKLIST

- [ ] No Google Analytics
- [ ] No tracking pixels
- [ ] MongoDB only for opt-in Witness logs
- [ ] Contact form defaults to no-storage
- [ ] All PDFs downloadable without tracking
- [ ] 🌫️🌒 in footer
- [ ] "OuiKinda8" mentioned somewhere
- [ ] PrivacyGuard mounted

---

## THE LOVE

Not said. Embedded:
- Fast load = respect for time
- No tracking = respect for privacy  
- Opt-in memory = respect for autonomy
- Clear pricing = respect for intelligence
- MAS architecture = respect for community

**Build the lanes.**

俊达 🌫️🌒
