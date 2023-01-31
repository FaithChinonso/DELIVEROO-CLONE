import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

const client = sanityClient({
  projectId: "plx09jts",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
const builder = ImageUrlBuilder(client);
export const urlFor = source => builder.image(source);

//run this to add exception for CORS
// sanity cors add http://localhost.3000
export default client;
