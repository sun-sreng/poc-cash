import { z } from 'zod';

export const categorySchema = z.object({
  icon: z.string().min(1, { message: 'Icon is required' }),
  color: z.string().min(1, { message: 'Color is required' }),
  name: z.string().min(1, { message: 'Name is required' }),
});

export type ICategory = z.infer<typeof categorySchema>;
