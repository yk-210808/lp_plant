export type contents = {
  id: string;
  name: string;
  description: string;
  detail?: string;
  price: string;
  image: { url: string };
  category: {
    title: string;
    slug: string;
    id: string;
  };
  trendy: boolean;
  trendy_mv: boolean;
  best: boolean;
  slider?: [{
    url: string
  }]
}

export type plantsType = {
  limit: number;
  totalCount: number;
  contents: [contents]
}