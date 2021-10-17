import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: getIcon("carbon:dashboard-reference")
  },
  {
    title: 'advisors',
    path: '/advisors',
    icon: getIcon("carbon:user-activity")
  },
  {
    title: 'my Documents',
    path: '/document',
    icon: getIcon("carbon:document")
  },
  {
    title: 'news feed',
    path: '/news',
    icon: getIcon("bi:broadcast-pin")
  },
  {
    title: 'support',
    path: '/support',
    icon: getIcon("akar-icons:phone")
  },
];

export default sidebarConfig;
