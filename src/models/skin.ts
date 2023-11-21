export interface Skin {
  id: string;
  name: string;
  rarity: string;
  description: string;
  image: string;
  collections_name: string;
  collections_image: string;
}

export type ApiResponse = {
  skins: Skin[];
};
