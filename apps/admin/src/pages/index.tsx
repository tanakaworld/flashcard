import CardTable from "~/components/card-table";
import CardForm from "~/components/card-form";

export default function Index() {
  return (
    <div>
      <h1>Admin</h1>

      <h2>Cards</h2>

      <CardForm />
      <CardTable />
    </div>
  );
}
