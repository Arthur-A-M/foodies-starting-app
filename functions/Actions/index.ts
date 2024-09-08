'use server';

import { saveMeal } from '@/functions';
import { redirect } from 'next/navigation';

//import type { MealType } from '@/types';

function isValidText(text: string) {
  return (!text || text.trim() !== '');
}

export async function shareMeal(formData: FormData)/*: Promise<Response>*/ {
  const meal/*: MealType*/ = {
    //id: formData.get('id') as unknown as number,
    //slug: formData.get('slug') as string,
    title: formData.get('title') as string,
    image: formData.get('image') as any,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string
  };

  if (
    !isValidText(meal.title) ||
    !isValidText(meal.summary) ||
    !isValidText(meal.instructions) ||
    !isValidText(meal.creator) ||
    !isValidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || (meal.image instanceof File && meal.image.size === 0)
  ) {
    throw new Error('Invalid input');
  }

  await saveMeal(meal);
  redirect('/meals'); // should go within try catch block
}