import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'pppdslrq',
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

export interface Person {
    fullName: string
    portrait: string
    hobby?: string[]
    description: string
}


export async function getPersons() {
    const persons: Person[] = await client.fetch(
        '*[_type == "person"] {fullName, hobby, description, "portrait": portrait.asset->url}');
    return persons;
};
