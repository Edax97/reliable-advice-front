<script setup lang="ts">
import {claimStatus} from "@/features/profile/post-filters.ts";
import type {PostData} from "@/features/profile/profile-data.ts";
const {post} = defineProps<{post: PostData}>()
</script>
<template>
    <div class="box-frame frame">
        <div class="content subtle">
            {{post.content}}
        </div>
        <div class="veredict readable">
            <span :class="`keyword status-${post.reliability}`" >
                ({{claimStatus.get(post.reliability)}})
            </span>
            {{post.assesment}} //post.summary
        </div>
        <div class="info-bar footnote">
            <span class="date">{{post.date}}</span>
            <span>X</span>
    </div>
    </div>
</template>
<style scoped>
.veredict {
    margin-top: 5px;
}
.info-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    border-top: 1px solid #bbc9ce;
}
</style>