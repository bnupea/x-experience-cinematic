"use client";

import { FormEvent, useState } from "react";
import type { SiteCopy } from "@/content/copy";

type ContactProps = {
  copy: SiteCopy["finale"];
  regions: string[];
};

const fieldNames = ["name", "venue", "location", "email", "contact", "message"] as const;

export function Contact({ copy, regions }: ContactProps) {
  const [message, setMessage] = useState("");
  const whatsapp = `https://wa.me/${copy.phone.replace(/\D/g, "")}`;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join("\n");
    const url = `${whatsapp}?text=${encodeURIComponent(`X Experience partnership request\n\n${details}`)}`;
    setMessage(copy.note);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <p className="section-index" data-reveal>06 / {copy.eyebrow}</p>
        <h2 data-reveal>{copy.title}</h2>
        <p className="contact-lead" data-reveal>{copy.body}</p>

        <div className="contact-direct" data-reveal>
          <p className="contact-direct-label">{copy.directTitle}</p>
          <a className="contact-direct-line" href={whatsapp} target="_blank" rel="noreferrer" data-cursor="OPEN">
            <strong>{copy.phoneDisplay}</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-direct-body">{copy.directBody}</p>
        </div>
      </div>

      <form onSubmit={submit} data-reveal>
        <div className="form-heading">
          <span>{copy.formTitle}</span>
          <i aria-hidden="true">X / 2026</i>
        </div>

        <div className="form-grid">
          {copy.fields.map((field, index) => {
            const isMessage = index === 5;
            const isWide = index === 4 || isMessage;

            return (
              <label className={isWide ? "is-wide" : undefined} key={field}>
                <span>
                  <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                  {field}
                  {isMessage ? <em>{copy.optional}</em> : null}
                </span>
                {isMessage ? (
                  <textarea name={fieldNames[index]} rows={3} placeholder={`${field}…`} />
                ) : (
                  <input
                    name={fieldNames[index]}
                    type={index === 3 ? "email" : index === 4 ? "tel" : "text"}
                    autoComplete={index === 0 ? "name" : index === 3 ? "email" : index === 4 ? "tel" : "off"}
                    placeholder={`${field}…`}
                    required
                  />
                )}
              </label>
            );
          })}
        </div>

        <button type="submit" className="form-submit" data-cursor="SEND">
          {copy.submit}<span aria-hidden="true">↗</span>
        </button>
        <p className="form-consent">{copy.consent}</p>
        <p className="form-note" role="status" aria-live="polite">{message}</p>
      </form>

      <div className="contact-coverage" data-reveal>
        <p>{copy.coverageTitle}</p>
        <ul>
          {regions.map((region) => (
            <li key={region}>{region}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
