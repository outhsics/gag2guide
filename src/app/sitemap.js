import { SITE } from "../data/content";
export default function sitemap() {
  const routes = ["", "/codes/", "/pets/", "/mutations/", "/weather/", "/eggs/", "/crops/", "/gear/", "/guide/"];
  return routes.map(r => ({ url: SITE + (r || "/"), lastModified: new Date(), changeFrequency: "weekly", priority: r === "" ? 1 : 0.8 }));
}
