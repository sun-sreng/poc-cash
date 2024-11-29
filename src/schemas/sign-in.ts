import { z } from 'zod';
import { emailValidator, passwordValidator } from '../utils/zod-validators';

export const signInSchema = z.object({
  email: emailValidator,
  password: passwordValidator,
});

export type ISignIn = z.infer<typeof signInSchema>;
