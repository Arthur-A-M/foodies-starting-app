import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import classes from './page.module.css';

import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/functions";

/**For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. 
 * Run 'npm i sharp', and Next.js will use it automatically for Image Optimization. */

async function MealsComponent() {
  console.log('fetching meals...');
  const dbMeals = await getMeals();

  return <MealsGrid meals={dbMeals} />;
}

export const metadata: Metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community!',
};

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