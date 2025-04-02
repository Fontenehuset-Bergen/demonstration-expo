import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "a8jqmtu6",
  dataset: "kaffetest2",
});

//export interface Drinks {
//    title: string
//   beskrivelse?: string
//    allergens?: string[]
//    image?: string
//}

export interface coffee {
    title: string
    image?: string
    price: number
}

export async function getPosts() {
  const posts: coffee[] = await client.fetch('*[_type == "coffee"] {title, "image": image.asset->url, price}');
  return posts;
}
