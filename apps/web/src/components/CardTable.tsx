import { Card } from "api";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "~/graphql/query";

export default function CardTable() {
  const { data, loading, error } = useQuery<{ cards: Card[] }>(QUERY_CARDS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Front</th>
          <th>Back</th>
          <th>CreatedAt</th>
          <th>UpdatedAt</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.cards.map(({ id, front, back, createdAt, updatedAt }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{front}</td>
              <td>{back}</td>
              <td>{createdAt}</td>
              <td>{updatedAt}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
