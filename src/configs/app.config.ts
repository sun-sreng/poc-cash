import { IAppConfig } from '@/types/app.confit.type';

export const AppConfig: IAppConfig = {
  siteNav: [
    {
      title: 'Home',
      url: '/',
      icon: 'home',
    },
    {
      title: 'Income',
      url: '/income',
      icon: 'income',
    },
    {
      title: 'Expense',
      url: '/expense',
      icon: 'expense',
    },
    {
      title: 'Budget',
      url: '/budget',
      icon: 'budget',
    },
  ],
  settingNav: [
    {
      title: 'Account Setting',
      url: '/profile',
      icon: 'profile',
    },
    {
      title: 'Category',
      url: '/category',
      icon: 'category',
    },
  ],
};
