import Head from "next/head";
import styles from "~/components/Layout.module.css";

type LayoutProps = {
  children: JSX.Element | JSX.Element[] | string | number;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title} - Flashcards</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main className={styles.Main}>{children}</main>
    </>
  );
}
