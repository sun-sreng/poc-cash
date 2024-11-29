import { signOut } from '@/utils/auth';
import { iconMapping } from '@/utils/icon-mapping';
import { Divider, MenuList, Paper } from '@mui/material';
import { useRouter } from '@tanstack/react-router';
import { FC, useState } from 'react';
import { AppConfig } from '../../configs/app.config';
import { ConfirmationDialog } from '../widgets/confirmation-dialog';
import { Flex } from '../widgets/flex';
import { MenuLinkItem } from '../widgets/menu-link-item';

export const SettingNav: FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    signOut();
    router.invalidate();
  };

  return (
    <Paper sx={{ width: '100%', height: '70vh' }}>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <MenuList>
          {AppConfig.settingNav.map((item) => (
            <MenuLinkItem
              key={item.url}
              to={item.url}
              text={item.title}
              icon={iconMapping[item.icon]}
              activeProps={{ className: 'active' }}
            />
          ))}
          <Divider />
          <MenuLinkItem
            text="Logout"
            icon={iconMapping['logout']}
            onClick={handleClickOpen}
          />
        </MenuList>
        <MenuList>
          <MenuLinkItem
            text="Delete Account"
            icon={iconMapping['delete_account']}
            style={{ color: 'red' }}
          />
        </MenuList>
      </Flex>
      <ConfirmationDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleLogout}
        title="Are you sure you want to Logout?"
        description="This action will log you out of your account."
      />
    </Paper>
  );
};

export default SettingNav;
