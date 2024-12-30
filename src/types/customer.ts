import { TPlaylist } from "./playlist";

export type TCustomer = {
  id: string;
  username: string;
  password: string;
  brandName: string;
  phoneNumber: string;
  address: string;
  brandModel: string;
  startDate: string | Date;
  subscriptionExpirationDate: string | Date;
  subscriptionExpired: boolean;
  playlists: TPlaylist[];
  payments: null;
};
