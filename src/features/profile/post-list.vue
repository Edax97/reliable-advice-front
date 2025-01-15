<script setup lang="ts">
import {type PostData} from "@/backend-data/profile-schema.ts";
import Post from "@/features/profile/post.vue";

/*Properties and events exposed*/
const {posts} = defineProps<{ posts: PostData[] }>();

</script>
<template>
    <div v-for="post in posts" class="list-item">
        <Post :post="post"/>
    </div>
</template>
