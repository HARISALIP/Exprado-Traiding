export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="section-heading">
      {eyebrow ? (
        <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2 className={light ? "section-title section-title-light" : "section-title"}>
        {title}
      </h2>
      {description ? (
        <p
          className={
            light
              ? "section-description section-description-light"
              : "section-description"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
