<script setup lang="ts">

import Filter from "@/features/profile/filter.vue";
import {claimStatus} from "@/features/profile/post-filters.ts";
import type {PostData} from "@/features/profile/profile-data.ts";
import {computed, ref} from "vue";
import Post from "@/features/profile/post.vue";

const {posts} = defineProps<{posts: PostData[]}>();
const topic = ref('');
const status = ref(0);
const renderedPosts = computed(() =>{
    return posts.filter(p => ( status.value in [0, +p.reliability]
        && topic.value in ['', p.topic]));
});
const topicSelected = (option: string) => {
    topic.value = option;
}
const statusSelected = (option: number) => {
    status.value = option;
}
</script>
<template>
    <section class="list-frame">
        <div class="filter">
            <Filter :options="['medicine', 'psyc']" v-on:option-selected="topicSelected" />

        </div>

        // render post view
        <div v-for="post in renderedPosts">
            // post
            <Post :post="post" />
            // postSelected
        </div>
    </section>
</template>