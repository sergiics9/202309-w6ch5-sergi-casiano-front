import { ImgData } from '../types/img.data';

export interface Skin {
  id: string;
  name: string;
  rarity: string;
  category: 'Rifle' | 'SMG' | 'Pistol' | 'Knife' | 'Glove';
  description: string;
  image: ImgData;
  collections_name: string;
  collections_image: string;
  case_image: string;
  case_name: string;
}

/* export type User = {
  email: string;
  passwd: string;
}; */

export type ApiResponse = {
  skins: Skin[];
};
