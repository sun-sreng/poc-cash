import { MoreVert, Watch } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  LinearProgress,
  Paper,
  Typography,
} from '@mui/material';
import { Link } from '@tanstack/react-router';
import React from 'react';
import { Flex } from '../widgets/flex';
import { H4, TextMuted } from '../widgets/typography';

export interface BudgetCardProps {
  id: string;
  title: string;
  amount: number;
  progress: number;
  remaining: number;
  completed?: boolean;
  status: 'active' | 'achieved';
}

const BudgetCard: React.FC<BudgetCardProps> = ({
  id,
  title,
  amount,
  progress,
  remaining,
  completed,
  status = 'active',
}) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 2, height: '100%' }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <Link to="/budget/item/$id" params={{ id }} className="link">
            <H4>{title}</H4>
          </Link>
          <Box>
            {status === 'active' && (
              <IconButton>
                <EditIcon fontSize="small" />
              </IconButton>
            )}
            {status === 'active' && (
              <IconButton>
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
            <IconButton>
              <MoreVert fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Paper
            color="inherit"
            sx={{
              minWidth: '32px',
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'primary.main',
            }}
          >
            <Watch fontSize="large" sx={{ color: 'white' }} />
          </Paper>
          <Box>
            <TextMuted sx={{ fontSize: '14px' }}>BUDGET GOAL</TextMuted>
            <Flex alignItems="center" gap={1} sx={{ mt: '-4px' }}>
              <TextMuted sx={{ fontSize: '14px' }}>Amount:</TextMuted>
              <Typography variant="h6" color="primary">
                ${amount.toFixed(2)}
              </Typography>
            </Flex>
          </Box>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: '#e0e0e0',
          }}
        />
        <Typography
          variant="body2"
          color={completed ? 'green' : 'text.secondary'}
        >
          {completed
            ? 'Congrats, Goal completed'
            : `$${remaining.toFixed(2)} remaining to complete goal`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BudgetCard;
