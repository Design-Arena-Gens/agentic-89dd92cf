"use client";

import { FormEvent, useMemo, useState } from "react";
import GreetingCard from "../components/GreetingCard";

const PRESET_NAMES = ["World", "Coder", "Friend", "Explorer"];

export default function HomePage() {
  const [name, setName] = useState("World");
  const [customName, setCustomName] = useState("");

  const suggestions = useMemo(() => {
    const base = PRESET_NAMES.map((preset) => ({
      id: preset.toLowerCase(),
      label: preset,
      value: preset
    }));

    if (customName.trim()) {
      base.unshift({
        id: "custom",
        label: customName.trim(),
        value: customName.trim()
      });
    }

    return base;
  }, [customName]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const selected = formData.get("name");
    if (typeof selected === "string" && selected.trim()) {
      setName(selected.trim());
    }
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__headline">
          <span className="badge">Live Demo</span>
          <h1>Hello!</h1>
          <p>
            Build a personal greeting by picking a persona or entering your own
            name. The card updates instantly, showcasing a simple interactive
            flow.
          </p>
        </div>
        <GreetingCard name={name} />
      </section>

      <section className="form-section">
        <form className="selector" onSubmit={handleSubmit}>
          <label htmlFor="customName" className="input-label">
            Customize the greeting
          </label>
          <input
            id="customName"
            name="customName"
            placeholder="Type a name or mood"
            value={customName}
            onChange={(event) => setCustomName(event.target.value)}
            className="input"
          />

          <fieldset className="option-grid">
            <legend className="option-grid__legend">Pick a preset</legend>
            {suggestions.map((suggestion) => (
              <label
                key={suggestion.id}
                className={`option-card ${suggestion.value === name ? "option-card--active" : ""}`}
              >
                <input
                  type="radio"
                  name="name"
                  value={suggestion.value}
                  defaultChecked={suggestion.value === name}
                />
                <span>{suggestion.label}</span>
              </label>
            ))}
          </fieldset>

          <button type="submit" className="submit-button">
            Update Greeting
          </button>
        </form>
      </section>
    </main>
  );
}
