import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: 'a8jqmtu6',
  dataset: 'production',
});