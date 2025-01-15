<script setup lang="ts">
import type {PostData} from "@/backend-data/profile-schema.ts";
import PostExpanded from "@/features/profile/post-expanded.vue";
import {status_list} from "@/features/profile/post-filters.ts";
import {ref} from 'vue';

const {post} = defineProps<{ post: PostData }>();
const item_selection_status = ref<boolean>(false);

const toggleSelection = () => {
    item_selection_status.value = !item_selection_status.value;
};
</script>
<template>
    <div style="cursor: pointer">
        <div v-if="!item_selection_status" class="box-frame frame" @click="toggleSelection">
            <div class="content subtle">
                {{ post.content }}
            </div>
            <div class="veredict readable">
            <span :class="`keyword status-${post.validation}`">
                ({{ status_list[+post.validation] }})
            </span>
                {{ post.summary }}
            </div>
            <div class="info-bar footnote">
                <span class="date">{{ post.date }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     viewBox="0 0 20 20">
                    <path fill="currentColor"
                          d="M15 4a1 1 0 1 0 0 2h1.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414L18 7.414V9a1 1 0 1 0 2 0V4zm-5.707 9.293L6 16.586V15a1 1 0 1 0-2 0v4.999h.996L9 20a1 1 0 0 0 0-2H7.414l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001M7 12a1 1 0 0 0 1-1V8h3a1 1 0 1 0 0-2H6.001L6 11a1 1 0 0 0 1 1m10 0a1 1 0 0 0-1 1v3h-3a1 1 0 1 0 0 2h5v-5a1 1 0 0 0-1-1"/>
                </svg>
            </div>
        </div>
        <PostExpanded v-if="item_selection_status" :post="post"
                      v-on:minimize:overlay="toggleSelection"/>
    </div>
</template>
<style scoped>
.veredict {
    margin-top: 10px;
}

</style>
