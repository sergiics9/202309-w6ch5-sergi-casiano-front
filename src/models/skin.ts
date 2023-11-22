export interface Skin {
  id: string;
  name: string;
  rarity: string;
  category: 'Rifle' | 'SMG' | 'Pistol' | 'Knife' | 'Glove';
  description: string;
  image: string;
  collections_name: string;
  collections_image: string;
  case_image: string;
  case_name: string;
}

export type ApiResponse = {
  skins: Skin[];
};
