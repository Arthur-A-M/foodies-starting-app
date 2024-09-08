import fs from 'node:fs';

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

export async function saveMeal(meal: MealType) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}${Date.now()}.${extension}`;

    const stream = fs.createWriteStream(`./public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Error saving image');
        };
    });
    stream.end();

    meal.image = `/images/${fileName}`;
    return db.prepare(`
        INSERT INTO meals 
        (title, summary, instructions, creator, creator_email,image, slug)
        VALUES (
        @title, 
        @summary, 
        @instructions, 
        @creator, 
        @creator_email,
        @image,
        @slug
        )
        `).run(meal);

}