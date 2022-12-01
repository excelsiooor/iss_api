export interface Ilocation {
  message: string;
  timestamp: number;
  iss_position: {
    latitude: string;
    longitude: string;
  }
}

export interface IPeople {
  name: string;
  craft: string;
}

export interface IPeopleInSpace {
  message: string;
  number: number;
  people: IPeople[];
}