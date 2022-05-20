import CardList from "~/components/CardList";
import Layout from "~/components/Layout";
import styles from "~/styles/pages/index.module.css";

export default function Index() {
  return (
    <Layout title="Flashcards">
      <div className={styles.Content}>
        <CardList />
      </div>
    </Layout>
  );
}
