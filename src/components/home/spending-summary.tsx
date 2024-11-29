import ExpenseSummaryDoughnutChart from '@/components/home/spending-summary-doughnut';
import { FlexBetween, FlexJustifyEnd } from '@/components/widgets/flex';
import { H1, H4, Small, TextMuted } from '@/components/widgets/typography';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Card, CardContent } from '@mui/material';

export const SpendingSummary = () => {
  return (
    <Card>
      <CardContent>
        <FlexBetween>
          <H4>Your Expending Summary</H4>
          <FlexJustifyEnd>
            <Small>This Week</Small>
            <KeyboardArrowDown fontSize="small" />
          </FlexJustifyEnd>
        </FlexBetween>
        <H1
          sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '32px' }}
        >
          $ 1,800
          <span style={{ color: '#e2e8f0' }}>.00</span>
        </H1>
        <TextMuted>10 transactions</TextMuted>

        <Box position="relative">
          <ExpenseSummaryDoughnutChart />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SpendingSummary;
