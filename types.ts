export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}
