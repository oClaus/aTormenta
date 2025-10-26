export interface Power {
  id: string;
  name: string;
  description: string;
  prerequisite?: string;
  origin: string;
}

export interface PowerCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  origin: string;
}

// Função auxiliar para converter origem em maiúsculas
export function formatOrigin(origin: string): string {
  return origin
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}