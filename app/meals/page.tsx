import Link from "next/link";

export default function Meals(): JSX.Element {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meals
      </h1>
      <Link href="/meals/meal-1">View meal 1</Link>
      <Link href="/meals/meal-2">View meal 2</Link>
      <Link href="/meals/meal-3">View meal 3</Link>
      <Link href="/meals/share">Share meals</Link>
    </main>
  );
}