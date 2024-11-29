import { Card, CardContent } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const BudgetAchievement = () => {
  const chartOptions = {
    title: {
      text: 'Budget Achievement',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['2022', '2023', '2024'],
      bottom: 0,
    },
    grid: {
      left: 5,
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}',
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      data: ['Budget'],
      axisLabel: {
        formatter: '{value}',
      },
    },
    series: [
      {
        name: '2022',
        type: 'bar',
        data: [85],
        label: {
          show: true,
          formatter: '{a}: {c}',
        },
        itemStyle: {
          color: '#43A047',
        },
      },
      {
        name: '2023',
        type: 'bar',
        data: [130],
        label: {
          show: true,
          formatter: '{a}: {c}',
        },
        itemStyle: {
          color: '#66BB6A',
        },
      },
      {
        name: '2024',
        type: 'bar',
        data: [63],
        label: {
          show: true,
          formatter: '{a}: {c}',
        },
        itemStyle: {
          color: '#A5D6A7',
        },
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <ReactEcharts
          option={chartOptions}
          style={{ height: 300, width: '100%' }}
        />
      </CardContent>
    </Card>
  );
};

export default BudgetAchievement;
