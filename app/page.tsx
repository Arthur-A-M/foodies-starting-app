import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/meals">View meals</Link></p>
      <p><Link href="/meals/share">Share recipes</Link></p>
      <p><Link href="/community">View community</Link></p>
    </main>
  );
}