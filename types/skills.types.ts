export interface Skill {
  name: string;
  color: string;
  icon: string;
}

export interface Skills {
  frontend: Skill[];
  backend: Skill[];
  database: Skill[];
}
