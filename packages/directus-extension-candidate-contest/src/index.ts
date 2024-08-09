import { definePanel } from '@directus/extensions-sdk';

import PanelComponent from './panel.vue';

export default definePanel({
    id: 'candidate-contest',
    name: 'Candidate Contest',
    icon: 'groups',
    description: 'Display candidates and stances as a contest.',
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
        ];
    },
    minWidth: 12,
    minHeight: 8,
});
