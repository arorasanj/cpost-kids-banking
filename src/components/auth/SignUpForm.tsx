
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from "@/components/ui/separator";
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';

interface SignUpFormProps {
  onSignedIn: () => void;
}

// Base form schema
const baseFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Step 2 form schema
const personalInfoSchema = z.object({
  dob: z.date({
    required_error: "Please select a date of birth",
    invalid_type_error: "That's not a date!",
  }).refine(date => {
    const today = new Date();
    const eighteenYearsAgo = new Date(today);
    eighteenYearsAgo.setFullYear(today.getFullYear() - 18);
    return date <= eighteenYearsAgo;
  }, "You must be at least 18 years old"),
  gender: z.enum(['male', 'female', 'non-binary', 'prefer-not-to-say'], {
    required_error: "Please select a gender option",
  }),
  address: z.string().min(5, "Please enter your current address"),
});

// Step 3 form schema
const residencySchema = z.object({
  residencyStatus: z.enum(['citizen', 'permanent-resident'], {
    required_error: "Please select your residency status",
  }),
});

// Step 4 form schema
const sinSchema = z.object({
  sin: z.string()
    .min(9, "SIN must be 9 digits")
    .max(9, "SIN must be 9 digits")
    .refine(val => /^\d{9}$/.test(val), "SIN must contain only numbers"),
});

type FormStep = 1 | 2 | 3 | 4;

const SignUpForm = ({ onSignedIn }: SignUpFormProps) => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    dob: new Date(),
    gender: 'prefer-not-to-say',
    address: '',
    residencyStatus: 'citizen',
    sin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Step 1 form
  const step1Form = useForm<z.infer<typeof baseFormSchema>>({
    resolver: zodResolver(baseFormSchema),
    defaultValues: {
      email: formData.email,
      password: formData.password,
    },
  });
  
  // Step 2 form
  const step2Form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      dob: formData.dob,
      gender: formData.gender as any,
      address: formData.address,
    },
  });
  
  // Step 3 form
  const step3Form = useForm<z.infer<typeof residencySchema>>({
    resolver: zodResolver(residencySchema),
    defaultValues: {
      residencyStatus: formData.residencyStatus as any,
    },
  });
  
  // Step 4 form
  const step4Form = useForm<z.infer<typeof sinSchema>>({
    resolver: zodResolver(sinSchema),
    defaultValues: {
      sin: formData.sin,
    },
  });

  const handleStep1Submit = (data: z.infer<typeof baseFormSchema>) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  const handleStep2Submit = (data: z.infer<typeof personalInfoSchema>) => {
    setFormData({ ...formData, ...data });
    setStep(3);
  };

  const handleStep3Submit = (data: z.infer<typeof residencySchema>) => {
    setFormData({ ...formData, ...data });
    setStep(4);
  };

  const handleStep4Submit = async (data: z.infer<typeof sinSchema>) => {
    // Combine all form data
    const completeFormData = {
      ...formData,
      ...data
    };
    
    setIsSubmitting(true);
    
    // Simulate API call
    console.log('Sign Up Complete:', completeFormData);
    
    // Simulate delay for API call
    setTimeout(() => {
      setIsSubmitting(false);
      onSignedIn();
    }, 1500);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-between mb-6">
      {[1, 2, 3, 4].map((s) => (
        <div 
          key={s} 
          className={`
            flex items-center justify-center w-8 h-8 rounded-full 
            ${step === s ? 'bg-cpost-blue text-white' : 
              step > s ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}
          `}
        >
          {step > s ? '✓' : s}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {renderStepIndicator()}
      
      {step === 1 && (
        <>
          <h2 className="text-xl font-bold">Account Information</h2>
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-4">
              <FormField
                control={step1Form.control}
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
                control={step1Form.control}
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
      )}
      
      {step === 2 && (
        <>
          <h2 className="text-xl font-bold">Personal Information</h2>
          <p className="text-sm text-gray-500 mb-4">
            We use this to personalize your banking experience
          </p>
          
          <Form {...step2Form}>
            <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-4">
              <FormField
                control={step2Form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={step2Form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Female
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="non-binary" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Non-binary
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="prefer-not-to-say" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Prefer not to say
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={step2Form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
      
      {step === 3 && (
        <>
          <h2 className="text-xl font-bold">Residency Status</h2>
          <p className="text-sm text-gray-500 mb-4">
            We need your residency status to verify eligibility for our banking services
          </p>
          
          <Form {...step3Form}>
            <form onSubmit={step3Form.handleSubmit(handleStep3Submit)} className="space-y-4">
              <FormField
                control={step3Form.control}
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
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
      
      {step === 4 && (
        <>
          <h2 className="text-xl font-bold">Social Insurance Number</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-700">
              We're required to collect your SIN to verify your identity and for tax reporting. Security is our top priority and all of your information is protected.
            </p>
          </div>
          
          <Form {...step4Form}>
            <form onSubmit={step4Form.handleSubmit(handleStep4Submit)} className="space-y-4">
              <FormField
                control={step4Form.control}
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
                <Button type="button" variant="outline" onClick={() => setStep(3)}>
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
      )}
    </div>
  );
};

export default SignUpForm;
