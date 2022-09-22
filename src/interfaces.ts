export interface IWilder {
  id: number;
  name: string;
  upvotes: IUpvote[];
}

export interface IUpvote {
  id: number;
  upvotes: number;
  skill: ISkill;
  wilder: IWilder;
}

export interface ISkill {
  id: number;
  name: string;
  // upvotes: IUpvote[];
}
