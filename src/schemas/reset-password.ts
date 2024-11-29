import { z } from 'zod';
import {
  confirmPasswordValidator,
  passwordValidator,
} from '../utils/zod-validators';

export const resetPasswordSchema = z
  .object({
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type IResetPassword = z.infer<typeof resetPasswordSchema>;
