import classes from './loading.module.css';

export default function MealsLoading(): JSX.Element {
    return (
        <main>
            <h1 className={classes.loading}>
                Fetching meals...
            </h1>
        </main>
    );
}