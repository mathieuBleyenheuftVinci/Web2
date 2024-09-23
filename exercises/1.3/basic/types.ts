interface Film {
  id: number;
  title: string;
  director: string;
  duration : number;

  budget?: number;
  description?: string;
  imageURL?: string;
}

export type { Film };
