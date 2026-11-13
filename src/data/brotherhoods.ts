
export type Brotherhood = {
  id: string;
  name: string;
  country: string;
  image: string;
  city?: string;
  description?: string;
  email?: string;
  phone?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
};

export const brotherhoods: Brotherhood[] = [
  {
    id: "hamburgo",
    name: "Hamburgo",
    country: "Germany",
    image: "sm-hamburgo.jpeg",
  },
  {
    id: "hannover",
    name: "Hannover",
    country: "Germany",
    image: "sm-hannover.jpeg",
  },
  {
    id: "hospitalet",
    name: "Hospitalet",
    country: "Spain",
    image: "sm-hospitalet.jpeg",
  },
  {
    id: "madrid",
    name: "Madrid",
    country: "Spain",
    image: "sm-madrid.jpeg",
  },
  {
    id: "majadahonda",
    name: "Majadahonda",
    country: "Spain",
    image: "sm-majadahonda.jpeg",
  },
  {
    id: "sevilla",
    name: "Sevilla",
    country: "Spain",
    image: "sm-sevilla.jpeg",
  },
  {
    id: "torino",
    name: "Torino",
    country: "Italy",
    image: "sm-torino.jpeg",
  },
];
