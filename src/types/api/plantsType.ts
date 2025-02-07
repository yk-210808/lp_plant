export type contents = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: { url: string };
  category: { 
    title: string;
    slug: string;
  };
  trendy :boolean;
  trendy_mv: boolean;
  best: boolean;
}

export type plantsType = {
  limit: number;
  totalCount: number;
  contents: [contents]
}