import type Tema from "./Tema";

export default interface Usuario {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema?: Tema | null;
    usuario?: Usuario | null;
}