interface ImageType {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

interface HeroType {
  title?: string;
  button: string;
  clientLogos?: {
    logo: ImageType;
    companyName?: string;
    alt?: string;
  }[];
}

interface StatsType {
  title?: string;
  items: {
    value: number;
    description: string;
    icon?: ImageType;
  }[];
}

interface PortfolioType {
  title: string;
  vimeoUrl?: string;
  vimeoTitle?: string;
}

interface WhyUsType {
  title: string;
  cards: {
    title: string;
    description: string;
    icon?: ImageType;
  }[];
}

interface ServicesType {
  title: string;
  cards: {
    title: string;
    description: string;
    image: ImageType;
  }[];
}

interface ContactUsType {
  description?: string;
}

interface AboutUsType {
  title: string;
  description?: string;
  vimeoUrl?: string;
  vimeoTitle?: string;
}

interface SettingsType {
  vimeo?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
}

interface CategoryType {
  title: string;
  description?: any[];
}

interface AuthorType {
  name: string;
  image?: any;
  bio?: any[];
}

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: any;
  publishedAt?: string;
  body: any[];
  author?: AuthorType;
  categories?: CategoryType[];
}
