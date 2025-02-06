
export type contents = {
  name: string;
  image: { url: string };
  review: string;
  mv_flg: boolean;
}

export type voiceType = {
  limit: number;
  totalCount: number;
  contents: [contents]
}
