export interface Mount {
  id: string;
  name: string;
  size: string;
  description: string; 
  origin: string;
  benefits: {
    iniciante: string;
    veterano: string;
    mestre: string;
  };
  extra?: String;
}