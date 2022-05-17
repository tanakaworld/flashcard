import { Card } from "api";

type Props = {
  cards: Card[];
};

export default function CardTable({ cards }: Props) {
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
        {cards.map(({ id, front, back, createdAt, updatedAt }) => (
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
