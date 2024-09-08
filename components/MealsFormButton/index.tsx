'use client';

import { useFormStatus } from "react-dom";

export default function MealsFormButton(): JSX.Element {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Share meal'}
        </button>
    )
}