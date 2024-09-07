import Image from 'next/image';
import { notFound } from 'next/navigation';

import classes from './page.module.css';
import { getMeal } from '@/functions';


export type MealType = {
  id: number,
  slug: string,
  title: string,
  image: string,
  summary: string,
  instructions: string,
  creator: string,
  creator_email: string
}

export default function Meal({ params }: { params: { slug: string } }): JSX.Element {

  const meal: MealType = getMeal(params.slug) as MealType;

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>
            {meal.title}
          </h1>
          <p>
            by <a href={`mailto:${'EMAIL'}`}> {meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}