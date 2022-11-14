import { Res } from "./res";

export interface Pessoa {
    nome: string,
    localidade: string,
    sexo: string,
    res: Res[]
}