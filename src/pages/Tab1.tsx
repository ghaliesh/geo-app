import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect } from "react";
import { getLocations } from "../api/location";
import GeoCard from "../components/GeoCard";
import useGetApiResult from "../hooks/useGetApiResult";
import "./Tab1.css";

const dataGetterFunction = getLocations;

const Tab1: React.FC = () => {
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

        <div className="flex column" style={{ padding: "8px" }}>
          {result?.data?.map((location) => {
            return <GeoCard location={location} />;
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
