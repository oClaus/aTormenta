export interface AdventureSection {
  type: "title" | "subtitle" | "text" | "break";
  content?: string;
}

export interface Adventure {
  id: string;
  name: string;
  theme: string;
  image: string;
  summary: string;
  sections: AdventureSection[];
}