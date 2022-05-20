import { useState } from "react";
import { Button } from "ui";
import { Card as CardType } from "api";
import Card from "~/components/Card";
import styles from "~/components/CardList.module.css";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "~/graphql/query";

export default function CardList() {
  const [index, setIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);
  const { data, loading, error, refetch } = useQuery<{ cards: CardType[] }>(
    QUERY_CARDS
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Failed to load</p>;
  }

  const { cards } = data;
  const card = cards[index];
  const hasPrev = cards[index - 1];
  const hasNext = cards[index + 1];

  const handlePrev = () => {
    setIndex(index - 1);
    setIsFront(true);
  };
  const handleNext = () => {
    setIndex(index + 1);
    setIsFront(true);
  };
  const handleFlip = () => {
    setIsFront(!isFront);
  };
  const handleReload = async () => {
    await refetch();
  };

  return (
    <>
      <div className={styles.CardListFooter}>
        <Button onClick={handlePrev} disabled={!hasPrev}>
          👈
        </Button>
        <Button onClick={handleFlip}>{isFront ? "🙈" : "🐵"}</Button>
        <Button onClick={handleNext} disabled={!hasNext}>
          👉
        </Button>
      </div>
      {card ? (
        <>
          <Card card={card} isFront={isFront} />
          <div className={styles.CardListSubContent}>
            {index + 1} / {cards.length}
          </div>
        </>
      ) : (
        <>
          <h2>No cards 🤷</h2>

          <Button onClick={handleReload}>Reload</Button>
        </>
      )}
    </>
  );
}
