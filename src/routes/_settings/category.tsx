import CategoryForm from '@/components/settings/category-form';
import CategoryList from '@/components/settings/category-list';
import { Card, CardContent } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_settings/category')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card sx={{ p: 3 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <CategoryForm />
        <CategoryList />
      </CardContent>
    </Card>
  );
}
