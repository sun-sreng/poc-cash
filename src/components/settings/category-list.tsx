import { Delete, DirectionsRailway, Edit } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FC } from 'react';
import { H2 } from '../widgets/typography';

const data = [
  {
    id: 'C001',
    icon: <DirectionsRailway color="primary" />,
    name: 'Transport',
    note: 'Here is my note',
  },
];

export const CategoryList: FC = () => {
  return (
    <Box>
      <H2 sx={{ color: '#324C5B' }}>Manage Category</H2>
      <Paper sx={{ mt: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Note</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {row.icon}
                    </div>
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell>
                    <IconButton color="primary" aria-label="edit">
                      <Edit />
                    </IconButton>
                    <IconButton color="secondary" aria-label="delete">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default CategoryList;
