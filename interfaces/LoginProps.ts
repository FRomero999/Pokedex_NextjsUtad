import { Usuario } from "./Usuario";

export interface LoginProps {
  onSubmit?: (usuario: Usuario) => void;
}
