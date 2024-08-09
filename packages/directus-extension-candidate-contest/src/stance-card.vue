<template>
    <div class="stance-card" :class="'rating-' + rating">
        <p>
            <strong>{{ stance.issue.name }}: </strong>
            {{ stance.issue.description }}
        </p>

        <p>
            <strong>{{ stance.title }}</strong>
        </p>

        <div class="badges">
            <span class="badge points">{{ stance.points }}</span>
            <span class="badge confidence">{{ stance.confidence }}%</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

export type Issue = {
    id: number;
    name: string;
    description: string;
};

export type Stance = {
    id: number;
    candidate: number;
    issue: Issue;
    title: string;
    rating: number;
    points: number;
    confidence: number;
};

const props = defineProps<{
    stance: Stance;
}>();

const rating = computed(() => {
    const value = props.stance.rating;
    if (typeof value !== 'number' || isNaN(value) || value < 0 || value > 100) {
        return 'none';
    }

    if (value >= 0 && value < 33) {
        return 'low';
    } else if (value >= 33 && value < 66) {
        return 'medium';
    } else if (value >= 66 && value <= 100) {
        return 'high';
    }

    throw new Error('Invalid rating: ' + value);
});
</script>

<style scoped>
.stance-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
    word-break: break-word;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-right: 5px;

    &:last-child {
        margin-bottom: 0;
    }

    &.rating-none {
        background: linear-gradient(to bottom, #f0f0f0, #e6e6e6);
    }

    &.rating-low {
        background: linear-gradient(to bottom, #ffebee, #ffcdd2);
    }

    &.rating-medium {
        background: linear-gradient(to bottom, #ffeec4, #ffdf9d);
    }

    &.rating-high {
        background: linear-gradient(to bottom, #e8f5e9, #c8e6c9);
    }

    strong {
        display: block;
        margin-bottom: 8px;
        color: #333;
    }

    .badges {
        display: flex;
        justify-content: flex-end;
        gap: 8px;

        margin-top: 12px;
        container: badges / inline-size;
    }

    .badge {
        font-size: 11cqw;
        padding: 0px 8px;
        border-radius: 16px;
        font-weight: 500;

        &.points {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
        }

        &.confidence {
            background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
            color: #333;
        }
    }
}
</style>
