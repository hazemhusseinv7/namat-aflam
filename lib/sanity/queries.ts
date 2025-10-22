import { sanityClient } from "@/lib/sanity/client";

export async function getHeroData(): Promise<HeroType | null> {
  const query = `*[_type == "main"][0]{
    title,
    button,
    clientLogos[]{
      logo,
      companyName,
      alt
    }
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return null;
  }
}

export async function getStatsData(): Promise<StatsType | null> {
  const query = `*[_type == "stats"][0]{
    title,
    items[]{
      value,
      description,
      icon{
        ...,
        alt
      }
    }
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching stats data:", error);
    return null;
  }
}

export async function getPortfolioData(): Promise<PortfolioType | null> {
  const query = `*[_type == "portfolio"][0]{
    title,
    vimeoUrl,
    vimeoTitle
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    return null;
  }
}

export async function getWhyUsData(): Promise<WhyUsType | null> {
  const query = `*[_type == "whyUs"][0]{
    title,
    cards[]{
      title,
      description,
      icon{
        ...,
        alt
      }
    }
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching why us data:", error);
    return null;
  }
}

export async function getServicesData(): Promise<ServicesType | null> {
  const query = `*[_type == "services"][0]{
    title,
    cards[]{
      title,
      description,
      image{
        ...,
        alt
      }
    }
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching services data:", error);
    return null;
  }
}

export async function getContactUsData(): Promise<ContactUsType | null> {
  const query = `*[_type == "contactUs"][0]{
    description
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching contact us data:", error);
    return null;
  }
}

export async function getAboutUsData(): Promise<AboutUsType | null> {
  const query = `*[_type == "aboutUs"][0]{
    title,
    description,
    vimeoUrl,
    vimeoTitle
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching about us data:", error);
    return null;
  }
}

export async function getSettingsData(): Promise<SettingsType | null> {
  const query = `*[_type == "settings"][0]{
    vimeo,
    instagram,
    tiktok,
    youtube
  }`;

  try {
    return await sanityClient.fetch(query, { cache: "no-store" as any });
  } catch (error) {
    console.error("Error fetching settings data:", error);
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, description}
  }`;

  return await sanityClient.fetch(query, { cache: "no-store" as any });
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, description}
  }`;

  return await sanityClient.fetch(query, { slug });
}
