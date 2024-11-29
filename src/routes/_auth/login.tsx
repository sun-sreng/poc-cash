import { signIn } from '@/utils/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  IconButton,
  InputAdornment,
  Link as MuiLink,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createFileRoute, Link, useRouter } from '@tanstack/react-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ISignIn, signInSchema } from '../../schemas/sign-in';

export const Route = createFileRoute('/_auth/login')({
  component: SignIn,
});

function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: ISignIn) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (data.email === 'test@gmail.com' && data.password === 'P@ssw0rd') {
        signIn();
        router.invalidate();
      }

      setOpen(true);
    } catch (error) {
      console.error('failed', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
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
        <Typography component="h1" variant="h2" sx={{ color: 'primary.main' }}>
          Sign In
        </Typography>
        <Stack spacing={2} sx={{ width: '100%', pt: 4, pb: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '9999px',
              textTransform: 'none',
              color: '#171717',
            }}
            startIcon={
              <img src="/assets/icons/google.svg" alt="google" width="20px" />
            }
          >
            Continue with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="large"
            sx={{
              borderRadius: '9999px',
              textTransform: 'none',
              color: '#171717',
            }}
            startIcon={
              <img
                src="/assets/icons/facebook.svg"
                alt="facebook"
                width="20px"
              />
            }
          >
            Continue with Facebook
          </Button>
        </Stack>

        <Divider sx={{ width: '100%', my: 2 }}>OR</Divider>
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
                    type={showPassword ? 'text' : 'password'}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword
                                  ? 'hide the password'
                                  : 'display the password'
                              }
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? (
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
              <MuiLink component={Link} to="/forgot-password" variant="body2">
                Forgot your password
              </MuiLink>
            </Grid2>
            <Grid2 size={12} sx={{ pt: '16px' }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ width: '200px' }}
                size="large"
              >
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>
            </Grid2>
            <Grid2 size={12}>
              <Typography variant="body2">
                Don&apos;t have an account?{' '}
                <MuiLink component={Link} to="/register">
                  Sign Up
                </MuiLink>
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Username or password is incorrect, Please try it again
        </Alert>
      </Snackbar>
    </Container>
  );
}
