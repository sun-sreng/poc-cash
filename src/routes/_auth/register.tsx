import { zodResolver } from '@hookform/resolvers/zod';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid2,
  IconButton,
  InputAdornment,
  MenuItem,
  Link as MuiLink,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ISignUp, signUpSchema } from '../../schemas/sign-up';

export const Route = createFileRoute('/_auth/register')({
  component: SignUp,
});

function SignUp() {
  const navigate = useNavigate({ from: '/register' });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      gender: '',
      dob: new Date(),
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ISignUp) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('data:', data);

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
    <Container maxWidth={false}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography component="h1" variant="h2">
          Create an account
        </Typography>
        <Typography component="p" variant="body1">
          Already have an account?{' '}
          <MuiLink component={Link} to="/login">
            Log in
          </MuiLink>
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: '100%', mt: 1 }}
          noValidate
          autoComplete="off"
        >
          <Grid2 container spacing={1}>
            <Grid2 size={12}>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={12}>
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={6}>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    defaultValue={field.value}
                    label="Gender"
                    error={!!errors.gender}
                    helperText={errors.gender?.message}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                )}
              />
            </Grid2>
            <Grid2 size={6}>
              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    label="Date of Birth"
                    slotProps={{
                      textField: {
                        error: !!errors.dob,
                        helperText: errors.dob?.message,
                      },
                    }}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={12}>
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
            </Grid2>
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
                    helperText={
                      errors.confirmPassword?.message ||
                      'Use 8 or more characters with a mix of letters, numbers & symbols'
                    }
                    type={showPassword.confirmPassword ? 'text' : 'password'}
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
            <Grid2 size={12}>
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    color="primary"
                    onChange={(e) => {
                      setShowPassword({
                        password: e.target.checked,
                        confirmPassword: e.target.checked,
                      });
                    }}
                  />
                }
                label="Show password"
                labelPlacement="end"
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
                sx={{ mb: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing Up...' : 'Create an account'}
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </Container>
  );
}
