import { Card } from "api";
import { useQuery } from "@apollo/client";
import { QUERY_CARDS } from "~/graphql/query";

import { Table } from "ui";

const COLUMNS = ["ID", "Front", "Back", "CreatedAt", "UpdatedAt"];

export default function CardTable() {
  const { data, loading, error } = useQuery<{ cards: Card[] }>(QUERY_CARDS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load</p>;
  }

  const tableData =
    data?.cards.map(({ id, front, back, createdAt, updatedAt }) => [
      id,
      front,
      back,
      createdAt,
      updatedAt,
    ]) || [];
  return <Table columns={COLUMNS} data={tableData} />;
}
