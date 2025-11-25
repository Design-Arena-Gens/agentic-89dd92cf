"use client";

type GreetingCardProps = {
  name: string;
};

export default function GreetingCard({ name }: GreetingCardProps) {
  const timeOfDay =
    new Date().getHours() >= 18
      ? "Good evening"
      : new Date().getHours() >= 12
        ? "Good afternoon"
        : "Good morning";

  return (
    <article className="card">
      <div className="card__content">
        <p className="card__eyebrow">{timeOfDay}</p>
        <h2 className="card__title">Hello, {name}!</h2>
        <p className="card__subtitle">
          You are viewing a fully client-driven greeting experience.
        </p>
      </div>
    </article>
  );
}
