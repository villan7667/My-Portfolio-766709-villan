export default function Stats() {
  const stats = [
    { href: "#skills", icon: "./assets/images/stats-card_icon-1.png", alt: "Badge icon", title: "2+", label: "Years of Experience" },
    { href: "#portfolio", icon: "./assets/images/stats-card_icon-2.png", alt: "Checkmark icon", title: "20+", label: "Completed Projects" },
    { href: "#portfolio", icon: "./assets/images/stats-card_icon-3.png", alt: "Peoples rating icon", title: "15+", label: "Tech Skills Used in Projects" },
  ];

  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        {stats.map(({ href, icon, alt, title, label }) => (
          <li key={label}>
            <a href={href} className="stats-card">
              <div className="card-icon">
                <img src={icon} alt={alt} />
              </div>
              <h2 className="h2 card-title">
                {title} <strong>{label}</strong>
              </h2>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
