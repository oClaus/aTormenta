// types/dominio-eventos.ts

export interface DomainEvent {
  id: string;
  name: string;
  diceRange: string; // ex: "01-02", "71-90"
  description: string;
}
