import { createClient } from "@sanity/client";

// Forenklet versjon av klient oppsett, normalt
// bruker vi instillinger fra en .env fil
const client = createClient({
  projectId: "xes78pqm",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-06",
});

export type Drinks = {
  title: string;
  beskrivelse: string;
  image: string;
};

/**
 * Veldig forenklet funksjon for å hente alle kaffe typer fra sanity
 * Vi gjør kun en endring på image feltet for å hente riktig href
 * @returns {Promise<Drinks[]>}
 */
export async function getDrinks() {
  const posts: Drinks[] = await client.fetch(
    '*[_type == "kafe"] { title, beskrivelse, "image": image.asset->url }'
  );

  return posts;
}
