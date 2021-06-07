import styled from "styled-components";

import { Row } from "./GeoCard";
import { IonButton } from "@ionic/react";
import { dateFormat } from "../config";
import img from "./image.png";
import { format } from "date-fns";

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 42px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1c1c1d;
  padding: 20px 12px;
  z-index: 122;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  & .single-row {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  & h5 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 800;
    color: #3880ff;
    margin-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;

  & img {
    width: 50%;
  }
`;

interface ISingleLocation {
  location: IAPILocation;
}

const SingleLocation: React.FC<ISingleLocation> = ({
  location,
}): JSX.Element => {
  const { _id, city, country, ip, geo } = location;
  return (
    <Wrapper>
      <h5>Location Details</h5>
      <Row label="Location ID" value={_id} />
      <Row label="City" value={city} />
      <Row label="Country" value={country} />
      <Row label="IP Address" value={ip} />
      <Row label="Location Latitude" value={geo?.lat} />
      <Row label="Location Longitude" value={geo?.long} />
      <Row label="Date" value={format(new Date(location.date), dateFormat)} />

      <ButtonsWrapper>
        <IonButton color="primary">View In Map</IonButton>
        <IonButton color="danger">Close</IonButton>
      </ButtonsWrapper>

      <ImageWrapper>
        <img src={img} alt="Map" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default SingleLocation;
