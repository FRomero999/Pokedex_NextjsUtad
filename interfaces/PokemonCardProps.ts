export interface PokemonCardProps {
  image: string;
  number: number;
  name: string;
  types: string[];
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}
