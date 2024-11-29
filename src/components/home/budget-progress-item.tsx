import { FlexBetween } from '@/components/widgets/flex';
import { H4, TextMuted } from '@/components/widgets/typography';
import { ChevronRight } from '@mui/icons-material';
import { Box, IconButton, Paper, Stack } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

export interface BudgetProgressItemProps {
  title: string;
  percentage: number;
  dueDate: string;
}

const BudgetProgressItem: FC<BudgetProgressItemProps> = ({
  title,
  percentage,
  dueDate,
}) => {
  const chartOptions = {
    series: [
      {
        type: 'pie',
        radius: ['70%', '90%'],
        avoidLabelOverlap: false,
        label: { show: false },
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        data: [
          {
            value: percentage,
            name: 'Progress',
            itemStyle: { color: '#4caf50' },
            selected: true,
          },
          {
            value: 100 - percentage,
            name: 'Remaining',
            itemStyle: { color: '#e0e0e0' },
          },
        ],
      },
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: `${percentage}%`,
          fontSize: 16,
          fontWeight: 'bold',
          align: 'center',
          verticalAlign: 'middle',
        },
      },
    ],
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2, borderRadius: 2 }}>
      <FlexBetween>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ m: 1 }}>
            <ReactECharts
              option={chartOptions}
              style={{ width: 60, height: 60 }}
              opts={{ renderer: 'svg' }}
            />
          </Box>
          <Box>
            <H4>{title}</H4>
            <TextMuted sx={{ fontSize: '14px' }}>{dueDate}</TextMuted>
          </Box>
        </Stack>
        <IconButton>
          <ChevronRight fontSize="large" />
        </IconButton>
      </FlexBetween>
    </Paper>
  );
};

export default BudgetProgressItem;
