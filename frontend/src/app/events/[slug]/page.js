export default function SingleEventPage({params}) {

  return (
    <div>
      <h1>Single Event</h1>
      <h3>{params.slug}</h3>
    </div>
  );
}
