<script setup lang="ts">
import {fetchUsersList} from "@/backend-data/backend-api-queries.ts";
import {type UserData} from "@/backend-data/profile-schema.ts";
import PagesBrowse from "@/components/pages-browse/pages-browse.vue";
import StatisticsView from "@/features/leader-board/statistics-view.vue";
import UserList from "@/features/leader-board/user-list.vue";
import {paginate_list} from "@/functions/filter_list.ts";
import {onMounted, ref} from "vue";

/* Properties: none */
const page_size = 5;

const user_list = ref<UserData[]>([]);

/* Navigation state: page_list, filter_list */
const page_list = ref<UserData[][]>([]); //paginate on mount and filter
const page_index = ref<number>(1);
const total_pages = ref<number>(1);

/* Mount state */
onMounted(async () => {
    user_list.value = await fetchUsersList(10000);
    populatePages(user_list.value);
});

/* on update navigation */
function moveToPage(page: number) {
    page_index.value = page;
}

function populatePages(users: UserData[]) {
    const {pages, number_pages} =
        paginate_list(users, page_size);
    total_pages.value = number_pages;
    page_list.value = pages;
    page_index.value = 1;
}

</script>
<template>
    <section class="view-container">
        <div class="left-panel">
            <StatisticsView/>
        </div>
        <div class="right-panel">
            <section class="box-container-frame padding-large">
                <UserList :users="page_list[page_index-1]"/>
                <PagesBrowse :current-page="page_index" :total-pages="total_pages"
                             v-on:update_page="moveToPage"/>
            </section>
        </div>
    </section>
</template>