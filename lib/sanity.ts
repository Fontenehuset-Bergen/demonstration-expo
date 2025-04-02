import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'xes78pqm',
    dataset: 'production',
});

export interface Drinks { //eksporterer props/interface
    title: string,
    beskrivelse?: string,
    allergens?: string[] //array of strings
    image?: string
}


export async function getPosts() {
    const posts: Drinks[] = await client.fetch('*[_type == "kafe"] {title, beskrivelse, allergens, "image": image.asset->url}')
    return posts;
};
