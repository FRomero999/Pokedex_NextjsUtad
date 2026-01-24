// Tipo de datos para el Pokémon que se envía en el formulario
export interface PokemonFormData {
  id: number;
  nombre: string;
  image: string;
  tipo: string[];
  descripcion: string;
}
