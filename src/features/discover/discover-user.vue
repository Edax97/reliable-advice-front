<script setup lang="ts">
import MainBar from '@/components/header/main-bar.vue'
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const search_query = ref<string>("");
const limit_items = ref<number>(50);
const store_results = ref<boolean>(false);

const errorMessage = ref<string | null>(null);

async function performSearch() {
    errorMessage.value = null;

    if (!search_query.value.trim()) {
        errorMessage.value = "Please provide a name or handle to search.";
        return;
    }
    await router.push(`/new-profile/${search_query.value}/${limit_items.value}/${store_results.value}`);
}
</script>

<template>
    <MainBar/>
    <section class="box-container-frame min-width">
        <div class="xlarge">
            <h2 class=".h2">Discover Users</h2>
            <div class="vertical-stack margin-medium">
                <label for="searchQuery" class="subtle">Search by name or handle:</label>
                <input
                    id="searchQuery"
                    v-model="search_query"
                    type="text"
                    placeholder="Enter name or handle"
                    class="frame padding-medium"
                />
            </div>
            <div class="vertical-stack margin-medium">
                <label for="maxPosts" class="subtle">Maximum number of posts to return:</label>
                <input
                    id="maxPosts"
                    v-model="limit_items"
                    type="number"
                    min="1"
                    class="frame padding-medium"
                />
            </div>
            <div class="check-stack margin-medium">
                <label for="storeResults">
                    <input
                        id="storeResults"
                        v-model="store_results"
                        type="checkbox"
                    />
                </label>
                <span class="subtle"> Store results in db</span>

                <span>.</span>
            </div>

            <div class=" row2">
                <span @click="performSearch" class="click-me padding-medium">Perform review</span>
            </div>


            <div v-if="errorMessage" class="subtle margin-medium">{{ errorMessage }}</div>

        </div>

    </section>
</template>

<style scoped>
input, select {
    min-width: 50%;
    box-sizing: border-box;
    background-color: #0a3d62;
    color: white;
    font-family: Consolas, monospace;
}

.xlarge {
    padding: 20px 80px;
}

.vertical-stack {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
}

.check-stack {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 20px;
    margin-left: 5px;
}

.min-width {
    min-width: 1200px;
}

@media (max-width: 1000px) {
    .min-width {
        min-width: 300px;
    }

    .vertical-stack {
        flex-direction: column;
        gap: 10px;
    }

    .xlarge {
        padding: 10px;
    }
}

.row2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
}
</style>
