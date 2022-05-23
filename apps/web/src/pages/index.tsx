import CardList from "~/components/CardList";
import Layout from "~/components/Layout";
import styled from "@emotion/styled";

const SContent = styled.div`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Index() {
  return (
    <Layout title="Flashcards">
      <SContent>
        <CardList />
      </SContent>
    </Layout>
  );
}
