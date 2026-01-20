
export interface Experience {
  id: number;
  client: string;
  employer?: string;
  location?: string;
  timeline: string; 
  role: string;
  responsibilities: string[];
  environment: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  liveUrl: string;
  sourceCodeUrl: string;
}