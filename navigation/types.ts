import { Recipe } from "../types/Recipe";

export type RootStackParamList = {
  Home: undefined;
  Details: { recipe: Recipe };
};
