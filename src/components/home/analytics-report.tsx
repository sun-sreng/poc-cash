import { H3 } from '@/components/widgets/typography';
import { Card, CardContent } from '@mui/material';
import AnalyticsAreaChart from './analytics-area-chart';

const AnalyticsReport = () => {
  return (
    <Card>
      <CardContent>
        <H3 sx={{ fontWeight: 'bold', p: 2 }}>Analytics Report</H3>

        <AnalyticsAreaChart height={300} option={{}} />
      </CardContent>
    </Card>
  );
};

export default AnalyticsReport;
