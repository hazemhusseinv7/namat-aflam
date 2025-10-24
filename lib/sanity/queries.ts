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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["hero", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["stats", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["portfolio", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["why-us", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["services", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["contact-us", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["about-us", "content"] },
      }
    );
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
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["settings", "content"] },
      }
    );
  } catch (error) {
    console.error("Error fetching settings data:", error);
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[] | null> {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->{name, image, bio},
    "categories": categories[]->{title, description}
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["blog", "content"] },
      }
    );
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
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

  try {
    return await sanityClient.fetch(
      query,
      { slug },
      {
        next: { revalidate: 3600, tags: [`blog-post-${slug}`, "content"] },
      }
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getTermsAndConditionsData(): Promise<TermsAndConditionsType | null> {
  const query = `*[_type == "termsAndConditions"][0]{
    sections[]{
      title,
      description
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["terms-and-conditions", "content"] },
      }
    );
  } catch (error) {
    console.error("Error fetching terms and conditions data:", error);
    return null;
  }
}

export async function getPrivacyPolicyData(): Promise<PrivacyPolicyType | null> {
  const query = `*[_type == "privacyPolicy"][0]{
    sections[]{
      title,
      description
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: { revalidate: 3600, tags: ["privacy-policy", "content"] },
      }
    );
  } catch (error) {
    console.error("Error fetching privacy policy data:", error);
    return null;
  }
}

export async function getFrequentlyAskedQuestionsData(): Promise<FrequentlyAskedQuestionsType | null> {
  const query = `*[_type == "frequentlyAskedQuestions"][0]{
    questions[]{
      title,
      subtitle,
      description
    }
  }`;

  try {
    return await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: 3600,
          tags: ["frequently-asked-questions", "content"],
        },
      }
    );
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return null;
  }
}
