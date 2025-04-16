import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: 'a8jqmtu6',
  dataset: 'production',
});

export interface Coffee{
    image: string
    nameofcoffee: string
    price: number
}

export async function getCoffee() {
   const result:Coffee[] = await client.fetch('*[_type=="coffee"] {"image": image.asset->url, nameofcoffee,price}')
   console.log(result)
   return result
}