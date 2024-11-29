import { z } from 'zod';

export const emailValidator = z
  .string()
  .trim()
  .toLowerCase()
  .email({ message: 'Invalid email address' })
  .max(254, { message: 'Email address is too long' });

export const passwordValidator = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter',
  })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter',
  })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' });

export const confirmPasswordValidator = z.string();
