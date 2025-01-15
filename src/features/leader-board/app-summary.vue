<script setup lang="ts">
import type {AppStats} from "@/features/leader-board/statistics-schema.ts";
import {computed} from "vue";

const props = defineProps<{ stats: AppStats }>();

const reliability_label = computed(() => {
    const score = props.stats.reliability_average.toFixed(1);
    return `${score}/4.0`;
});
</script>

<template>
    <div class="box-container-frame stats-view">
        <div style="flex-grow: 1">
            <span class="brand-row" @click="() => $router.push('/')">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 64 64"><path
                fill="currentColor"
                d="M14.632 30.707H9.368l14.737 23.925L62 2h-5.264L24.105 37.884z"/><path
                fill="currentColor"
                d="M52.526 54.632c0 .581-.471 1.052-1.053 1.052H9.368a1.053 1.053 0 0 1-1.053-1.052V12.526c0-.582.472-1.053 1.053-1.053h28.794l5.744-6.316H4.105A2.11 2.11 0 0 0 2 7.263v52.631C2 61.059 2.943 62 4.105 62h52.631a2.103 2.103 0 0 0 2.105-2.105V18.996l-6.315 8.773z"/></svg>
            <span class="keyword .d1" style="font-size: 1.8em">
                rely.lens
            </span>

            </span>
            <div class="stats-container">
                <div class="stat-item">
                    <span class="stat-value">{{ stats.total_posts }}</span>
                    <span class="subtle">Total Posts</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{{ reliability_label }}</span>
                    <span class="subtle">Avg. Reliability</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{{ stats.total_users }}</span>
                    <span class="subtle">Active Users</span>
                </div>
            </div>
            <div>
            <span class="go-to navigation" @click="() => $router.push('/discover')">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path
                    fill="currentColor"
                    d="M8.783 41.535c8.403 8.401 21.644 8.987 30.734 1.78l1.894 1.892l-1.573 1.572l12.844 12.843c-.478.756-.685 1.338-.446 1.575l.703.702c1.143 1.145 10.104-7.819 8.961-8.962l-.703-.701c-.237-.238-.818-.033-1.572.445L46.779 39.838l-1.572 1.572l-1.893-1.893c7.206-9.091 6.621-22.333-1.779-30.735c-9.044-9.043-23.708-9.043-32.752 0c-9.045 9.046-9.043 23.709 0 32.753m2.729-30.022c7.536-7.537 19.759-7.537 27.293 0c7.537 7.535 7.537 19.758 0 27.293c-7.536 7.538-19.755 7.536-27.293 0c-7.534-7.537-7.536-19.756 0-27.293"/><path
                    fill="currentColor"
                    d="M8.683 23.902a16.6 16.6 0 0 0 3.789 5.879c6.513 6.514 17.076 6.514 23.592-.003a16.6 16.6 0 0 0 4.813-10.243c2.256 5.949 1 12.926-3.79 17.716c-6.515 6.515-17.078 6.515-23.593 0C9.84 33.6 8.239 28.674 8.683 23.902"/></svg>
                (<span class="keyword ">
                research new...
                </span>)
            </span>
            </div>
        </div>

        <div class="attribution">
            <a href="https://github.com/Edax97" target="_blank" class="github-link">
                <span class="subtle footnote">
                    Edmar Campos, 2025
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                         viewBox="0 0 24 24"
                         class="github-icon">
                        <path fill="currentColor"
                              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                </span>
            </a>
        </div>
    </div>
</template>

<style scoped>
.brand-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #a9e1ee;

    margin-top: 3rem;
}

.stats-view {
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    height: 95vh !important;
    justify-content: space-between;
}

.stats-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
}

.stat-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid rgba(96, 163, 188, 0.24);
}

.stat-value {
    font-family: Consolas, monospace;
    font-size: 2em;
    color: #a9e1ee;
}

.navigation {
    margin-top: 40px;
}

.attribution {
    margin-top: 20px;
    padding: 10px;
    margin-bottom: 40px;
    text-align: center;
    border-top: 1px solid rgba(96, 163, 188, 0.24);
}

.github-link {
    text-decoration: none;
    color: inherit;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.github-link:hover {
    opacity: 1;
}

.github-icon {
    vertical-align: middle;
    margin-left: 5px;
}

.go-to {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    justify-content: normal;
    color: #60a3bc;
    cursor: pointer;
}

.go-to:hover {
    border: 1px solid #60a3bc;
    padding: 2px;
}

</style>
