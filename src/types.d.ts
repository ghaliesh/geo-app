interface IAPIGeo {
  lat: string;
  long: string;
}

interface IAPILocation {
  date: string;
  ip: string;
  _id: string;
  city: string;
  geo: IAPIGeo;
  country: string;
  __v: number;
}
