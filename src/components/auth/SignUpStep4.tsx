
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from "@/components/ui/separator";
import { Loader2 } from 'lucide-react';
import Button from '@/components/Button';
import { sinSchema } from './SignUpSchemas';

interface SignUpStep4Props {
  initialData: {
    sin: string;
  };
  onSubmit: (data: z.infer<typeof sinSchema>) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const SignUpStep4 = ({ initialData, onSubmit, onBack, isSubmitting }: SignUpStep4Props) => {
  const form = useForm<z.infer<typeof sinSchema>>({
    resolver: zodResolver(sinSchema),
    defaultValues: {
      sin: initialData.sin,
    },
  });

  return (
    <>
      <h2 className="text-xl font-bold">Social Insurance Number</h2>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-gray-700">
          We're required to collect your SIN to verify your identity and for tax reporting. Security is our top priority and all of your information is protected.
        </p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="sin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Insurance Number (SIN)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="123456789" 
                    maxLength={9}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Enter your 9-digit SIN without spaces or dashes
                </FormDescription>
              </FormItem>
            )}
          />
          
          <Separator className="my-4" />
          
          <div className="rounded-lg border p-4 bg-gray-50">
            <h3 className="text-sm font-semibold">Privacy & Security</h3>
            <p className="text-xs text-gray-500 mt-1">
              Your information is encrypted with bank-level security. We never share your personal details with third parties without your consent.
            </p>
          </div>
          
          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                "Complete Sign Up"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignUpStep4;
