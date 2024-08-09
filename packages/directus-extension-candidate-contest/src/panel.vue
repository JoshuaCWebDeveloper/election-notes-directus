<template>
    <div v-if="candidatesLoading || stancesLoading">Loading...</div>

    <div v-else-if="candidatesError">Error: {{ candidatesError }}</div>

    <div v-else-if="stancesError">Error: {{ stancesError }}</div>

    <div v-else class="candidates">
        <CandidateColumn
            v-for="candidate in candidates"
            :key="candidate.id"
            :candidate="candidate"
            :stances="getCandidateStances(candidate.id)"
        />
    </div>
</template>

<script setup lang="ts">
import { useItems } from '@directus/extensions-sdk';
import { ref, computed } from 'vue';

import CandidateColumn from './candidate-column.vue';

const CANDIDATE_COLLECTION = ref('candidate');
const ISSUE_COLLECTION = ref('issue');
const STANCE_COLLECTION = ref('stance');

const props = defineProps({
    showHeader: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: '',
    },
});

const {
    items: candidates,
    loading: candidatesLoading,
    error: candidatesError,
} = useItems(CANDIDATE_COLLECTION, {
    fields: ref(['*']),
    filter: ref(null),
    page: ref(null),
    search: ref(null),
    sort: ref(null),
    limit: ref(null), // Fetch all items
});

// get issues
const {
    items: issues,
    loading: issuesLoading,
    error: issuesError,
} = useItems(ISSUE_COLLECTION, {
    fields: ref(['*']),
    filter: ref(null),
    page: ref(null),
    search: ref(null),
    sort: ref(null),
    limit: ref(null), // Fetch all items
});

const {
    items: stances,
    loading: stancesLoading,
    error: stancesError,
} = useItems(STANCE_COLLECTION, {
    fields: ref(['*']),
    filter: ref(null),
    page: ref(null),
    search: ref(null),
    sort: ref(null),
    limit: ref(null), // Fetch all items
});

const getCandidateStances = computed(() => (candidateId: string) => {
    return (
        stances.value
            ?.filter(stance => stance.candidate === candidateId)
            .map(stance => {
                const issue = issues.value?.find(
                    issue => issue.id === stance.issue
                );
                return {
                    ...stance,
                    issue,
                };
            }) || []
    );
});
</script>

<style scoped>
.candidates {
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    flex-direction: row;

    background-color: #f1f1f1;
    margin: 0;
    padding: 5px;
    width: 100%;
    height: 100%;

    .candidate {
        flex: 1;
        min-width: 0;
        height: 100%;
    }
}
</style>
