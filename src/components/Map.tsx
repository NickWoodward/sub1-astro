import { type Place } from "../models/Models";

interface Props {
  location: string,
  resultIndex?: number
}

interface LocationResponse {
  features: {
    geometry: {
      coordinates: number[];
    },
    properties: {
      place_id: number;
      display_name: string;
    }
  }[]
}

export const Map = async ({ location, resultIndex = 0 }: Props) => {
  const getLocation = async () => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${location}&format=geojson&addressdetails=1&layer=address&limit=5`
    );

    const data: LocationResponse = await res.json();
    console.log(data);
    const places: Place[] = data.features.map((location) => {
      return {
        id: location.properties.place_id,
        name: location.properties.display_name,
        longitude: location.geometry.coordinates[0],
        latitude: location.geometry.coordinates[1],
      }
    });
    
    return places[resultIndex];
  }
  const place = await getLocation();
  console.log(place);
  return <div>MAP</div>;
}