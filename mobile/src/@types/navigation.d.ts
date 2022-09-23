export interface GameParams {
  id: title;
  name: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: {
        id: string;
        name: string;
        bannerUrl: string;
      };
    }
  }
}
