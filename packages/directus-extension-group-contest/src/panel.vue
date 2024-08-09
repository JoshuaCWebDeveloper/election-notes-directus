<template>
    <div class="text" :class="{ 'has-header': showHeader }">
        {{ text }}

        <div v-if="loading">Loading...</div>

        <div v-else-if="error">Error: {{ error }}</div>

        <div v-else>
            <ul>
                <li v-for="item in items" :key="item.id">
                    {{ item.id }}: {{ JSON.stringify(item) }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useApi, useItems } from '@directus/extensions-sdk';
import { Collection } from '@directus/types';
import { ref } from 'vue';

const props = defineProps({
    showHeader: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: '',
    },
    collection: {
        type: String,
        default: '',
    },
    groupBy: {
        type: String,
        default: 'field',
    },
    groupByField: {
        type: String,
        default: '',
    },
});

const collection = ref(props.collection);

const api = useApi();

const schema = ref<
    | (Collection & {
          fields: {
              field: string;
              type: string;
              meta: {
                  icon?: string;
              };
              schema: {
                  is_primary_key: boolean;
                  is_nullable: boolean;
              };
          }[];
      })
    | null
>(null);
const schemaLoading = ref(true);
const schemaError = ref<string | null>(null);

const fetchSchema = async () => {
    try {
        schemaLoading.value = true;
        const response = await api.get(`/collections/${props.collection}`);
        schema.value = response.data.data;
    } catch (err) {
        schemaError.value = err as string;
    } finally {
        schemaLoading.value = false;
    }
};

fetchSchema();

// const fields = computed(() => {
//     if (!schema.value) return [];
//     return Object.keys(schema.value.fields);
// });

const { items, loading, error } = useItems(collection, {
    fields: ref(['*']),
    filter: ref(null),
    page: ref(null),
    search: ref(null),
    sort: ref(null),
    limit: ref(null), // Fetch all items
});
</script>

<style scoped>
.text {
    padding: 12px;
}

.text.has-header {
    padding: 0 12px;
}
</style>
