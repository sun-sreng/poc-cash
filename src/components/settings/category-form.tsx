import { categorySchema, ICategory } from '@/schemas/category';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, Circle, Favorite, Star } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid2 as Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { H2 } from '../widgets/typography';

type OptionType = {
  label: string;
  value: string;
  icon?: JSX.Element;
};

const colors: OptionType[] = [
  { label: 'Red', value: '#ff0000' },
  { label: 'Green', value: '#00ff00' },
  { label: 'Blue', value: '#0000ff' },
];

const icons: OptionType[] = [
  { label: 'Circle', value: 'circle', icon: <Circle color="primary" /> },
  { label: 'Star', value: 'star', icon: <Star color="primary" /> },
  { label: 'Check', value: 'check', icon: <Check color="primary" /> },
  { label: 'Heart', value: 'heart', icon: <Favorite color="primary" /> },
];

export const CategoryForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ICategory>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      icon: '',
      color: '',
      name: '',
    },
  });

  const onSubmit = async (data: ICategory) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('data:', data);
      reset();
    } catch (error) {
      console.error('failed', error);
    }
  };

  return (
    <Box>
      <H2 sx={{ color: '#324C5B' }}>Create a new category</H2>
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
            name="icon"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                defaultValue={field.value}
                label="Icon"
                error={!!errors.icon}
                helperText={errors.icon?.message}
              >
                {icons.map((icon) => (
                  <MenuItem key={icon.value} value={icon.value}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      {icon.icon}
                      <Typography>{icon.label}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                defaultValue={field.value}
                label="Background Color"
                error={!!errors.color}
                helperText={errors.color?.message}
              >
                {colors.map((color) => (
                  <MenuItem key={color.value} value={color.value}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          backgroundColor: color.value,
                          border: '1px solid #ddd',
                        }}
                      />
                      <Typography>{color.label}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        <Grid size={12}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                placeholder="Name"
                type="text"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        <Grid size={12}>
          <Box textAlign="start">
            <Button
              variant="contained"
              color="success"
              size="large"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Add Category'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryForm;
