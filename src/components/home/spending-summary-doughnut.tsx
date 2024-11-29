import { useTheme } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

const ExpenseSummaryDoughnutChart = ({
  height = '300px',
  color = ['#8AC265', '#A7D18C', '#6DB33F'],
}: {
  height?: string;
  color?: string[];
}) => {
  const theme = useTheme();

  const option = {
    legend: {
      show: true,
      itemGap: 20,
      icon: 'circle',

      bottom: 0,
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
      },
    },
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}%',
    },
    xAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],
    yAxis: [{ axisLine: { show: false }, splitLine: { show: false } }],

    series: [
      {
        name: 'Expenses Summary',
        type: 'pie',
        radius: ['45%', '72.55%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            textStyle: {
              color: theme.palette.text.secondary,
              fontSize: 13,
            },
            formatter: '{a}',
          },
          emphasis: {
            show: true,
            textStyle: { fontSize: '14', fontWeight: 'normal' },
            formatter: '{b} \n{d}%',
          },
        },
        labelLine: {
          normal: { show: true },
        },
        data: [
          { value: 10, name: 'Watch' },
          { value: 20, name: 'Health care' },
          { value: 70, name: 'Travelling' },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: height }}
      option={{ ...option, color: [...color] }}
    />
  );
};

export default ExpenseSummaryDoughnutChart;
