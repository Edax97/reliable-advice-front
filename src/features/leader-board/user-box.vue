<script setup lang="ts">
import type {UserData} from "@/backend-data/profile-schema.ts";

const reliability_score = ['', 'Sedentary', 'Passerby', 'Runner', 'Marathonist']
const {user} = defineProps<{ user: UserData }>();

</script>

<template>
    <div class="box-frame">
        <div class="row1">
            <div>
                <img :src="user.avatar" class="avatar" alt="Influencer profile picture"/>
            </div>
            <div class="column-1">
                <span class="keyword">
                    {{ user.name }}
                    (<span class="subtle">
                        {{ `${user.handle}` }}
                    </span>)
                </span>
                <span :class="`footnote status-${user.reliability.toFixed()}`">
                {{ reliability_score[+(user.reliability.toFixed() || 0)] }}
                </span>
                <div class="row2">
                    <div class="left-list">
                        <span v-for="topic in user.topic_list" :class="`footnote`">
                            #{{ topic }}
                        </span>
                    </div>
                    <span class="source-link click-me"
                          @click="() => $router.push(`/profile/${user.handle}`)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                             viewBox="0 0 20 20">
                            <path fill="currentColor"
                                  d="M15 4a1 1 0 1 0 0 2h1.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414L18 7.414V9a1 1 0 1 0 2 0V4zm-5.707 9.293L6 16.586V15a1 1 0 1 0-2 0v4.999h.996L9 20a1 1 0 0 0 0-2H7.414l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001"/>
                        </svg>
                        Fact checking
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.row1 {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.column-1 {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 5px;
    margin-top: 10px;
}

img.avatar {
    border: 3px solid rgba(96, 163, 188, 0.24); /* lighter blue */
    border-radius: 50%;
    max-width: 100px;
    height: auto;
    filter: sepia(15%) blur(0.05mm) hue-rotate(10deg) brightness(90%);
    cursor: pointer;
}

img.avatar:hover {
    filter: sepia(50%) brightness(70%);
}

.row2 {
    margin-top: 20px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid rgba(96, 163, 188, 0.86);
}

.row2 > .left-list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: left;
}


</style>