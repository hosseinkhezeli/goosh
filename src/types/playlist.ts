export type TPlaylist = {
  id: string;
  name: string;
  fromTime: string | Date;
  toTime: string | Date;
  isShuffled: boolean;
  duration: number;
  isOccasionPlaylist: boolean;
  occasionType: string;
  musics: unknown[];
};
