export interface Boss {
  id: string;
  name: string;
  image: string;
  tipo: string;
  nd: number;
  historia: string;
  dicas: string;
  tamanho: string;
  iniciativa: number;
  percepcao: number;
  defesa: number;
  resistenciaDano?: string;
  fort: number;
  ref: number;
  von: number;
  pv: number;
  deslocamento: string;
  pm: number;
  ataqueDistancia?: string;
  ataqueCorpoACorpo?: string;
  habilidades: string[];
  for: number;
  des: number;
  con: number;
  int: number;
  sab: number;
  car: number;
  pericias: string[];
  equipamentos: string[];
  tesouro: string;
}

