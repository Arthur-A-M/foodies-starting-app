import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import type { MealType } from '@/types';

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

export function saveMeal(meal: MealType) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
    /*
    meal.summary = xss(meal.summary);
    meal.title = xss(meal.title);
    meal.creator = xss(meal.creator);
    meal.creator_email = xss(meal.creator_email);
    meal.image = xss(meal.image);
    */

}