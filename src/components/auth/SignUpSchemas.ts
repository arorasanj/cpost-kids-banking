
import * as z from 'zod';

export const baseFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const personalInfoSchema = z.object({
  dob: z.string()
    .regex(/^\d{4}\/\d{2}\/\d{2}$/, "Please enter date in YYYY/MM/DD format")
    .refine(dateStr => {
      try {
        const parts = dateStr.split('/');
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // JavaScript months are 0-based
        const day = parseInt(parts[2], 10);
        
        // Check if it's a valid date
        const date = new Date(year, month, day);
        return date.getFullYear() === year && 
               date.getMonth() === month && 
               date.getDate() === day;
      } catch {
        return false;
      }
    }, "Please enter a valid date")
    .refine(dateStr => {
      const parts = dateStr.split('/');
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      
      const date = new Date(year, month, day);
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

export const residencySchema = z.object({
  residencyStatus: z.enum(['citizen', 'permanent-resident'], {
    required_error: "Please select your residency status",
  }),
});

export const sinSchema = z.object({
  sin: z.string()
    .min(9, "SIN must be 9 digits")
    .max(9, "SIN must be 9 digits")
    .refine(val => /^\d{9}$/.test(val), "SIN must contain only numbers"),
});

export type FormStep = 1 | 2 | 3 | 4;

// Export the inferred types from the schemas for use in components
export type BaseFormValues = z.infer<typeof baseFormSchema>;
export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
export type ResidencyValues = z.infer<typeof residencySchema>;
export type SinValues = z.infer<typeof sinSchema>;
