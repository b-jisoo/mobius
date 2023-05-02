export interface BoardBase {
  title: string;
  nickname: string;
}

export interface IBoard {
  title: string;
  Data: BoardBase[];
}

export interface IBoardList {
  Data: BoardBase[];
}

export interface BoardSummaryBase {
  title: string;
  nickname: string;
}

export interface IBoardSummary {
  title: string;
  image?: string;
  boardData?: BoardSummaryBase[];
}
