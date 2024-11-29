import { IBudgetCard } from '@/types/budget-card';
import { ArrowBackIosNew, Home, SavingsOutlined } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Grid2 as Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import ReactECharts from 'echarts-for-react';
import React from 'react';
import { Flex, FlexAlignCenter } from '../widgets/flex';
import { H1, H4, Paragraph } from '../widgets/typography';

const BudgetViewer: React.FC<Partial<IBudgetCard>> = ({
  title,
  amount = 0,
  remaining = 0,
  progress = 0,
  completed = false,
}) => {
  const navigate = useNavigate({ from: '/budget/item/$id' });

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
          borderWidth: completed ? 0 : 2,
        },
        data: [
          {
            value: progress,
            name: 'Progress',
            itemStyle: { color: '#6DB33F' },
            selected: true,
          },
          {
            value: 100 - progress,
            name: 'Remaining',
            itemStyle: { color: '#A7D18C' },
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
          text: `${progress}%`,
          fontSize: 32,
          fontWeight: 'bold',
          align: 'center',
          verticalAlign: 'middle',
        },
      },
    ],
  };

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <IconButton size="large" onClick={() => navigate({ to: '/budget' })}>
          <ArrowBackIosNew fontSize="medium" />
        </IconButton>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: 2 }}
            >
              <FlexAlignCenter
                sx={{
                  bgcolor: '#24A19C',
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                }}
              >
                <Home fontSize="medium" sx={{ color: 'white' }} />
              </FlexAlignCenter>
              <H1 sx={{ color: '#24A19C', fontWeight: 'bold' }}>{title}</H1>
            </Box>
            {completed && (
              <Flex
                sx={{
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  mt: 3,
                }}
              >
                <Typography
                  component="span"
                  sx={{ color: '#F8B400B8', fontSize: '40px', fontWeight: 600 }}
                >
                  Congrats,
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: '#F8B400B8',
                    fontSize: '40px',
                    fontWeight: 600,
                    lineHeight: '26px',
                  }}
                >
                  Goal completed!
                </Typography>
              </Flex>
            )}
            <Box mt={4}>
              <H4 sx={{ fontSize: '25px', color: '#324C5B', fontWeight: 500 }}>
                Budget Goal
              </H4>
              <Paragraph
                sx={{ fontSize: '56px', fontWeight: 500, color: '#6DB33F' }}
              >
                ${amount} USD
              </Paragraph>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FlexAlignCenter>
              <ReactECharts
                option={chartOptions}
                style={{ width: 240, height: 240 }}
                opts={{ renderer: 'svg' }}
              />
            </FlexAlignCenter>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <H4 sx={{ fontSize: '25px', color: '#324C5B', fontWeight: 500 }}>
              Description
            </H4>
            <Paragraph
              sx={{ color: '#93A1AA', fontSize: '22px', fontWeight: 400 }}
            >
              When you query timestamptz from the database, PostgreSQL converts
              the UTC value back to the time value of the timezone set by the
              database server, the user, or the current database connection.
            </Paragraph>
          </Grid>
          {!completed && (
            <Grid size={{ xs: 12 }}>
              <Flex gap={2}>
                <FlexAlignCenter
                  sx={{
                    bgcolor: '#F5F5F5',
                    width: '240px',
                    height: '78px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <SavingsOutlined sx={{ fontSize: '56px', mr: 1 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#324C5B',
                      }}
                    >
                      Current Money
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#24A19C',
                        lineHeight: 1,
                      }}
                    >
                      {amount - remaining} USD
                    </Typography>
                  </Box>
                </FlexAlignCenter>
                <FlexAlignCenter
                  sx={{
                    bgcolor: '#F5F5F5',
                    width: '240px',
                    height: '78px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <SavingsOutlined sx={{ fontSize: '56px', mr: 1 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '16px',
                        fontWeight: 400,
                        color: '#324C5B',
                      }}
                    >
                      Money Left
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: '24px',
                        fontWeight: 600,
                        color: 'primary.main',
                        lineHeight: 1,
                      }}
                    >
                      {remaining} USD
                    </Typography>
                  </Box>
                </FlexAlignCenter>
              </Flex>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BudgetViewer;
