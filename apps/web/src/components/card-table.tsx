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
        </tr>
      </thead>
      <tbody>
        {cards.map(({ id, front, back }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{front}</td>
            <td>{back}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
