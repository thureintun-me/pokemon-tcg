export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesFrom?: string;
  abilities?: Ability[];
  attacks: Attack[];
  weaknesses: Weakness[];
  retreatCost?: string[];
  convertedRetreatCost: number;
  set: CardSet;
  number: string;
  artist: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: {
    small: string;
    large: string;
  };
  tcgplayer: TCGPlayer;
  cardmarket: CardMarket;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

export interface Legalities {
  unlimited: "Legal" | "Not Legal";
  standard?: "Legal" | "Not Legal";
  expanded?: "Legal" | "Not Legal";
}

export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    normal?: Price;
    reverseHolofoil?: Price;
  };
}

export interface Price {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
}

export interface CardMarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number | null;
    suggestedPrice: number | null;
    reverseHoloSell: number | null;
    reverseHoloLow: number | null;
    reverseHoloTrend: number | null;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number | null;
    reverseHoloAvg7: number | null;
    reverseHoloAvg30: number | null;
  };
}
