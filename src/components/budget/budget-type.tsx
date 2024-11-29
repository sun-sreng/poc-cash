import { Box, Grid2 as Grid } from '@mui/material';
import { FC } from 'react';
import { H4 } from '../widgets/typography';
import BudgetCard, { BudgetCardProps } from './budget-card';

export interface BudgetTypeProps {
  title: 'Active Budget' | 'Achieved Budget';
  budgets: BudgetCardProps[];
}

export const BudgetType: FC<BudgetTypeProps> = ({ title, budgets }) => {
  return (
    <Box>
      <H4 sx={{ mb: 1 }}>{title}</H4>
      <Grid container spacing={3}>
        {budgets.map((budget) => (
          <Grid key={budget.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <BudgetCard {...budget} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BudgetType;
