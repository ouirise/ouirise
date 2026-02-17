'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, X, FileText, Image as ImageIcon } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  companyName: z.string().min(1, 'Company name is required'),
  website: z.string().optional(),
  industry: z.string().min(1, 'Industry is required'),
  currentChallenges: z.string().min(20, 'Please describe your challenges in more detail'),
  desiredOutcomes: z.string().min(20, 'Please describe your desired outcomes'),
  budgetRange: z.enum(['10k-25k', '25k-50k', '50k-100k', '100k+', 'not-sure']),
  timeline: z.enum(['asap', '1-3months', '3-6months', 'flexible']),
  existingSystems: z.string().optional(),
  teamSize: z.enum(['just-me', '2-10', '11-50', '50+']),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'document';
  size: number;
}

export default function ProjectRequestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budgetRange: 'not-sure',
      timeline: 'flexible',
      teamSize: '2-10',
    },
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const isImage = file.type.startsWith('image/');
      const newFile: UploadedFile = {
        id: Math.random().toString(36).substring(7),
        name: file.name,
        type: isImage ? 'image' : 'document',
        size: file.size,
      };
      setUploadedFiles((prev) => [...prev, newFile]);
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/project-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          attachments: uploadedFiles.map(f => f.name),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        setUploadedFiles([]);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass border border-ray/30 rounded-lg p-12 text-center">
        <div className="text-ray text-4xl mb-4">[√]</div>
        <h3 className="text-fog font-bold text-xl mb-2">Request Received</h3>
        <p className="text-mist mb-4">
          We&apos;re analyzing your requirements and will prepare your preliminary plan within 24-48 hours.
        </p>
        <p className="text-mist/70 text-sm">
          A shadow clone specific to your situation is being configured.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-fog text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            placeholder="Your name"
            {...register('name')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
          />
          {errors.name && <p className="text-ray text-xs mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-fog text-sm font-medium mb-2">Email Address *</label>
          <input
            type="email"
            placeholder="you@company.com"
            {...register('email')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
          />
          {errors.email && <p className="text-ray text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-fog text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register('phone')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-fog text-sm font-medium mb-2">Company Name *</label>
          <input
            type="text"
            placeholder="Your company"
            {...register('companyName')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
          />
          {errors.companyName && <p className="text-ray text-xs mt-1">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-fog text-sm font-medium mb-2">Current Website</label>
          <input
            type="url"
            placeholder="https://yourcompany.com"
            {...register('website')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-fog text-sm font-medium mb-2">Industry *</label>
          <input
            type="text"
            placeholder="e.g., Healthcare, Finance, E-commerce"
            {...register('industry')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
          />
          {errors.industry && <p className="text-ray text-xs mt-1">{errors.industry.message}</p>}
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Current Challenges *</label>
        <p className="text-mist/70 text-xs mb-2">
          Describe the problems you&apos;re facing. What&apos;s not working? Where are the bottlenecks?
        </p>
        <textarea
          placeholder="Our current system is slow... Our team spends 10 hours a week on manual data entry... We can't scale because..."
          rows={4}
          {...register('currentChallenges')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors resize-none"
        />
        {errors.currentChallenges && <p className="text-ray text-xs mt-1">{errors.currentChallenges.message}</p>}
      </div>

      <div>
        <label className="block text-fog text-sm font-medium mb-2">Desired Outcomes *</label>
        <p className="text-mist/70 text-xs mb-2">
          What does success look like? What should be different after we build this?
        </p>
        <textarea
          placeholder="We need to process 10x the volume... Reduce manual work by 80%... Launch in 3 months with..."
          rows={4}
          {...register('desiredOutcomes')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors resize-none"
        />
        {errors.desiredOutcomes && <p className="text-ray text-xs mt-1">{errors.desiredOutcomes.message}</p>}
      </div>

      <div>
        <label className="block text-fog text-sm font-medium mb-2">Existing Systems</label>
        <p className="text-mist/70 text-xs mb-2">
          What tools, platforms, or systems are you currently using? (CRM, ERP, databases, etc.)
        </p>
        <textarea
          placeholder="Salesforce for CRM, QuickBooks for accounting, custom MySQL database..."
          rows={2}
          {...register('existingSystems')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors resize-none"
        />
      </div>

      {/* Selections */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-fog text-sm font-medium mb-2">Budget Range *</label>
          <select
            {...register('budgetRange')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label className="block text-fog text-sm font-medium mb-2">Timeline *</label>
          <select
            {...register('timeline')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="asap">ASAP (Rush project)</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label className="block text-fog text-sm font-medium mb-2">Team Size *</label>
          <select
            {...register('teamSize')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="just-me">Just me</option>
            <option value="2-10">2-10 people</option>
            <option value="11-50">11-50 people</option>
            <option value="50+">50+ people</option>
          </select>
        </div>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Attachments</label>
        <p className="text-mist/70 text-xs mb-3">
          Upload screenshots, wireframes, requirements docs, or any relevant files.
        </p>
        
        <div className="border-2 border-dashed border-fog/20 rounded-lg p-6 text-center hover:border-ray/40 transition-colors">
          <input
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx,.txt,.md"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <Upload className="w-8 h-8 text-mist mb-2" />
            <span className="text-mist text-sm">Click to upload files</span>
            <span className="text-mist/50 text-xs mt-1">Images, PDFs, documents up to 10MB</span>
          </label>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between bg-void/50 rounded p-2">
                <div className="flex items-center gap-2">
                  {file.type === 'image' ? (
                    <ImageIcon className="w-4 h-4 text-electric" />
                  ) : (
                    <FileText className="w-4 h-4 text-electric" />
                  )}
                  <span className="text-fog text-sm">{file.name}</span>
                  <span className="text-mist/50 text-xs">({(file.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(file.id)}
                  className="text-mist hover:text-ray transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-fog text-sm font-medium mb-2">Additional Information</label>
        <textarea
          placeholder="Anything else we should know? Competitors you admire, technical constraints, compliance requirements..."
          rows={3}
          {...register('additionalInfo')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ray text-void font-bold py-4 rounded hover:glow-ray transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Project Request'}
      </button>

      <p className="text-xs text-mist/50 text-center">
        Your information is used solely to prepare your project plan. We do not share data with third parties.
      </p>
    </form>
  );
}
