import { Box } from '@mui/material';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <Box
      component="section"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#6DB33F',
      }}
    >
      <Box component="div" sx={{ textAlign: 'center' }}>
        <Box component="div" sx={{ mb: '32px' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <Box
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0.75rem',
                width: '12rem',
                height: '6rem',
                bgcolor: 'background.default',
              }}
            >
              <img src="/logo.svg" alt="Logo" />
            </Box>
          </motion.div>
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((index) => (
            <Box
              component={motion.div}
              sx={{
                bgcolor: 'background.default',
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '9999px',
              }}
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SplashScreen;
