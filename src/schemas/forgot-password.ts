import { z } from 'zod';
import { emailValidator } from '../utils/zod-validators';

export const forgotPasswordSchema = z.object({
  email: emailValidator,
});

export type IForgotPassword = z.infer<typeof forgotPasswordSchema>;
