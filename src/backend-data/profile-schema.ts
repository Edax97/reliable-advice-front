export type Topic = 'Mental health' | 'Nutrition' | 'Neuroscience' | 'Public health' | 'Medicine';
export type Reliability = 1 | 2 | 3 | 4;

export interface Reference {
    citation: string;
    resource_url: string;
}

export interface UserData {
    handle: string;
    did: string;
    avatar: string;
    name: string;
    reliability: number;
    topic_list: string[];
    last_scanned: string;
}

export interface PostData {
    user_did: string;
    content: string;
    topic: string;
    date: string;
    detailed_review: string;
    referencesJSON: Reference[];
    summary: string;
    url: string;
    validation: number;
}

export interface UserPostsData {
    user: UserData | null;
    posts: PostData[];
}