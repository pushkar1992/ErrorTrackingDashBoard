import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  expectedRole?: Array<string>;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  expectedRole?: Array<string>;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: '',
    main: [
      {
        state: 'dashboard',
        short_label: 'Dash',
        name: 'DashBoard',
        type: 'link',
        icon: 'ti-home',
        expectedRole: ['']
      },
    ],
  },
  {
    label: '',
    main: [
      {
        state: 'rulemanagement',
        short_label: 'RM',
        name: 'Rule Management',
        tooltip: 'Manage the fraud rules and work queue rules based on your fraud strategy.',
        type: 'sub',
        icon: 'fa fa-graduation-cap',
        expectedRole: ['SCRN15', 'SCRN41', 'SCRN42', 'SCRN43', 'SCRN44'],
        children: [
          {
            state: 'fridai-rule',
            name: 'FRiDAI',
            tooltip: 'Customize fraud identifications rules for your institution.',
            expectedRole: ['SCRN41', 'SCRN42']

          },
          {
            state: 'fullbase',
            name: 'Full Base Rule',
            tooltip: 'Predefined set of fraud identifications rules. Can be disabled if not  relevant for your institution.',
            expectedRole: ['SCRN15']
          },
          {
            state: 'workqueue-rule',
            name: 'Work Queue Rule',
            tooltip: 'Customize work queue rules for efficient case assignments.',
            expectedRole: ['SCRN43', 'SCRN44']
          }
        ]
      },
    ],
  },
  {
    label: '',
    main: [
      {
        state: 'usermanagement',
        short_label: 'UM',
        name: 'User Management',
        type: 'sub',
        icon: 'fa fa-paw',
        tooltip: 'Manage your users and control accessibility using roles and permissions.',
        expectedRole: ['SCRN4', 'SCRN5', 'SCRN19'],
        children: [
          {
            state: 'UserCreation',
            name: 'User',
            tooltip: 'create and manage users and their roles, add users to work queue. ',
            expectedRole: ['SCRN4']
          },
          {
            state: 'authorisation',
            name: 'Authorization',
            tooltip: 'create and manage roles based on organisation structure.',
            expectedRole: ['SCRN19']
          },
          {
            state: 'WorkQueueCreation',
            name: 'Work Queue',
            tooltip: 'Create and manage work queues.',
            expectedRole: ['SCRN5']
          },

        ]
      },

    ],
  },
  {
    label: '',
    main: [
      {
        state: 'mis',
        short_label: 'MIS',
        name: 'MIS',
        type: 'sub',
        icon: 'fa fa-industry',
        tooltip: 'Management Information System Report',
        expectedRole: ['SCRN6', 'SCRN7'],
        children: [
          {
            state: 'ruleeffectiveness',
            name: 'Rule Effectiveness',
            tooltip: 'Statistics on how the configured rules performed for your organisation.',
            expectedRole: ['SCRN6']
          },
          {
            state: 'userreports',
            name: 'User Reports',
            tooltip: 'Statistics on how the users performed.',
            expectedRole: ['SCRN7']
          },
        ]
      },

    ],
  },

  {
    label: '',
    main: [
      {
        state: 'single-inquiry',
        short_label: 's',
        name: 'Single Inquiry',
        type: 'sub',
        icon: 'fa fa-cube',
        tooltip: 'Manual inquiry',
        expectedRole: ['SCRN8', 'SCRN29'],
        children: [

          {
            state: 'online-application',
            tooltip: 'Fill up the application to be checked for fraud',
            name: 'Online Application',
            expectedRole: ['SCRN29']

          },
          {
            state: 'single-tracking',
            name: 'Single Request Tracking',
            tooltip: 'Track the manual enquiries by search criteria',
            expectedRole: ['SCRN8']

          },

        ]
      },

    ],
  },
  {
    label: '',
    main: [
      {
        state: 'bulkinquiry',
        short_label: 'B',
        name: 'Bulk Inquiry',
        type: 'sub',
        icon: 'fa fa-cubes',
        tooltip: 'Bulk Inquiry',
        expectedRole: ['SCRN30', 'SCRN31'],
        children: [
          {
            state: 'bulkupload',
            name: 'Bulk Upload',
            tooltip: 'Upload an excel sheet having many applications which are to be checked for fraud',
            expectedRole: ['SCRN30']

          },
          {
            state: 'bulk-tracking',
            name: 'Bulk Request Tracking',
            tooltip: 'Track the enquiries uploaded in bulk by search criteria',
            expectedRole: ['SCRN31']

          },

        ]
      },

    ],
  },
  {
    label: '',
    main: [
      {
        state: 'case-management',
        short_label: 's',
        name: 'Case Management',
        type: 'sub',
        icon: 'fa fa-graduation-cap',
        tooltip: 'MIS for the case status and bulk assignment of the cases',
        expectedRole: ['SCRN46', 'SCRN45'],
        children: [
          {
            state: 'user-summary',
            name: 'User Summary',
            tooltip: 'MIS for the cases assigned to the users',
            expectedRole: ['SCRN46']

          },
          {
            state: 'bulk-case-assignment',
            tooltip: 'Assign/re-assign cases to users',
            name: 'Bulk Case Assignment',
            expectedRole: ['SCRN45']

          },

        ]
      },


    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
