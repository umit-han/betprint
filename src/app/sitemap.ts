import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollections } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const wixClient = getWixServerClient();

  // Lütfen bunu kendi alan adınızla değiştirin
  const baseUrl = "https://www.bet-print.de";

  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/angebot`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dinamik sayfalar: Ürünler
  const products = await queryProducts(wixClient, {});
  const productEntries: MetadataRoute.Sitemap = products.items.map(
    (product) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.lastUpdated || product._createdDate!),
      changeFrequency: "weekly",
      priority: 0.7,
    }),
  );

  // Dinamik sayfalar: Koleksiyonlar
  const collections = await getCollections(wixClient);
  const collectionEntries: MetadataRoute.Sitemap = collections.map(
    (collection) => ({
      url: `${baseUrl}/collections/${collection.slug}`,
      lastModified: new Date(), // Wix koleksiyonlarında son değiştirilme tarihi görünmüyor
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...staticPages, ...productEntries, ...collectionEntries];
}