export interface UserData {
    handle: string;
    did: string;
    avatar: string;
    name: string;
    reliability?: number;
    topic?: string;
    lastScanned?: string;
}

const mockUsers: UserData[] = [
    {
        handle: 'user1',
        did: 'did:example:123',
        avatar: 'avatar1.png',
        name: 'User One',
        reliability: 4.5,
        topic: 'Technology',
        lastScanned: '2023-10-01'
    },
    {
        handle: 'user2',
        did: 'did:example:456',
        avatar: 'avatar2.png',
        name: 'User Two',
        reliability: 3.8,
        topic: 'Science',
        lastScanned: '2023-10-02'
    }
];

const mockPosts: PostData[] = [
    {
        user_did: 'did:example:123',
        content: 'Post content 1',
        topic: 'Technology',
        date: '2023-10-01',
        reliability: 4.5,
        assesment: 'Positive',
        accuracy: 95
    },
    {
        user_did: 'did:example:456',
        content: 'Post content 2',
        topic: 'Science',
        date: '2023-10-02',
        reliability: 3.8,
        assesment: 'Neutral',
        accuracy: 85
    }
];

export function getPosts(): PostData[] {
    return mockPosts;
}

export function getUsersList(): UserData[] {
    return mockUsers;
}

export function getUserPosts(userDid: string): { user: UserData, posts: PostData[] } | undefined {
    const user = mockUsers.find(u => u.did === userDid);
    if (!user) return undefined;
    const posts = mockPosts.filter(p => p.user_did === userDid);
    return { user, posts };
}
export interface PostData {
    user_did: string;
    content: string;
    topic: string;
    date: string;
    reliability: number;
    assesment: string;
    accuracy: number;
}


