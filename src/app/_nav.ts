import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
 
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Agents',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'RegstrationForm',
        url: '/base/tooltips',
        icon: 'icon-user'
      },
      {
        name: 'View',
        url: '/base/tooltips',
        icon: 'fa fa-list'
      }
    ]
  },

  {
    name: 'Categories',
    url: '/base',
    icon: 'fa fa-align-left',
    children: [
      {
        name: 'RegstrationForm',
        url: '/base/tooltips',
        icon: 'fa fa-book'
      },
      {
        name: 'View',
        url: '/base/tooltips',
        icon: 'fa fa-list'
      }
    ]
  },

  {
    name: 'Commission',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'RegstrationForm',
        url: '/base/tooltips',
        icon: 'fa fa-book'
      },
      {
        name: 'View',
        url: '/base/tooltips',
        icon: 'fa fa-list'
      }
    ]
  },

  {
    name: 'Reports',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Agents',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      },
      {
        name: 'Categories',
        url: '/base/tooltips',
        icon: 'fa-list-alt'
      },
      {
        name: 'Commission',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },

  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },

];
