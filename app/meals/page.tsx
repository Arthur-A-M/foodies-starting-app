import { Suspense } from "react";
import Link from "next/link";

import classes from './page.module.css';

import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/functions";


async function MealsComponent() {
  const dbMeals = await getMeals();

  return <MealsGrid meals={dbMeals} />;
}

export default function Meals() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicous meals, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={
            <h1 className={classes.loading}>
              Fetching meals...
            </h1>
          }>
          <MealsComponent />
        </Suspense>
      </main>
    </>
  );
}