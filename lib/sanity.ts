import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "xes78pqm",
  dataset: "production",
});

export interface Drinks {
    title: string
    beskrivelse?: string
    allergens?: string[]
    image?: string
}

export async function getPosts() {
  const posts: Drinks[] = await client.fetch('*[_type == "kafe"] {title, beskrivelse, allergens, "image": image.asset->url}');
  return posts;
}
