'use server';

//import MealType from '@/app/meals/[slug]';

export async function shareMeal(formData: FormData)/*: Promise<Response>*/ {
    const meal/*: MealType*/ = {
      //id: formData.get('id') as unknown as number,
      //slug: formData.get('slug') as string,
      title: formData.get('title') as string,
      image: formData.get('image') as string,
      summary: formData.get('summary') as string,
      instructions: formData.get('instructions') as string,
      creator: formData.get('name') as string,
      creator_email: formData.get('email') as string
    };

    return console.log(meal);
  }