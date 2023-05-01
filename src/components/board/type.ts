export interface D {}

export interface IBoard {
  title: string;
  Data: IBoardItem[];
}

export interface IBoardItem {
  title: string;
  nickname: string;
}

export interface IBoardList {
  Data: IBoardItem[];
}

export interface IBoardSummaryitem {
  title: string;
  nickname: string;
}

export interface IBoardSummary {
  title: string;
  image?: string;
  boardData?: IBoardSummaryitem[];
}
