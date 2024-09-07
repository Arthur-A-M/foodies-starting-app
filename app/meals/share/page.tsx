import classes from './page.module.css';

import { ImagePicker } from '@/components';
//import MealType from '@/app/meals/[slug]';

export default function Share(): JSX.Element {
  async function shareMeal(formData: FormData)/*: Promise<Response>*/ {
    'use server';
    
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

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label='Your image' name="image"  />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}