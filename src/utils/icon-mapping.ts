import {
  GridView,
  Home,
  Logout,
  MonetizationOn,
  PersonRemove,
  Receipt,
  Savings,
  Settings,
} from '@mui/icons-material';

export const iconMapping = {
  home: Home,
  income: MonetizationOn,
  expense: Receipt,
  account_setting: Settings,
  category: GridView,
  budget: Savings,
  profile: Settings,
  logout: Logout,
  delete_account: PersonRemove,
};

export type IconType = keyof typeof iconMapping;
