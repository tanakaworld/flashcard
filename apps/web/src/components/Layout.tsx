import Head from "next/head";
import styled from "@emotion/styled";

type LayoutProps = {
  children: JSX.Element | JSX.Element[] | string | number;
  title: string;
};

const SMain = styled.main`
  padding: 2rem;
`;

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title} - Flashcards</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SMain>{children}</SMain>
    </>
  );
}
