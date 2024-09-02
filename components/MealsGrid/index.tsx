import classes from './index.module.css';

import MealItem from './MealItem';

export default function MealsGrid({meals}: {meals: any[]}) {
    return (
        <ul className={classes.meals}>
            {meals.map ((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}