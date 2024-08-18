export default function Meal({ params }: { params: { slug: string } }): JSX.Element {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        {params.slug}
      </h1>
    </main>
  );
}