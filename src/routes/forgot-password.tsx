import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Controller, useForm } from 'react-hook-form';
import {
  IForgotPassword,
  forgotPasswordSchema,
} from '../schemas/forgot-password';

export const Route = createFileRoute('/forgot-password')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: '/forgot-password' });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = async (data: IForgotPassword) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Data:', data);

      navigate({ to: '/verify-code' });
    } catch (error) {
      console.error('failed', error);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: '800px',
          minHeight: '400px',
          p: 2,
          bgcolor: 'background.paper',
        }}
      >
        <CardContent>
          <img
            src="/logo.svg"
            alt="Logo"
            style={{ width: '120px', height: 'auto' }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '576px',
              width: '100%',
              mx: 'auto',
              textAlign: 'center',
              pt: '50px',
              gap: 1,
            }}
          >
            <Typography variant="h2" sx={{ color: 'primary.main' }}>
              Forgot Password
            </Typography>
            <Typography variant="body1">
              Please, enter your e-mail address below to receive your user and a
              new password
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 2, width: '100%' }}
              noValidate
              autoComplete="off"
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email Address"
                    autoComplete="username"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                disabled={isSubmitting}
                size="large"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
