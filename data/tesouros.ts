// data/tesouros.ts
import { TreasureND } from "@/types/tesouro";

export const tesouros: TreasureND[] = [
  {
    nd: "1/4",
    dinheiro: [
      { min: 1,  max: 30,  result: "—" },
      { min: 31, max: 70,  result: "1d6×10 TC" },
      { min: 71, max: 95,  result: "1d4×100 TC" },
      { min: 96, max: 100, result: "1d6×10 T$" },
    ],
    itens: [
      { min: 1,  max: 50,  result: "—" },
      { min: 51, max: 75,  result: "Diverso" },
      { min: 76, max: 100, result: "Equipamento" },
    ],
  },
  {
    nd: "1/2",
    dinheiro: [
      { min: 1,  max: 25,  result: "—" },
      { min: 26, max: 70,  result: "2d6×10 TC" },
      { min: 71, max: 95,  result: "2d8×10 T$" },
      { min: 96, max: 100, result: "1d4×100 T$" },
    ],
    itens: [
      { min: 1,  max: 45,  result: "—" },
      { min: 46, max: 70,  result: "Diverso" },
      { min: 71, max: 100, result: "Equipamento" },
    ],
  },
  {
    nd: "1",
    dinheiro: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 70,  result: "3d8×10 T$" },
      { min: 71, max: 95,  result: "4d12×10 T$" },
      { min: 96, max: 100, result: "1 riqueza menor" },
    ],
    itens: [
      { min: 1,  max: 40,  result: "—" },
      { min: 41, max: 65,  result: "Diverso" },
      { min: 66, max: 90,  result: "Equipamento" },
      { min: 91, max: 100, result: "1 poção" },
    ],
  },
  {
    nd: "2",
    dinheiro: [
      { min: 1,  max: 15,  result: "—" },
      { min: 16, max: 55,  result: "3d10×10 T$" },
      { min: 56, max: 85,  result: "2d4×100 T$" },
      { min: 86, max: 95,  result: "2d6+1×100 T$" },
      { min: 96, max: 100, result: "1 riqueza menor" },
    ],
    itens: [
      { min: 1,  max: 30,  result: "—" },
      { min: 31, max: 40,  result: "Diverso" },
      { min: 41, max: 70,  result: "Equipamento" },
      { min: 71, max: 90,  result: "1 poção" },
      { min: 91, max: 100, result: "Superior (1 melhoria)" },
    ],
  },
  {
    nd: "3",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 20,  result: "4d12×10 T$" },
      { min: 21, max: 60,  result: "1d4×100 T$" },
      { min: 61, max: 90,  result: "1d8×10 TO" },
      { min: 91, max: 100, result: "1d3 riquezas menores" },
    ],
    itens: [
      { min: 1,  max: 25,  result: "—" },
      { min: 26, max: 35,  result: "Diverso" },
      { min: 36, max: 60,  result: "Equipamento" },
      { min: 61, max: 85,  result: "1 poção" },
      { min: 86, max: 100, result: "Superior (1 melhoria)" },
    ],
  },
  {
    nd: "4",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 50,  result: "1d6×100 T$" },
      { min: 51, max: 80,  result: "1d12×100 T$" },
      { min: 81, max: 90,  result: "1 riqueza menor*" },
      { min: 91, max: 100, result: "1d3 riquezas menores*" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 30,  result: "Diverso" },
      { min: 31, max: 55,  result: "Equipamento²⁰" },
      { min: 56, max: 80,  result: "1 poção*" },
      { min: 81, max: 100, result: "Superior (1 melhoria)²⁰" },
    ],
  },
  {
    nd: "5",
    dinheiro: [
      { min: 1,  max: 15,  result: "—" },
      { min: 16, max: 65,  result: "1d8×100 T$" },
      { min: 66, max: 95,  result: "3d4×10 TO" },
      { min: 96, max: 100, result: "1 riqueza média" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 70,  result: "1 poção" },
      { min: 71, max: 90,  result: "Superior (1 melhoria)" },
      { min: 91, max: 100, result: "Superior (2 melhorias)" },
    ],
  },
  {
    nd: "6",
    dinheiro: [
      { min: 1,  max: 15,  result: "—" },
      { min: 16, max: 60,  result: "2d6×100 T$" },
      { min: 61, max: 90,  result: "2d10×100 T$" },
      { min: 91, max: 100, result: "1d3+1 riquezas menores" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 65,  result: "1 poção*" },
      { min: 66, max: 95,  result: "Superior (1 melhoria)" },
      { min: 96, max: 100, result: "Superior (2 melhorias)²⁰" },
    ],
  },
  {
    nd: "7",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 60,  result: "2d8×100 T$" },
      { min: 61, max: 90,  result: "2d12×10 TO" },
      { min: 91, max: 100, result: "1d4+1 riquezas menores" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 60,  result: "1d3 poções" },
      { min: 61, max: 90,  result: "Superior (2 melhorias)" },
      { min: 91, max: 100, result: "Superior (3 melhorias)" },
    ],
  },
  {
    nd: "8",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 55,  result: "2d10×100 T$" },
      { min: 56, max: 95,  result: "1d4+1 riquezas menores" },
      { min: 96, max: 100, result: "1 riqueza média*" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 75,  result: "1d3 poções" },
      { min: 76, max: 95,  result: "Superior (2 melhorias)" },
      { min: 96, max: 100, result: "Superior (3 melhorias)²⁰" },
    ],
  },
  {
    nd: "9",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 35,  result: "1 riqueza média" },
      { min: 36, max: 85,  result: "4d6×100 T$" },
      { min: 86, max: 100, result: "1d3 riquezas médias" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 70,  result: "1 poção*" },
      { min: 71, max: 95,  result: "Superior (3 melhorias)" },
      { min: 96, max: 100, result: "Mágico (menor)" },
    ],
  },
  {
    nd: "10",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 30,  result: "4d6×100 T$" },
      { min: 31, max: 85,  result: "4d10×10 TO" },
      { min: 86, max: 100, result: "1d3+1 riquezas médias" },
    ],
    itens: [
      { min: 1,  max: 50,  result: "—" },
      { min: 51, max: 75,  result: "1d3+1 poções" },
      { min: 76, max: 90,  result: "Superior (3 melhorias)" },
      { min: 91, max: 100, result: "Mágico (menor)" },
    ],
  },
  {
    nd: "11",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 45,  result: "2d4×1.000 T$" },
      { min: 46, max: 85,  result: "1d3 riquezas médias" },
      { min: 86, max: 100, result: "2d6×100 TO" },
    ],
    itens: [
      { min: 1,  max: 45,  result: "—" },
      { min: 46, max: 70,  result: "1d4+1 poções" },
      { min: 71, max: 90,  result: "Superior (3 melhorias)" },
      { min: 91, max: 100, result: "Mágico (menor)²⁰" },
    ],
  },
  {
    nd: "12",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 45,  result: "1 riqueza média*" },
      { min: 46, max: 80,  result: "2d6×1.000 T$" },
      { min: 81, max: 100, result: "1d4+1 riquezas médias" },
    ],
    itens: [
      { min: 1,  max: 45,  result: "—" },
      { min: 46, max: 70,  result: "1d3+1 poções*" },
      { min: 71, max: 85,  result: "Superior (4 melhorias)" },
      { min: 86, max: 100, result: "Mágico (menor)" },
    ],
  },
  {
    nd: "13",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 45,  result: "4d4×1.000 T$" },
      { min: 46, max: 80,  result: "1d3+1 riquezas médias" },
      { min: 81, max: 100, result: "4d6×100 TO" },
    ],
    itens: [
      { min: 1,  max: 40,  result: "—" },
      { min: 41, max: 65,  result: "1d4+1 poções*" },
      { min: 66, max: 95,  result: "Superior (4 melhorias)" },
      { min: 96, max: 100, result: "Mágico (médio)" },
    ],
  },
  {
    nd: "14",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 45,  result: "1d3+1 riquezas médias" },
      { min: 46, max: 80,  result: "3d6×1.000 T$" },
      { min: 81, max: 100, result: "1 riqueza maior" },
    ],
    itens: [
      { min: 1,  max: 40,  result: "—" },
      { min: 41, max: 65,  result: "1d4+1 poções*" },
      { min: 66, max: 90,  result: "Superior (4 melhorias)" },
      { min: 91, max: 100, result: "Mágico (médio)" },
    ],
  },
  {
    nd: "15",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 45,  result: "1 riqueza média*" },
      { min: 46, max: 80,  result: "2d10×1.000 T$" },
      { min: 81, max: 100, result: "1d4×1.000 TO" },
    ],
    itens: [
      { min: 1,  max: 35,  result: "—" },
      { min: 36, max: 45,  result: "1d6+1 poções" },
      { min: 46, max: 85,  result: "Superior (4 melhorias)²⁰" },
      { min: 86, max: 100, result: "Mágico (médio)" },
    ],
  },
  {
    nd: "16",
    dinheiro: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 40,  result: "3d6×1.000 T$" },
      { min: 41, max: 75,  result: "3d10×100 TO" },
      { min: 76, max: 100, result: "1d3 riquezas maiores" },
    ],
    itens: [
      { min: 1,  max: 35,  result: "—" },
      { min: 36, max: 45,  result: "1d6+1 poções*" },
      { min: 46, max: 80,  result: "Superior (4 melhorias)²⁰" },
      { min: 81, max: 100, result: "Mágico (médio)" },
    ],
  },
  {
    nd: "17",
    dinheiro: [
      { min: 1,  max: 5,   result: "—" },
      { min: 6,  max: 40,  result: "4d6×1.000 T$" },
      { min: 41, max: 75,  result: "1d3 riquezas médias*" },
      { min: 76, max: 100, result: "2d4×1.000 TO" },
    ],
    itens: [
      { min: 1,  max: 20,  result: "—" },
      { min: 21, max: 40,  result: "Mágico (menor)" },
      { min: 41, max: 80,  result: "Mágico (médio)" },
      { min: 81, max: 100, result: "Mágico (maior)" },
    ],
  },
  {
    nd: "18",
    dinheiro: [
      { min: 1,  max: 5,   result: "—" },
      { min: 6,  max: 40,  result: "4d10×1.000 T$" },
      { min: 41, max: 75,  result: "1 riqueza maior" },
      { min: 76, max: 100, result: "1d3+1 riquezas maiores" },
    ],
    itens: [
      { min: 1,  max: 15,  result: "—" },
      { min: 16, max: 40,  result: "Mágico (menor)²⁰" },
      { min: 41, max: 70,  result: "Mágico (médio)" },
      { min: 71, max: 100, result: "Mágico (maior)" },
    ],
  },
  {
    nd: "19",
    dinheiro: [
      { min: 1,  max: 5,   result: "—" },
      { min: 6,  max: 40,  result: "4d12×1.000 T$" },
      { min: 41, max: 75,  result: "1 riqueza maior*" },
      { min: 76, max: 100, result: "1d12×1.000 TO" },
    ],
    itens: [
      { min: 1,  max: 10,  result: "—" },
      { min: 11, max: 40,  result: "Mágico (menor)²⁰" },
      { min: 41, max: 60,  result: "Mágico (médio)²⁰" },
      { min: 61, max: 100, result: "Mágico (maior)" },
    ],
  },
  {
    nd: "20",
    dinheiro: [
      { min: 1,  max: 5,   result: "—" },
      { min: 6,  max: 40,  result: "2d4×1.000 TO" },
      { min: 41, max: 75,  result: "1d3 riquezas maiores" },
      { min: 76, max: 100, result: "1d3+1 riquezas maiores*" },
    ],
    itens: [
      { min: 1,  max: 5,   result: "—" },
      { min: 6,  max: 40,  result: "Mágico (menor)²⁰" },
      { min: 41, max: 50,  result: "Mágico (médio)²⁰" },
      { min: 51, max: 100, result: "Mágico (maior)²⁰" },
    ],
  },
];