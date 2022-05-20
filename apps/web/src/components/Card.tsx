import styles from "~/components/Card.module.css";
import { Card as CardType } from "api";

type CardProps = {
  card: CardType;
  isFront: boolean;
};

export default function Card({ card, isFront }: CardProps) {
  return (
    <div
      className={`${styles.Card} ${
        isFront ? styles.CardFront : styles.CardBack
      }`}
    >
      <span className={styles.CardId}>#{card.id}</span>
      <h2>{isFront ? card.front : card.back}</h2>
    </div>
  );
}
