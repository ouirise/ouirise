'use client';

import { useEffect } from 'react';

export default function PrivacyGuard() {
  useEffect(() => {
    // Block common tracking scripts
    if (typeof window !== 'undefined') {
      // Disable Google Analytics
      (window as any).gtag = () => {};
      // Disable Facebook Pixel
      (window as any).fbq = () => {};
      
      // Remove tracking scripts if they exist
      const trackingScripts = document.querySelectorAll(
        'script[src*="google-analytics"], script[src*="googletagmanager"], script[src*="facebook"], script[src*="analytics"], script[src*="tracking"]'
      );
      trackingScripts.forEach((el) => el.remove());
      
      // Note: navigator.doNotTrack is read-only in modern browsers
      // We respect the user's existing DNT preference instead of setting it
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 glass text-fog text-xs px-3 py-2 rounded border border-ray/50 z-50 flex items-center gap-2 cursor-help" title="We minimize data collection and never share with third parties. For zero server data, ask about our local deployment option.">
      <span className="w-2 h-2 bg-ray rounded-sm transform rotate-45" />
      <span>Minimal data. Maximum respect.</span>
    </div>
  );
}
