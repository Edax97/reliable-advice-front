<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

function goto(path: string) {
    router.push(path);
}
</script>

<template>
    <div class="bar-container">
        <span class="go-to" @click="() => goto('/dashboard')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64"><path
                fill="currentColor"
                d="M14.632 30.707H9.368l14.737 23.925L62 2h-5.264L24.105 37.884z"/><path
                fill="currentColor"
                d="M52.526 54.632c0 .581-.471 1.052-1.053 1.052H9.368a1.053 1.053 0 0 1-1.053-1.052V12.526c0-.582.472-1.053 1.053-1.053h28.794l5.744-6.316H4.105A2.11 2.11 0 0 0 2 7.263v52.631C2 61.059 2.943 62 4.105 62h52.631a2.103 2.103 0 0 0 2.105-2.105V18.996l-6.315 8.773z"/></svg>
            <span class="keyword h3 brand">
                rely.lens
            </span>
        </span>
        <span class="right-container">
            <span class="go-to" @click="() => goto('/dashboard')">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path
                    fill="currentColor"
                    d="M56.999 7.001h-5.218L37.01 25.902L27.959 15.41L2 53.059V62h5.982l20.862-30.255l8.547 9.908l19.608-25.09z"/><path
                    fill="rgba(60,120,120,0.5)"
                    d="M62 2H2v47.536L4.783 45.5H4V33h9.402l1.379-2H4V18.5h12.5v10.005l2-2.9V18.5h4.899l1.379-2H18.5V4H31v11.876l2.266 2.624h6.99l1.563-2H33V4h12.5v7.791l2-2.561V4H60v12.5h-.999v.751l-.977 1.249H60V31H48.256L45.5 34.525V45.5H33v-5.874l-2-2.317V45.5h-9.21l-1.379 2H31V60H18.5v-9.731l-2 2.9V60h-4.709l-1.379 2H62zM16.5 16.5H4V4h12.5zm29 43.5H33V47.5h12.5zM60 60H47.5V47.5H60zm0-14.5H47.5V33H60z"/></svg>
                <span class="keyword">
                    hall
                </span>
            </span>
            <span class="go-to" @click="() => goto('/discover')">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path
                    fill="currentColor"
                    d="M8.783 41.535c8.403 8.401 21.644 8.987 30.734 1.78l1.894 1.892l-1.573 1.572l12.844 12.843c-.478.756-.685 1.338-.446 1.575l.703.702c1.143 1.145 10.104-7.819 8.961-8.962l-.703-.701c-.237-.238-.818-.033-1.572.445L46.779 39.838l-1.572 1.572l-1.893-1.893c7.206-9.091 6.621-22.333-1.779-30.735c-9.044-9.043-23.708-9.043-32.752 0c-9.045 9.046-9.043 23.709 0 32.753m2.729-30.022c7.536-7.537 19.759-7.537 27.293 0c7.537 7.535 7.537 19.758 0 27.293c-7.536 7.538-19.755 7.536-27.293 0c-7.534-7.537-7.536-19.756 0-27.293"/><path
                    fill="currentColor"
                    d="M8.683 23.902a16.6 16.6 0 0 0 3.789 5.879c6.513 6.514 17.076 6.514 23.592-.003a16.6 16.6 0 0 0 4.813-10.243c2.256 5.949 1 12.926-3.79 17.716c-6.515 6.515-17.078 6.515-23.593 0C9.84 33.6 8.239 28.674 8.683 23.902"/></svg>
                <span class="keyword ">
                research
                </span>
            </span>
        </span>
    </div>
</template>

<style scoped>
.bar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 20px;
    margin: 10px 0 10px;
    border-bottom: #60a3bc solid 1px;
}

.right-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px
}

.go-to {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    justify-content: normal;
    color: #60a3bc;
    cursor: pointer;
}

.go-to:hover {
    border: 1px solid #60a3bc;
    padding: 2px;
}
</style>