import { QUERY_CARDS } from "~/graphql/query";
import CardTable from "~/components/card-table";
import { useQuery } from "@apollo/client";
import CardForm from "~/components/card-form";

export default function Index() {
  const { data, loading, error } = useQuery(QUERY_CARDS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load</p>;
  }

  return (
    <div>
      <h1>Admin</h1>

      <h2>Cards</h2>

      <CardForm />
      <CardTable cards={data.cards} />
    </div>
  );
}
