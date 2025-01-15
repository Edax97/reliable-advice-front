import type {DiscoverSchema} from "@/backend-data/discover-schema.ts";
import {type Reference, type UserData, type UserPostsData} from "@/backend-data/profile-schema";
import type {ResponseRawSchema, User} from "@/backend-data/response-raw-schema.ts";
import type {AppStats} from "@/features/leader-board/statistics-schema.ts";

const API_BASE_URL = "https://staging-reliable-advice-back-9dvi.encr.app";

// Fetch a list of posts for a user
export async function fetchUserPosts(handle: string, limit_items: number): Promise<UserPostsData> {
    try {
        const response = await fetch(
            `${API_BASE_URL}/profile_posts?handle=${encodeURIComponent(handle)}&limit_items=${limit_items}`
        );
        if (!response.ok) throw new Error("Failed to fetch user posts");
        return await parseUserPosts(response);
    } catch (error) {
        console.error("Error fetching user posts:", error);
        return {user: null, posts: []};
    }
}

// Fetch a list of users
export async function fetchUsersList(limit_items: number): Promise<UserData[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/profile_list?limit_items=${limit_items}`);
        if (!response.ok) throw new Error("Failed to fetch users list");
        return await parseUserList(response);
    } catch (error) {
        console.error("Error fetching users list:", error);
        return [];
    }
}

// Search for a user and their posts
export async function discoverUserAndPosts(
    search_query: string,
    limit_items: number,
    to_store_results: boolean
): Promise<UserPostsData> {
    try {
        const response = await fetch(
            `${API_BASE_URL}/discover-user?searchTerm=${encodeURIComponent(search_query)}&number_posts=${limit_items}&store_results=${to_store_results}`
        );
        if (!response.ok) throw new Error("Failed to discover user and posts");
        return await parseDiscovered(response);
    } catch (error) {
        console.error("Error discovering user and posts:", error);
        return {user: null, posts: []};
    }
}

export async function fetchAppStatistics(): Promise<AppStats | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/statistics`);
        if (!response.ok) throw new Error("Failed to fetch users list");
        return await parseAppStatistics(response);
    } catch (error) {
        console.error("Error fetching users list:", error);
        return null;
    }
}

async function parseUserPosts(response: Response) {
    const {user, posts} = (await response.json()) as ResponseRawSchema;
    const {topic_list, ...rest_user} = user;
    const _user = {topic_list: topic_list.split(','), ...rest_user};
    const _posts = posts.map(p => {
        const {referencesjson, ...rest_p} = p;
        return {referencesJSON: JSON.parse(referencesjson) as Reference[], ...rest_p};
    });
    return {user: _user, posts: _posts};
}

async function parseDiscovered(response: Response) {
    const {user, posts} = (await response.json()) as DiscoverSchema;
    const {topic_list, ...rest_user} = user;
    const _user = {topic_list: topic_list.split(','), ...rest_user};
    const _posts = posts.map(p => {
        const {referencesJSON, ...rest_p} = p;
        return {referencesJSON: JSON.parse(referencesJSON) as Reference[], ...rest_p};
    });
    return {user: _user, posts: _posts};
}

async function parseUserList(response: Response) {
    const {users} = await response.json() as { users: User[] }
    if (users.length === 0 || !users) return [] as UserData[];
    return users.map(u => {
        const {topic_list, ...rest_user} = u;
        return {topic_list: topic_list.split(','), ...rest_user};
    }) as UserData[];
}

async function parseAppStatistics(response: Response) {
    const stats = await response.json() as AppStats;
    if (!(stats.total_users >= 0) || !stats.total_users) return null;
    return stats;
}