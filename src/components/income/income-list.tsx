import SearchField from '@/components/home/search-field';
import { FlexJustifyEnd } from '@/components/widgets/flex';
import { H4 } from '@/components/widgets/typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import TuneIcon from '@mui/icons-material/Tune';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  MenuItem,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';

interface IncomeData {
  category: string;
  icon: React.ReactNode;
  date: string;
  note: string;
  amount: string;
}

const rows: IncomeData[] = [
  {
    category: 'Salary',
    icon: <AttachMoneyIcon color="success" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Business',
    icon: <BusinessCenterIcon color="primary" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Gifts',
    icon: <CardGiftcardIcon color="secondary" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Extra Income',
    icon: <AddCircleOutlineIcon color="success" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Loan',
    icon: <AccountBalanceIcon color="error" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Parental Leave',
    icon: <FamilyRestroomIcon color="warning" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Insurance Payout',
    icon: <VerifiedIcon color="info" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
  {
    category: 'Adjustment',
    icon: <TuneIcon color="disabled" />,
    date: '03 June 2022',
    note: 'Here is my income',
    amount: '$5,000,000,000.00',
  },
];

const categories = [
  'Food',
  'Transport',
  'Entertainment',
  'Clothing',
  'Health',
  'Travel',
  'Other',
];

const IncomeList = () => {
  const [search, setSearch] = useState('');

  return (
    <Box>
      <H4 sx={{ mb: 1 }}>Filter Income</H4>
      <Card>
        <CardContent>
          <Grid container sx={{ px: 2, pt: 2 }} spacing={1}>
            <Grid size={{ xs: 12, md: 7 }}>
              <TextField
                select
                size="small"
                variant="outlined"
                defaultValue=""
                label="Category"
                placeholder="Category"
                margin="none"
                sx={{
                  width: { xs: '100%', md: '320px' },
                }}
              >
                {categories.map((item) => (
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
          <Paper sx={{ mt: 2, mx: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Note</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {row.icon}
                          <span style={{ marginLeft: '8px' }}>
                            {row.category}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.note}</TableCell>
                      <TableCell style={{ color: 'green' }}>
                        {row.amount}
                      </TableCell>
                      <TableCell>
                        <IconButton color="primary" aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <FlexJustifyEnd sx={{ p: 2 }}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </FlexJustifyEnd>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IncomeList;
