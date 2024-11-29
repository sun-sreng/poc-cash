import { expenseSchema, IExpense } from '@/schemas/expense';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { H4 } from '../widgets/typography';

export const ExpenseForm = () => {
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IExpense>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      category: '',
      dateTime: new Date(),
      amount: '',
      note: '',
    },
  });

  const onSubmit = async (data: IExpense) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('data:', data);
      setOpen(true);
      reset();
    } catch (error) {
      console.error('failed', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <H4 sx={{ mb: 1 }}>Transaction Expense</H4>
      <Card variant="outlined" sx={{ p: 2 }}>
        <CardContent>
          <H4>Please Input Your Expense</H4>
          <Grid
            component={'form'}
            container
            spacing={1}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    defaultValue={field.value}
                    label="Choose Category"
                    error={!!errors.category}
                    helperText={errors.category?.message}
                  >
                    <MenuItem value="Food">Food</MenuItem>
                    <MenuItem value="Transport">Transport</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                  </TextField>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Controller
                name="dateTime"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label="Date of Birth"
                    slotProps={{
                      textField: {
                        error: !!errors.dateTime,
                        helperText: errors.dateTime?.message,
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*\.?\d*$/.test(value)) {
                        field.onChange(value);
                      }
                    }}
                    label="Amount"
                    placeholder="Input Amount"
                    type="text"
                    error={!!errors.amount}
                    helperText={errors.amount?.message}
                    slotProps={{
                      input: {
                        endAdornment: <Typography>USD</Typography>,
                      },
                    }}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Controller
                name="note"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Note"
                    placeholder="Note"
                    type="text"
                    error={!!errors.note}
                    helperText={errors.note?.message}
                  />
                )}
              />
            </Grid>

            <Grid size={12}>
              <Box textAlign="end">
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Add Expense'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Successfully added a new transaction
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ExpenseForm;
