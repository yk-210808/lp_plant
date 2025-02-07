
export type contents = {
  id: string;
  name: string;
  image: { url: string };
  review: string;
  mv_flg: boolean;
  evaluation: [ number ]
}

export type voiceType = {
  limit: number;
  totalCount: number;
  contents: [contents]
}
