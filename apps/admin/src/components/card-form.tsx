import { FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { MUTATION_CREATE_CARD } from "~/graphql/mutation";
import { QUERY_CARDS } from "~/graphql/query";

export default function CardForm() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const [createCard, { loading, error }] = useMutation(MUTATION_CREATE_CARD, {
    refetchQueries: [QUERY_CARDS, "Cards"],
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createCard({ variables: { input: { front, back } } });

    setFront("");
    setBack("");
  };

  return (
    <>
      {error && <p>Error: {error.message} </p>}

      <form onSubmit={onSubmit}>
        <label htmlFor="front">Front</label>
        <input
          id="front"
          type="text"
          onInput={(e) => setFront(e.currentTarget.value)}
          value={front}
          required
        />
        <label htmlFor="back">Back</label>
        <input
          id="back"
          type="text"
          onInput={(e) => setBack(e.currentTarget.value)}
          value={back}
          required
        />
        <input type="submit" value={loading ? "Sending..." : "Submit"} />
      </form>
    </>
  );
}
