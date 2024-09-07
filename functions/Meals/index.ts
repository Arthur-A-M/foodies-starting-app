import sql from 'better-sqlite3';
import MealType from '@/app/meals/[slug]/page';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000));

    //throw new Error('Something went wrong!');
    return db
        .prepare('SELECT * FROM meals')
        .all();
}

export function getMeal(slug: string) {
return db.prepare('SELECT * FROM meals WHERE slug = @slug').get({ slug });
}