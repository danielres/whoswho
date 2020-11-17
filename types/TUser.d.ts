import { TPhoto } from "./TPhoto";
import { TTime } from "./TTime";

export type TUser = {
  name: string;
  email: string;
  createdAt: TTime;
  updatedAt?: TTime;
  bio?: string;
  photo?: TPhoto;
};
