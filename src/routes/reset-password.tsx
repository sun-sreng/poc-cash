import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IResetPassword, resetPasswordSchema } from '../schemas/reset-password';

export const Route = createFileRoute('/reset-password')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: '/reset-password' });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const onSubmit = async (data: IResetPassword) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Data:', data);

      reset();
      navigate({ to: '/login' });
    } catch (error) {
      console.error('failed', error);
    }
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
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
          <Link to="/">
            <img
              src="/logo.svg"
              alt="Logo"
              style={{ width: '120px', height: 'auto' }}
            />
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '500px',
              width: '100%',
              mx: 'auto',
              textAlign: 'center',
              pt: '50px',
              gap: 1,
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: 'primary.main', textAlign: 'left', fontWeight: 500 }}
            >
              Please enter a new password below
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1, width: '100%' }}
              noValidate
              autoComplete="off"
            >
              <Grid2 container>
                <Grid2 size={12}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Password"
                        autoComplete="new-password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        type={showPassword.password ? 'text' : 'password'}
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label={
                                    showPassword.password
                                      ? 'hide the password'
                                      : 'display the password'
                                  }
                                  onClick={() =>
                                    togglePasswordVisibility('password')
                                  }
                                  edge="end"
                                >
                                  {showPassword.password ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Confirm Password"
                        autoComplete="new-password"
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                        type={
                          showPassword.confirmPassword ? 'text' : 'password'
                        }
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label={
                                    showPassword.confirmPassword
                                      ? 'hide the password'
                                      : 'display the password'
                                  }
                                  onClick={() =>
                                    togglePasswordVisibility('confirmPassword')
                                  }
                                  edge="end"
                                >
                                  {showPassword.confirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    )}
                  />
                </Grid2>
                <Grid2
                  size={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Signing Up...' : 'Create an account'}
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
