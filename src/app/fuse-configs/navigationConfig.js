import {MaterialUIComponentsNavigation} from 'app/main/documentation/material-ui-components/MaterialUIComponentsNavigation';
import {authRoles} from 'app/auth';


const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Secciones',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'notes',
                'title': 'Notes',
                'type' : 'item',
                'icon' : 'note',
                'url'  : '/apps/notes'
            },
            {
                'id'   : 'calendar',
                'title': 'Calendar',
                'type' : 'item',
                'icon' : 'today',
                'url'  : '/apps/calendar'
            },
            {
                'id'   : 'academy',
                'title': 'Academy',
                'type' : 'item',
                'icon' : 'school',
                'url'  : '/apps/academy'
            },
            {
                'id'   : 'mail',
                'title': 'Mail',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/apps/mail',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'todo',
                'title': 'To-Do',
                'type' : 'item',
                'icon' : 'check_box',
                'url'  : '/apps/todo',
                'badge': {
                    'title': 3,
                    'bg'   : 'rgb(255, 111, 0)',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'file-manager',
                'title': 'File Manager',
                'type' : 'item',
                'icon' : 'folder',
                'url'  : '/apps/file-manager'
            },
            {
                'id'   : 'contacts',
                'title': 'Contacts',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/apps/contacts/all'
            }
        ]
    },
             
];

export default navigationConfig;
