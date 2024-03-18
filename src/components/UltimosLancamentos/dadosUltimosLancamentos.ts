import livro from "../../assets/livro.png";

export interface Livro {
  nome: string;
  id: number;
  src: string;
}

export const livros = [
  {
    nome: "Liderança em Design",
    id: 1,
    src: livro,
  },
  {
    nome: "Liderança em UI/UX",
    id: 1,
    src: livro,
  },
  {
    nome: "JavaScript Assertivo",
    id: 2,
    src: livro,
  },
];
