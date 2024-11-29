import { H2 } from '@/components/widgets/typography';
import { Card, CardContent } from '@mui/material';
import BudgetProgressItem from './budget-progress-item';

const BudgetProgress = () => {
  const data = [
    { title: 'Sale Of Goods', percentage: 60, dueDate: '1 month later' },
    { title: 'Property Rental', percentage: 70, dueDate: '3 months later' },
    { title: 'Design Services', percentage: 43, dueDate: '1 month later' },
    { title: 'Service', percentage: 10, dueDate: '4 months later' },
    { title: 'Sale Of Goods', percentage: 60, dueDate: '1 month later' },
  ];

  return (
    <Card>
      <CardContent>
        <H2 sx={{ fontWeight: 'bold', mb: 2 }}>Budget progress</H2>
        {data.map((item, index) => (
          <BudgetProgressItem
            key={index}
            title={item.title}
            percentage={item.percentage}
            dueDate={item.dueDate}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default BudgetProgress;
