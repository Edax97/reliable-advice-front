<script setup lang="ts">
import type {PostData} from "@/backend-data/profile-schema.ts";
import {status_list} from "@/features/profile/post-filters.ts";

const {post} = defineProps<{ post: PostData }>()
const emit = defineEmits<{ (e: 'minimize:overlay'): void }>();
const parseUrl = (uri: string) => {
    const [, , did, , postid] = uri.split('/')
    return `https://bsky.app/profile/${did}/post/${postid}?ref_src=embed`
}

</script>

<template>
    <div class="overlay-film" @click="() => emit('minimize:overlay')">
        .
    </div>
    <div class="box-frame  expanded overlay-frame">
        <div class="row1">
            <span class="footnote">#{{ post.topic }}</span>
            <a :href="parseUrl(post.url)" target="_blank" class="source-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                    <path fill="currentColor"
                          d="M15 4a1 1 0 1 0 0 2h1.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414L18 7.414V9a1 1 0 1 0 2 0V4zm-5.707 9.293L6 16.586V15a1 1 0 1 0-2 0v4.999h.996L9 20a1 1 0 0 0 0-2H7.414l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001"/>
                </svg>
                Original Post
            </a>
        </div>

        <div class="content subtle middle-row">
            {{ post.content }}
        </div>

        <div class="readable middle-row">
            <span :class="`keyword status-${post.validation}`">
                ({{ status_list[+post.validation] }})
            </span>{{ post.detailed_review }}
        </div>

        <div class="references" v-if="post.referencesJSON.length">
            <ul>
                <li v-for="ref in post.referencesJSON" :key="ref.citation">
                    <a :href="ref.resource_url" target="_blank">{{ ref.citation }}</a>
                </li>
            </ul>
        </div>

        <div class="info-bar footnote">
            <span class="date">{{ post.date }}</span>
        </div>
    </div>
</template>

<style scoped>
.expanded {
    padding: 20px;
}

.row1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.middle-row {
    margin-top: 15px;
}


.source-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-decoration: none;
}


.references {
    margin-top: 20px;
}

.references ul {
    list-style: none;
    padding: 0;
}

.references li {
    margin: 5px 0;
}

.references a {
    text-decoration: none;
}

.info-bar {
    margin-top: 20px;
    text-align: right;
}
</style>
