
import * as z from 'zod';

export const baseFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const personalInfoSchema = z.object({
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
