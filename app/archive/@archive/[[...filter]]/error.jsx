'use client';

export default function FilterError({ error }) {
  return (
    <div>
      <h2>Error an occured</h2>
      <p>{error.message}</p>
    </div>
  );
}
