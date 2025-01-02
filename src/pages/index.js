import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div>
        <p>Welcome to my Blog!</p>
        <p>
          Check out my{" "}
          <Link href="/first-post">
            first post
          </Link>
        </p>
      </div>
    </>
  );
}
