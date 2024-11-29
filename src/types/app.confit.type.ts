import { IconType } from '@/utils/icon-mapping';

export type IAppConfig = {
  siteNav: INavItem[];
  settingNav: INavItem[];
};

export type INavItem = {
  title: string;
  url: string;
  icon: IconType;
};
