import { definePanel } from '@directus/extensions-sdk';

import PanelComponent from './panel.vue';

export default definePanel({
    id: 'group-contest',
    name: 'Group Contest',
    icon: 'groups',
    description: 'Display a collection as a contest between subgroups.',
    component: PanelComponent,
    options: ({ options = {} }) => {
        return [
            {
                field: 'text',
                name: 'Text',
                type: 'string',
                meta: {
                    interface: 'input',
                    width: 'full',
                },
            },
            {
                field: 'collection',
                name: 'Collection',
                type: 'string',
                meta: {
                    interface: 'system-collection',
                    options: {
                        includeSystem: false,
                        includeSingleton: false,
                    },
                    width: 'full',
                },
            },
            {
                field: 'groupBy',
                name: 'Group By',
                type: 'string',
                default: 'field',
                meta: {
                    interface: 'select-radio',
                    options: {
                        choices: [
                            { text: 'Field Value', value: 'field' },
                            { text: 'Computed Value', value: 'computed' },
                        ],
                    },
                    width: 'half',
                },
            },
            {
                field: 'groupByField',
                name: 'Group By Field',
                type: 'string',
                meta: {
                    interface: 'system-field',
                    width: 'half',
                    options: {
                        collectionField: 'collection',
                        allowPrimaryKey: true,
                        placeholder: 'Primary Key',
                    },
                    hidden: options.groupBy !== 'field',
                },
            },
        ];
    },
    minWidth: 12,
    minHeight: 8,
});
