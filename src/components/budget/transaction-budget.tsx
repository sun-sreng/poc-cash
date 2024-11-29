import { Button, Card, CardContent } from '@mui/material';
import { useNavigate } from '@tanstack/react-router';
import { FC } from 'react';
import { Flex, FlexJustifyEnd } from '../widgets/flex';
import { H3 } from '../widgets/typography';

export const TransactionBudget: FC = () => {
  const navigate = useNavigate({ from: '/budget' });

  return (
    <Card sx={{ px: 2, py: 1 }}>
      <CardContent
        sx={{ display: 'flex', flexDirection: 'column', height: '150px' }}
      >
        <Flex sx={{ flexGrow: 1 }}>
          <H3>Transaction Budget</H3>
        </Flex>
        <FlexJustifyEnd>
          <Button
            variant="contained"
            onClick={() =>
              navigate({ to: '/budget/$id', params: { id: 'new' } })
            }
          >
            Create Budget
          </Button>
        </FlexJustifyEnd>
      </CardContent>
    </Card>
  );
};

export default TransactionBudget;
