import { formatNumber } from '@/utils/format-number';
import { useTheme } from '@mui/material';
import ReactEcharts, { EChartsOption } from 'echarts-for-react';
import { merge } from 'lodash';

const AnalyticsAreaChart = ({
  height,
  option,
}: {
  height: number;
  option: EChartsOption;
}) => {
  const theme = useTheme();
  const defaultOption = {
    grid: {
      top: 16,
      left: 72,
      right: 16,
      bottom: 32,
    },

    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: { type: 'cross', lineStyle: { opacity: 0 } },
      crossStyle: { color: '#000' },
    },
    series: [
      {
        data: [
          20000, 60000, 100000, 37000, 90000, 70000, 50000, 100000, 22000,
          87000, 59000, 135000,
        ],
        type: 'line',
        smooth: true,
        areaStyle: {},
        lineStyle: { width: 3, color: theme.palette.primary.main },
      },
    ],
    xAxis: {
      show: true,
      type: 'category',
      showGrid: false,
      boundaryGap: false,
      axisLabel: { color: '#6D7D93', margin: 20 },
      axisLine: { show: false },
      axisTick: { show: false },
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 140000,
      axisLabel: {
        color: '#6D7D93',
        margin: 20,
        fontSize: 13,
        formatter: (value: number) => `${formatNumber(value)}`,
      },
      splitLine: {
        show: true,
        lineStyle: { color: 'rgba(255, 255, 255, .1)' },
      },

      axisLine: { show: false },
      axisTick: { show: false },
    },
    color: [
      {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: theme.palette.primary.light,
          },
          {
            offset: 1,
            color: 'rgba(255,255,255,0)',
          },
        ],
        global: false,
      },
    ],
  };
  return (
    <ReactEcharts
      style={{ height: height }}
      option={merge({}, defaultOption, option)}
    />
  );
};

export default AnalyticsAreaChart;
