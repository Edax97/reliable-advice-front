<script setup lang="ts">
import {onMounted, ref} from "vue";
import type { UserData, PostData} from "./profile-data.ts";
const api_host = 'your api host url';
const props = defineProps<{user: UserData}>();
//resolve post data
const posts = ref<PostData[]>([]);
const getPosts = async (did: string) : Promise<PostData[]> => {
    const postRes = await fetch(`${api_host}/users/posts/${did}`, {});
    const posts  = JSON.parse(await postRes.text()) as PostData[];
    if (!posts) return [];
    return posts
}
onMounted(async () => {
    const did = props.user.did;
    posts.value = await getPosts(did);
    })
</script>

<template>
    <section class="view-list-container">
        // render user details view
        // render post list view
    </section>
</template>