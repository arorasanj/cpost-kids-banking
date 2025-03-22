
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Button from '@/components/Button';
import { baseFormSchema } from './SignUpSchemas';

interface SignUpStep1Props {
  initialData: {
    email: string;
    password: string;
  };
  onNext: (data: z.infer<typeof baseFormSchema>) => void;
}

const SignUpStep1 = ({ initialData, onNext }: SignUpStep1Props) => {
  const form = useForm<z.infer<typeof baseFormSchema>>({
    resolver: zodResolver(baseFormSchema),
    defaultValues: initialData,
  });

  return (
    <>
      <h2 className="text-xl font-bold">Account Information</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  At least 8 characters with uppercase, lowercase, and numbers
                </FormDescription>
              </FormItem>
            )}
          />
          
          <Button type="submit" size="lg" className="w-full mt-6">
            Continue
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignUpStep1;
