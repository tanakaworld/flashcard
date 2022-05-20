import CardTable from "~/components/CardTable";
import CardForm from "~/components/CardForm";

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
