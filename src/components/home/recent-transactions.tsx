import { FlexBetween, FlexJustifyEnd } from '@/components/widgets/flex';
import { H3, Paragraph, Small } from '@/components/widgets/typography';
import { Schedule } from '@mui/icons-material';
import {
  Card,
  CardContent,
  InputAdornment,
  MenuItem,
  Pagination,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import SearchField from './search-field';

const transactions = [
  {
    id: 1,
    transaction: 'Payment from Bonnie Green',
    date: 'Apr 23, 2021',
    amount: '$2300',
    status: 'Completed',
  },
  {
    id: 2,
    transaction: 'Payment refund to #00910',
    date: 'Apr 20, 2021',
    amount: '-$670',
    status: 'Completed',
  },
  {
    id: 3,
    transaction: 'Payment refund to #00910',
    date: 'Apr 20, 2021',
    amount: '-$670',
    status: 'In Progress',
  },
  {
    id: 4,
    transaction: 'Payment refund to #00910',
    date: 'Apr 20, 2021',
    amount: '-$670',
    status: 'Cancelled',
  },
  {
    id: 5,
    transaction: 'Payment refund to #00910',
    date: 'Apr 20, 2021',
    amount: '-$670',
    status: 'In Progress',
  },
  {
    id: 6,
    transaction: 'Payment refund to #00910',
    date: 'Apr 20, 2021',
    amount: '-$670',
    status: 'Completed',
  },
];

const previousDate = [
  'Last 7 days',
  'Last 30 days',
  'Last 6 months',
  'Last 12 months',
];

const RecentTransactions = () => {
  const [search, setSearch] = useState('');

  const colorStatus = {
    Completed: { text: green[900], bg: green[100] },
    Cancelled: { text: red[900], bg: red[100] },
    'In Progress': { text: blue[900], bg: blue[100] },
  };

  type Status = 'Completed' | 'In Progress' | 'Cancelled';
  const StyledSmall = styled(Small)<{
    status: Status;
  }>(({ status }) => ({
    color: colorStatus[status].text,
    padding: '2px 8px',
    borderRadius: '4px',
    background: colorStatus[status].bg,
  }));

  return (
    <Card>
      <CardContent>
        <H3 sx={{ fontWeight: 'bold', p: 2 }}>Your Expending Summary</H3>

        <Grid container sx={{ px: 2 }} spacing={1}>
          <Grid size={{ xs: 12, md: 7 }}>
            <TextField
              select
              size="small"
              variant="outlined"
              defaultValue="Last 7 days"
              margin="none"
              sx={{
                width: { xs: '100%', md: '320px' },
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Schedule />
                    </InputAdornment>
                  ),
                },
              }}
            >
              {previousDate.map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <FlexJustifyEnd>
              <SearchField
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </FlexJustifyEnd>
          </Grid>
        </Grid>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Transaction</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell>{txn.transaction}</TableCell>
                <TableCell>{txn.date}</TableCell>
                <TableCell>{txn.amount}</TableCell>
                <TableCell>
                  <StyledSmall status={txn.status as Status}>
                    {txn.status}
                  </StyledSmall>
                  {/* <Chip color={txn.status === "Completed" ? "success" : "info"} label={txn.status} size="small" variant="outlined" /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <FlexBetween sx={{ p: 2 }}>
          <Paragraph>Showing 1 to 10 of 50 entries</Paragraph>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </FlexBetween>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
