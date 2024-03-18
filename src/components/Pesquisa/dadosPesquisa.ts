import livro from "../../assets/livro.png";

export interface Livro {
  nome: string
  id: string
  src?: string
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
  {
    nome: "Cangaceiro em JavaScript",
    id: 3,
    src: livro,
  },
  {
    nome: "Aventureiros do Java",
    id: 4,
    src: livro,
  },
];
