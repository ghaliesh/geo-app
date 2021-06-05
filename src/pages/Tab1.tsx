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

const Tab1: React.FC = () => {
  const { data, loading, error } = useGetApiResult({
    dataGetterFunction: getLocations,
  });

  useEffect(() => {
    console.log({ data, loading, error });
  }, [data, error, loading]);

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
          {Array(20)
            .fill(null)
            .map((c) => (
              <GeoCard />
            ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
