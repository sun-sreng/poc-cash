import { signOut } from '@/utils/auth';
import { iconMapping } from '@/utils/icon-mapping';
import { Menu as MenuIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useRouter } from '@tanstack/react-router';
import * as React from 'react';
import { AppConfig } from '../../configs/app.config';
import { MenuLinkItem } from '../widgets/menu-link-item';

export default function SettingNavMobile() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    signOut();
    router.invalidate();
  };

  return (
    <div>
      <IconButton
        sx={{ display: { xs: 'flex', md: 'none' } }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {AppConfig.settingNav.map((item) => (
          <MenuLinkItem
            key={item.url}
            to={item.url}
            text={item.title}
            icon={iconMapping[item.icon]}
            activeProps={{ className: 'active' }}
            onClick={handleClose}
          />
        ))}
        <MenuLinkItem
          text="Logout"
          icon={iconMapping['logout']}
          onClick={handleLogout}
        />
        <MenuLinkItem
          text="Delete Account"
          icon={iconMapping['delete_account']}
        />
      </Menu>
    </div>
  );
}
