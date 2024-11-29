import { createFileRoute, useNavigate } from '@tanstack/react-router';

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@mui/material';
import { KeyboardEvent, useState } from 'react';

export const Route = createFileRoute('/verify-code')({
  component: VerifyCode,
});

function VerifyCode() {
  const navigate = useNavigate({ from: '/verify-code' });
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');

    if (otpCode.length !== 4) {
      setError('Please enter the complete 4-digit OTP');
      return;
    }

    navigate({ to: '/reset-password' });
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
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
              maxWidth: '400px',
              width: '100%',
              mx: 'auto',
              textAlign: 'center',
              pt: '50px',
              gap: 1,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Verify Your Code
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              gutterBottom
            >
              Enter the passcode you just received on your email address ending
              with ********in@gmail.com
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                my: 2,
              }}
            >
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  id={`otp-input-${index}`}
                  variant="outlined"
                  slotProps={{
                    htmlInput: { maxLength: 1, style: { textAlign: 'center' } },
                  }}
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  sx={{
                    textAlign: 'center',
                    width: 50,
                    '& .MuiOutlinedInput-root': {
                      height: 56,
                    },
                  }}
                />
              ))}
            </Box>

            {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                pt: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleVerify}
                fullWidth
                size="large"
              >
                Verify
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
