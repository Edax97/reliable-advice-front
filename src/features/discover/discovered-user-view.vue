<script setup lang="ts">
import {discoverUserAndPosts} from "@/backend-data/backend-api-queries";
import type {PostData, UserData} from "@/backend-data/profile-schema.ts";
import MainBar from "@/components/header/main-bar.vue";
import PagesBrowse from "@/components/pages-browse/pages-browse.vue";
import FilterHorizontal from "@/features/profile/filter-horizontal.vue";
import Filter from "@/features/profile/filter.vue";
import {status_list, status_to_score, topics} from "@/features/profile/post-filters.ts";
import PostList from "@/features/profile/post-list.vue";
import UserInformation from "@/features/profile/user-information.vue";
import {filter_list, paginate_list} from "@/functions/filter_list.ts";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

/*Properties*/
const route = useRoute<'new-profile'>();
const name = route.params.name as string;
const limit_items = route.params.items as string;
const store = route.params.store as string;
/* State variables */
const page_size = 5;
const page_index = ref<number>(1);
const total_pages = ref<number>(1);
const posts = ref<PostData[]>([]);
const user = ref<UserData | null>(null);
onMounted(async () => {
    try {
        const response = await discoverUserAndPosts(name, +limit_items, !!store);
        if (!response) throw new Error("Could not find user");
        user.value = response.user;
        posts.value = response.posts;
    } catch (error) {
        console.error("Error fetching profile data:", error);
    }
    /* Populate pages */
    populatePages(posts.value);
})
/* State */
const page_list = ref<PostData[][]>([]);
const filters = ref<Map<string, string>>(new Map([]));

function onPageChange(page: number) {
    page_index.value = page;
}

function onNewFilter([filter, expected]: [string, any]): void {
    const original_filters = filters.value;
    filters.value = original_filters.set(filter, expected);
    const post_list_filtered = filter_list(posts.value, filters.value);
    populatePages(post_list_filtered);
}

function populatePages(ps: PostData[]) {
    const {pages, number_pages} =
        paginate_list(ps, page_size);
    total_pages.value = number_pages;
    page_list.value = pages;
    page_index.value = 1;
}
</script>

<template>
    <div>
        <MainBar/>
        <section class="view-container">
            <div class="left-panel">
                <UserInformation v-if="user" :user="user" :n_posts="posts.length"/>
            </div>
            <div class="right-panel">
                <section class="box-container-frame padding-large">
                    <div class="filters">
                        <FilterHorizontal :options="topics" v-on:option-selected="(option: string) =>
                    onNewFilter(['topic', option])"/>
                        <Filter :options="status_list" v-on:option-selected="(option: string) =>
                    onNewFilter(['validation', status_to_score.get(option)])"/>
                    </div>
                    <div class="list-container">
                        <PostList :posts="page_list[page_index-1]"
                        />
                    </div>
                    <div>
                        <PagesBrowse :current-page="page_index" :total-pages="total_pages"
                                     v-on:update_page="onPageChange"/>
                    </div>
                </section>

            </div>
        </section>
    </div>

</template>
