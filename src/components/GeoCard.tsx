import { FC } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #595959;;
  padding: 8px 12px;
  margin-bottom: 8px;
`;

const RowWrapper = styled.div`
  display: flex;
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

const GeoCard = (): JSX.Element => {
  return (
    <Wrapper>
      <Row label="Address" value="Syria, Damascus"></Row>
      <Row label="IP" value="182.21.20.1"></Row>
      <Row label="Date" value="Dec 17th 2009"></Row>
    </Wrapper>
  );
};

export default GeoCard;
