import Link from "next/link";

import classes from './page.module.css';

import MealsGrid from "@/components/MealsGrid";

export default function Meals(): JSX.Element {
  return (
    <>
    <header>
      <h1 className={classes.header}>
        Delicous meals, created{' '}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself!</p>
      <p className={classes.cta}>
        <Link href="/meals/meal-1">Share Your Favorite Recipe</Link>
      </p>
    </header>
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Meals
      </h1>
      <MealsGrid meals={[]} />
    </main>
    </>
  );
}