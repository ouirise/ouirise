'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Name required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message too brief'),
  remember: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remember: false,
    },
  });

  const remember = watch('remember');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass border border-ray/30 rounded-lg p-8 text-center">
        <div className="text-ray text-2xl mb-2">[√]</div>
        <h3 className="text-fog font-bold mb-2">Message Sent</h3>
        <p className="text-mist text-sm">
          {remember ? 'Saved to our records.' : 'Delivered without storage.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto">
      <div>
        <input
          type="text"
          placeholder="Name"
          {...register('name')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-au outline-none transition-colors"
        />
        {errors.name && (
          <p className="text-ray text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-au outline-none transition-colors"
        />
        {errors.email && (
          <p className="text-ray text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message"
          rows={4}
          {...register('message')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-au outline-none transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-ray text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-center space-x-3 cursor-pointer group">
        <input
          type="checkbox"
          {...register('remember')}
          className="w-4 h-4 bg-void border-fog/20 rounded focus:ring-ray focus:ring-2"
        />
        <span className="text-mist text-sm group-hover:text-fog transition-colors">
          Save this message to our records
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full bg-ray text-void font-bold py-3 rounded 
          hover:glow-ray transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {isSubmitting ? 'Transmitting...' : 'Send Message'}
      </button>

      {!remember && (
        <p className="text-xs text-mist text-center">
          If unchecked, message is delivered but not stored.
        </p>
      )}
    </form>
  );
}
