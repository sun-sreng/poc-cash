import { z } from 'zod';
import {
  confirmPasswordValidator,
  emailValidator,
  passwordValidator,
} from '../utils/zod-validators';

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: 'First name must be at least 2 characters' })
      .max(50, { message: 'First name cannot exceed 50 characters' }),
    lastName: z
      .string()
      .trim()
      .min(2, { message: 'Last name must be at least 2 characters' })
      .max(50, { message: 'Last name cannot exceed 50 characters' }),
    gender: z.string().trim().min(1, { message: 'Gender is required' }),
    dob: z.coerce.date({ required_error: 'Date of birth is required' }),
    email: emailValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type ISignUp = z.infer<typeof signUpSchema>;
