import { Flex, FlexBetween } from '@/components/widgets/flex';
import { H1 } from '@/components/widgets/typography';
import { Edit } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_settings/profile')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
      }}
    >
      <H1 color="#324C5B" sx={{ flexGrow: 1 }}>
        Edit Profile
      </H1>
      <Card sx={{ px: 3 }}>
        <CardContent>
          <FlexBetween>
            <Flex sx={{}}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/profiles/male.png"
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'start',
                }}
              >
                <Typography
                  component="h1"
                  variant="h1"
                  sx={{ fontSize: '24px', fontWeight: 600, color: '#324C5B' }}
                >
                  John Doe
                </Typography>
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ fontSize: '16px', fontWeight: 400, color: '#93A1AA' }}
                >
                  Phnom Penh
                </Typography>
              </Box>
            </Flex>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<Edit />}
              sx={{
                height: '32px',
                width: '72px',
              }}
            >
              Edit
            </Button>
          </FlexBetween>
        </CardContent>
      </Card>

      <Card sx={{ px: 3, mt: 2 }}>
        <CardContent>
          <FlexBetween>
            <Flex>
              <Typography
                component="h1"
                variant="h1"
                sx={{ fontSize: '16px', fontWeight: 600, color: '#324C5B' }}
              >
                Personal Information
              </Typography>
            </Flex>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<Edit />}
              sx={{
                height: '32px',
                width: '72px',
              }}
            >
              Edit
            </Button>
          </FlexBetween>
          <Grid container sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProfileItem title="Email" value="name@gmail.com" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ProfileItem title="Phone Number" value="+855 12 345 567" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ px: 3, mt: 2 }}>
        <CardContent>
          <FlexBetween>
            <Flex>
              <Typography
                component="h1"
                variant="h1"
                sx={{ fontSize: '16px', fontWeight: 600, color: '#324C5B' }}
              >
                Privacy
              </Typography>
            </Flex>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<Edit />}
              sx={{
                height: '32px',
                width: '72px',
              }}
            >
              Edit
            </Button>
          </FlexBetween>
          <Grid container sx={{ mt: 2 }} spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProfileItem title="Gender" value="Female" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProfileItem title="Date of birth" value="00/00/0000" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProfileItem title="Sex" value="Female" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProfileItem title="Gender" value="Female" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProfileItem title="Date of birth" value="00/00/0000" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <ProfileItem title="Sex" value="Female" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button variant="contained" sx={{ mt: 2 }}>
        Save Change
      </Button>
    </Box>
  );
}

const ProfileItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        component="span"
        variant="body1"
        sx={{ fontSize: '14px', fontWeight: 500, color: '#93A1AA' }}
      >
        {title}
      </Typography>
      <Typography
        component="span"
        variant="body1"
        sx={{ fontSize: '14px', fontWeight: 500, color: '#93A1AA' }}
      >
        {value}
      </Typography>
    </Box>
  );
};
