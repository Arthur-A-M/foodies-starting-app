'use client';

export default function Error({error}: {error: Error}): JSX.Element {
    return (
        <main className="error">
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                {error.message}
            </h1>
        </main>
    );
}