import { z } from 'zod';

export const budgetSchema = z.object({
  name: z.string().min(1, { message: 'Budget name is required' }),
  amount: z.string().min(1, { message: 'Budget amount is required' }),
  duration: z.coerce.date({ required_error: 'Duration is required' }),
  note: z.string().optional(),
});

export type IBudget = z.infer<typeof budgetSchema>;

export const budgetItemSchema = z.object({
  name: z.string().min(1, { message: 'Budget name is required' }),
  duration: z.coerce.date({ required_error: 'Duration is required' }),
  amount: z.string().min(1, { message: 'Budget amount is required' }),
  note: z.string().optional(),
});

export type IBudgetItem = z.infer<typeof budgetItemSchema>;
