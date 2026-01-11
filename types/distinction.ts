export interface DistinctionPower {
  name: string;
  description: string;
}

export interface Distinction {
  id: string;
  name: string;
  origin: string;
  image?: string; // URL da imagem para o card da distinção
  introduction: string;
  admission: string;
  mark: string; // Conteúdo da \'Marca da Distinção\'
  powers: DistinctionPower[];
  extras?: string; // Conteúdo para seções extras como \'Implantes\'
}