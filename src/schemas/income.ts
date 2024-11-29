import { z } from 'zod';

export const incomeSchema = z.object({
  category: z.string().min(1, { message: 'Category is required' }),
  dateTime: z.coerce.date({ required_error: 'Date Time is required' }),
  amount: z.string().min(1, { message: 'Amount is required' }),
  note: z.string().optional(),
});

export type IIncome = z.infer<typeof incomeSchema>;
