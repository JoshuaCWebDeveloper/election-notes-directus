<template>
    <div class="candidate">
        <h2 class="candidate-header">
            <span class="name">
                {{ candidate.firstName }} {{ candidate.middleName }}
                {{ candidate.lastName }}
            </span>
        </h2>
        <div class="badge-container">
            <span class="badge score">{{ candidate.score }}</span>
            <span class="badge confidence">{{ candidate.confidence }}%</span>
        </div>
        <div class="stances">
            <StanceCard
                v-for="stance in stances"
                :key="stance.id"
                :stance="stance"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

import StanceCard, { type Stance } from './stance-card.vue';

export type Candidate = {
    id: string;
    name: string;
    description: string;
    confidence: number;
    score: number;
};

const props = defineProps<{
    candidate: Candidate;
    stances: Stance[];
}>();

const stances = computed(() => {
    return props.stances.sort((a, b) => {
        return b.rating - a.rating;
    });
});
</script>

<style scoped>
.candidate {
    display: flex;
    flex-direction: column;

    background: linear-gradient(135deg, #ffffff, #f8f9fa);
    border-radius: 12px;
    padding: 10px;
}

.candidate-header {
    margin-top: 0;
    color: #2c3e50;
    font-weight: 700;
    font-size: 1.4em;
    flex: 0 0 95px;
    padding: 10px 20px 10px;
}

.badge-container {
    display: flex;
    gap: 5px;

    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 16px;
    flex: 0;
}

.badge {
    font-size: 0.9em;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: 500;

    &.score {
        background: linear-gradient(135deg, #007bff, #0056b3);
        color: white;
    }

    &.confidence {
        background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
        color: #333;
    }
}

.stances {
    flex: 1;
    overflow: auto;
    scrollbar-width: thin;
    margin-right: -5px;
}
</style>
