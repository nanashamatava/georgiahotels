export interface City {
  id: string;
  name: string;
  image: string;
  description?: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  address: string;
  cityId: string;
  ownerName: string;
  ownerPhone: string;
}
