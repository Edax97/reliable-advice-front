<script setup lang="ts">
import type {UserData} from "@/backend-data/profile-schema.ts";
import {topics} from "@/features/profile/post-filters.ts";

const reliability_score = ['', 'Sedentary', 'Passerby', 'Runner', 'Marathonist']
const {user, n_posts} = defineProps<{ user: UserData, n_posts: number }>()
</script>

<template>
    <div class="box-container-frame">
        <div class="row1">
            <img :src="user.avatar" class="profile" alt="Influencer profile picture"/>
        </div>
        <div class="column-1">
                <span class="h1 keyword">
                    {{ user.name }}
                </span>
            <span class="subtle">
                    ({{ `${user.handle}` }})
                </span>
        </div>
        <div class="middle-row">
            <span :class="`status-${user.reliability.toFixed()}`">
                {{ reliability_score[+(user.reliability.toFixed() || 0)] }}
            </span>
            <span class="footnote">{{ `${n_posts} posts reviewed.` }}</span>
        </div>
        <div class="row2">
            <span v-for="topic in user.topic_list"
                  :class="`footnote topic-${topics.indexOf(topic || '')}`">
                #{{ topic }}
            </span>
        </div>
    </div>
</template>

<style scoped>
.row1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
}

.column-1 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 5px;
    justify-content: flex-start;
    margin-top: 20px;
}

.middle-row {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2px;
    margin-top: 20px;
}

.row2 {
    margin-top: 20px;
    display: flex;
    flex-wrap: inherit;
    flex-direction: row;
    gap: 10px;
    justify-content: left;
}
</style>