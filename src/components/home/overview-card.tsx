import { FlexJustifyStart } from '@/components/widgets/flex';
import { H1, H4, Small } from '@/components/widgets/typography';
import { MoreVert, Straight } from '@mui/icons-material';
import {
  Chip,
  IconButton,
  Paper,
  PaperProps,
  SxProps,
  Theme,
} from '@mui/material';
import React from 'react';

export interface OverviewCardProps extends Omit<PaperProps, 'title'> {
  title: string;
  value: string;
  color?: 'primary' | 'white';
  metadata?: {
    percentage: number;
    label?: string;
    trend?: 'positive' | 'negative' | 'neutral';
  };
  type?: 'default' | 'compact';
  actionIcon?: React.ReactNode; // Allow custom icons
}

const COLORS = {
  positive: '#6DB33F',
  neutral: '#94a3b8',
  negative: '#FF5252',
  white: '#FFFFFF',
  compactFontSize: '24px',
  defaultFontSize: '32px',
};

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  color = 'white',
  metadata,
  type = 'default',
  actionIcon = <MoreVert fontSize="small" />,
  sx,
  ...paperProps
}) => {
  const defaultSx: SxProps<Theme> = {
    px: 2.5,
    py: 2.5,
    position: 'relative',
    bgcolor: color === 'white' ? 'background.paper' : 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    height: '100%',
    width: '100%',
    ...sx,
  };

  const trendColors = {
    positive: COLORS.positive,
    neutral: COLORS.neutral,
    negative: COLORS.negative,
  };

  const getChipIcon = () => {
    if (!metadata) return undefined;

    const trendColor = trendColors[metadata.trend || 'neutral'];
    const transformStyle =
      metadata.trend === 'negative'
        ? { transform: 'rotate(180deg)' }
        : undefined;

    return (
      <Straight
        fontSize="small"
        sx={{ color: trendColor, ...transformStyle }}
      />
    );
  };

  return (
    <Paper sx={defaultSx} {...paperProps}>
      <FlexJustifyStart sx={{ width: '100%', alignItems: 'center', mb: 1 }}>
        <H4
          color={color === 'white' ? 'text.primary' : COLORS.white}
          sx={{ flexGrow: 1 }}
        >
          {title}
        </H4>

        <IconButton
          size="small"
          sx={{ color: color === 'white' ? 'primary' : COLORS.white }}
        >
          {actionIcon}
        </IconButton>
      </FlexJustifyStart>

      <H1
        color={color === 'white' ? 'text.primary' : COLORS.white}
        sx={{
          fontWeight: 'bold',
          fontSize:
            type === 'compact'
              ? COLORS.compactFontSize
              : COLORS.defaultFontSize,
        }}
      >
        {value}
        <span style={{ color: color === 'white' ? COLORS.neutral : '#e2e8f0' }}>
          .00
        </span>
      </H1>

      {metadata && (
        <FlexJustifyStart gap={1} sx={{ mt: 1 }}>
          <Chip
            icon={getChipIcon()}
            color="default"
            label={`${metadata.percentage}%`}
            size="small"
            sx={{
              bgcolor: color === 'white' ? `${COLORS.positive}1A` : '#F8F8F8',
              color: COLORS.positive,
            }}
          />
          <Small
            color={color === 'white' ? 'text.primary' : COLORS.white}
            sx={{ m: 0 }}
          >
            {metadata.label || 'vs last month'}
          </Small>
        </FlexJustifyStart>
      )}
    </Paper>
  );
};

export default OverviewCard;
