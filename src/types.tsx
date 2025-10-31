// Bu, harita koordinatlarının yapısını tanımlar
export interface Coordinates {
  lat: number;
  lng: number;
}

// Bu, tek bir eczanenin tüm veri yapısını tanımlar
export interface Pharmacy {
  id: number;
  name: string;
  address: string;
  phone: string;
  url: string | null; // URL null olabilir
  coordinates: Coordinates;
}