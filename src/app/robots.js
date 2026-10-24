import { SITE } from "../data/content";
export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: SITE + "/sitemap.xml" };
}
