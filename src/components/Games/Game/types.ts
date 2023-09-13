export type IGame = {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  typeDescription: string;
  technology: string;
  platform: string;
  demoGameAvailable: boolean;
  aspectRatio: string;
  technologyID: string;
  gameIdNumeric: number;
  jurisdictions: Array<string>;
};

export type IGameList = {
  status: string;
  result: IGame[];
  error_message: string;
};
