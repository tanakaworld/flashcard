import styled from "@emotion/styled";
import { Card as CardType } from "api";

type Props = {
  card: CardType;
  isFront: boolean;
};

const SCard = styled.div`
  width: 100%;
  border: solid 2px var(--primary);
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  position: relative;
  ${(props: Props) =>
    props.isFront
      ? {
          color: "var(--primary)",
          backgroundColor: "var(--secondary)",
        }
      : {
          color: "var(--secondary)",
          backgroundColor: "var(--primary)",
        }}
`;

const SCardId = styled.span`
  position: absolute;
  left: 8px;
  top: 8px;
`;

export default function Card(props: Props) {
  const { card, isFront } = props;
  return (
    <SCard {...props}>
      <SCardId>#{card.id}</SCardId>
      <h2>{isFront ? card.front : card.back}</h2>
    </SCard>
  );
}
