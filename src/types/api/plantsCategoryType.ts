export type contents = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: { url: string };
}

export type plantsCategoryType = {
  contents: [contents]
}