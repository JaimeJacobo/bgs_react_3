
type Volume = {
    value: number;
    unit: string;
  }
  
  type Temperature = {
    value: number;
    unit: string;
  }
  
  type Method = {
    mash_temp: {
      temp: Temperature;
      duration: number;
    }[];
    fermentation: {
      temp: Temperature;
    };
    twist: string | null;
  }
  
  type Ingredient = {
    name: string;
    amount: {
      value: number;
      unit: string;
    };
    add?: string;
    attribute?: string;
  }
  
  type Ingredients = {
    malt: Ingredient[];
    hops: Ingredient[];
    yeast: string;
  }
  
  export type Beer = {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    target_fg: number;
    target_og: number;
    ebc: number;
    srm: number;
    ph: number;
    attenuation_level: number;
    volume: Volume;
    boil_volume: Volume;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
  }
  
  // export type BeerList = Beer[];
  
  // export {Beer, BeerList};
  