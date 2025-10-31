// Defining coordinates
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Pharmacy {
  id: number;
  name: string;
  address: string;
  phone: string;
  url: string | null; // Can be null
  coordinates: Coordinates;
  onDutySchedule: string;
}