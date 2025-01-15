<script setup lang="ts">
import {type UserData} from "@/backend-data/profile-schema.ts";
import UserBox from "@/features/leader-board/user-box.vue";

/*Properties and events exposed*/
const {users} = defineProps<{ users: UserData[] }>();

</script>
<template>
    <div class="list-container">
        <div v-for="user in users" class="list-item">
            <UserBox :user="user"/>
        </div>
    </div>
</template>
