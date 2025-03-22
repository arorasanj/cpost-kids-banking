
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Button from '@/components/Button';
import { residencySchema } from './SignUpSchemas';

interface SignUpStep3Props {
  initialData: {
    residencyStatus: string;
  };
  onNext: (data: z.infer<typeof residencySchema>) => void;
  onBack: () => void;
}

const SignUpStep3 = ({ initialData, onNext, onBack }: SignUpStep3Props) => {
  const form = useForm<z.infer<typeof residencySchema>>({
    resolver: zodResolver(residencySchema),
    defaultValues: {
      residencyStatus: initialData.residencyStatus as any,
    },
  });

  return (
    <>
      <h2 className="text-xl font-bold">Residency Status</h2>
      <p className="text-sm text-gray-500 mb-4">
        We need your residency status to verify eligibility for our banking services
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
          <FormField
            control={form.control}
            name="residencyStatus"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>I am a:</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-3"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg">
                      <FormControl>
                        <RadioGroupItem value="citizen" />
                      </FormControl>
                      <FormLabel className="font-semibold cursor-pointer">
                        Canadian Citizen
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0 p-4 border rounded-lg">
                      <FormControl>
                        <RadioGroupItem value="permanent-resident" />
                      </FormControl>
                      <FormLabel className="font-semibold cursor-pointer">
                        Canadian Permanent Resident
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SignUpStep3;
