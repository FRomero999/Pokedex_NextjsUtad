import { PokemonFormData } from "./PokemonFormData";

export interface PokemonFormProps {
  onSubmit?: (pokemon: PokemonFormData) => void;
}
