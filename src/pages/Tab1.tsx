import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { getLocations } from "../api/location";
import SingleLocationModal from "../components/SingleLocation";
import GeoCard from "../components/GeoCard";
import useGetApiResult from "../hooks/useGetApiResult";
import "./Tab1.css";
import { useState } from "react";

const dataGetterFunction = getLocations;

const Tab1: React.FC = () => {
  const [location, setLocation] = useState<IAPILocation | null>(null);
  const { result, loading, error } = useGetApiResult<IAPILocation[], never>({
    dataGetterFunction,
  });

  if (error) return null;

  if (loading) return <p>loading</p>;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">History</IonTitle>
          </IonToolbar>
        </IonHeader>
        {location && <SingleLocationModal location={location} />}
        <div className="flex column" style={{ padding: "8px" }}>
          {result?.data?.map((location) => {
            return (
              <GeoCard
                location={location}
                onSelect={(): void => setLocation(location)}
              />
            );
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
