'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Upload, X, FileText, Image as ImageIcon, Zap, Wrench, HelpCircle } from 'lucide-react';

const formSchema = z.object({
  requestType: z.enum(['feature', 'update', 'support', 'other']),
  title: z.string().min(3, 'Title is required'),
  description: z.string().min(20, 'Please provide more detail'),
  priority: z.enum(['low', 'medium', 'high', 'urgent']),
  desiredTimeline: z.enum(['this-week', 'next-week', 'this-month', 'flexible']),
  budgetApproved: z.enum(['yes', 'pending', 'need-quote']),
  additionalNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface UploadedFile {
  id: string;
  name: string;
  type: 'image' | 'document';
  size: number;
}

export default function ClientUpdateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType: 'feature',
      priority: 'medium',
      desiredTimeline: 'flexible',
      budgetApproved: 'need-quote',
    },
  });

  const requestType = watch('requestType');

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

  const getRequestIcon = () => {
    switch (requestType) {
      case 'feature':
        return <Zap className="w-5 h-5" />;
      case 'update':
        return <Wrench className="w-5 h-5" />;
      default:
        return <HelpCircle className="w-5 h-5" />;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/client-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          attachments: uploadedFiles.map((f) => f.name),
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
      <div className="text-center py-8">
        <div className="text-ray text-4xl mb-4">[√]</div>
        <h3 className="text-fog font-bold text-xl mb-2">Request Submitted</h3>
        <p className="text-mist mb-4">
          We&apos;ve received your request and will respond within 24 hours.
        </p>
        <p className="text-mist/70 text-sm">
          Your shadow clone is being updated with the new requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Request Type */}
      <div>
        <label className="block text-fog text-sm font-medium mb-3">Request Type *</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { value: 'feature', label: 'New Feature', icon: Zap },
            { value: 'update', label: 'Update', icon: Wrench },
            { value: 'support', label: 'Support', icon: HelpCircle },
            { value: 'other', label: 'Other', icon: FileText },
          ].map((type) => (
            <label
              key={type.value}
              className={`cursor-pointer border rounded-lg p-3 text-center transition-all ${
                requestType === type.value
                  ? 'border-ray bg-ray/10 text-ray'
                  : 'border-fog/20 text-mist hover:border-fog/40'
              }`}
            >
              <input
                type="radio"
                value={type.value}
                {...register('requestType')}
                className="hidden"
              />
              <type.icon className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Title */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Request Title *</label>
        <input
          type="text"
          placeholder="e.g., Add user authentication to admin panel"
          {...register('title')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors"
        />
        {errors.title && <p className="text-ray text-xs mt-1">{errors.title.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Description *</label>
        <p className="text-mist/70 text-xs mb-2">
          What do you need? Be specific about functionality, behavior, and expected outcomes.
        </p>
        <textarea
          placeholder="We need a new admin dashboard that shows real-time metrics... The login flow should include 2FA..."
          rows={4}
          {...register('description')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors resize-none"
        />
        {errors.description && <p className="text-ray text-xs mt-1">{errors.description.message}</p>}
      </div>

      {/* Priority & Timeline */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-fog text-sm font-medium mb-2">Priority *</label>
          <select
            {...register('priority')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="low">Low — Nice to have</option>
            <option value="medium">Medium — Standard request</option>
            <option value="high">High — Important</option>
            <option value="urgent">Urgent — Blocking</option>
          </select>
        </div>

        <div>
          <label className="block text-fog text-sm font-medium mb-2">Desired Timeline *</label>
          <select
            {...register('desiredTimeline')}
            className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="this-week">This week</option>
            <option value="next-week">Next week</option>
            <option value="this-month">This month</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Budget Status *</label>
        <div className="flex flex-wrap gap-3">
          {[
            { value: 'yes', label: 'Approved' },
            { value: 'pending', label: 'Pending approval' },
            { value: 'need-quote', label: 'Need quote first' },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                value={option.value}
                {...register('budgetApproved')}
                className="bg-void border-fog/20 text-ray focus:ring-ray"
              />
              <span className="text-mist text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Attachments</label>
        <p className="text-mist/70 text-xs mb-3">
          Screenshots, mockups, requirements docs, or reference materials.
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

      {/* Additional Notes */}
      <div>
        <label className="block text-fog text-sm font-medium mb-2">Additional Notes</label>
        <textarea
          placeholder="Anything else we should know? Edge cases, dependencies, or context..."
          rows={2}
          {...register('additionalNotes')}
          className="w-full bg-void border border-fog/20 rounded p-3 text-fog focus:border-ray outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ray text-void font-bold py-4 rounded hover:glow-ray transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {getRequestIcon()}
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}
