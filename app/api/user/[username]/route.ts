// Este archivo define una ruta API en Next.js para obtener información de un usuario según su nombre de usuario.

// Importa los tipos NextRequest y NextResponse desde el paquete 'next/server'.
// NextRequest representa la solicitud HTTP entrante, mientras que NextResponse se utiliza para enviar la respuesta.
import { NextRequest, NextResponse } from "next/server";

// Importa la interfaz 'Usuario' desde el directorio de interfaces del proyecto.
// Esto se usa para tipar el objeto usuario que se devolverá, asegurando que tenga la estructura adecuada.
import { Usuario } from "@/interfaces/Usuario";

// Define una función asincrónica GET que manejará las solicitudes GET a esta ruta.
// La función recibe dos parámetros:
// - request: el objeto de solicitud HTTP entrante.
// - un objeto destructurado que contiene 'params', donde 'params' a su vez tiene el 'username' recibido por la ruta.
export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = await params;

    // Aquí puedes implementar la lógica para obtener el usuario
    // Por ejemplo, buscar en una base de datos, etc.
    // Por ahora, retornamos un ejemplo
    const usuario: Usuario = {
      username: username,
      password: "vacio", // En una implementación real, no deberías retornar la contraseña
    };

    return NextResponse.json(usuario, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener el usuario" },
      { status: 500 }
    );
  }
}
