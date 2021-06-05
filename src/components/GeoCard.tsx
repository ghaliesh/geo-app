import { FC } from "react";
import styled from "styled-components";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #595959;
  padding: 8px 12px;
  margin-bottom: 8px;
  overflow: hidden;
`;

const RowWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  strong {
    font-size: 14px;
    line-height: 17px;
  }

  small {
    font-size: 12px;
    line-height: 15px;
  }
`;

interface IRow {
  label: string;
  value: string | JSX.Element;
}
const Row: FC<IRow> = ({ label, value }): JSX.Element => {
  return (
    <RowWrapper>
      <strong>{label}</strong>
      <small>{value}</small>
    </RowWrapper>
  );
};

interface IGeoCard {
  location: IAPILocation;
}

const GeoCard: React.FC<IGeoCard> = ({ location }): JSX.Element => {
  const address = `${location.country}, ${location.city}`;
  return (
    <Wrapper>
      <Row label="Address" value={address}></Row>
      <Row label="IP" value={location.ip}></Row>
      <Row
        label="Date"
        value={formatDistanceToNow(new Date(location.date))}
      ></Row>
    </Wrapper>
  );
};

export default GeoCard;
