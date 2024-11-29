import { Box, styled } from '@mui/material';

const Flex = styled(Box)({ display: 'flex' });

const FlexBetween = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const FlexAlignCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FlexJustifyCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const FlexJustifyEnd = styled(Box)({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
});

const FlexJustifyStart = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export {
  Flex,
  FlexAlignCenter,
  FlexBetween,
  FlexJustifyCenter,
  FlexJustifyEnd,
  FlexJustifyStart,
};
