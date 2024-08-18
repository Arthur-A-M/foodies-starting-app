import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/meals">View meals</Link>
    </main>
  );
}