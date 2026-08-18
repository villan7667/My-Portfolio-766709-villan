const projects = [
  { href: "https://digital-identity-7667.netlify.app/", img: "/assets/images/Identity.png", title: "My Digital-Identity", date: "May 2026", datetime: "2026-06" },

  { href: "https://skygame7667villan.netlify.app/", img: "./assets/images/skygame.png", title: "Arcade game", date: "Jun 2026", datetime: "2026-06" },

  { href: "https://memory-match-game-7667.netlify.app/", img: "./assets/images/memory-game.png", title: "Memory Test Game", date: "April 2022", datetime: "2026-05" },

  { href: "https://food-villan-7667.netlify.app/", img: "./assets/images/project-2.png", title: "Omni food", date: "Jun 2022", datetime: "2022-15" },

  { href: "https://secrets-villanat7667.onrender.com/", img: "./assets/images/project-3.png", title: "secret message app", date: "Oct 2022", datetime: "2022-19" },

  { href: "https://sharing-app-q4i6.onrender.com/", img: "./assets/images/project-4.png", title: "Sharing App", date: "Feb 2023", datetime: "2023-04" },

  { href: "https://ai-powered-notebook-villan7667.onrender.com", img: "./assets/images/project-5.png", title: "AI Powered notbook", date: "Aug 2023", datetime: "2023-16" },

  { href: "https://explore-jharkhand.onrender.com/", img: "./assets/images/project-6.png", title: "Explore Jharkhand", date: "Dec 2024", datetime: "2023-20" },

  { href: "https://db-todo-hl2c.onrender.com/", img: "./assets/images/project-7.png", title: "Task Master", date: "May 2024", datetime: "2023-25" },

  { href: "https://cobra7667villan.netlify.app/", img: "./assets/images/project-8.png", title: "Cobra Snake Game", date: "May 2025", datetime: "2025-26" },

  { href: "https://ai-java-code-reviewer.onrender.com/", img: "./assets/images/project-9.png", title: "Sharing App", date: "July 2026", datetime: "2026-07" },

];

export default function Portfolio() {
  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>
            <h2 className="h3 section-title">Check Out Some of My Real-World Projects</h2>
            <p className="section-text">
              I build modern, fully functional web applications with clean UI, secure backend, and responsive design.
              Every project is optimized for performance and scalability — whether it's a client-based product, or a
              full stack platform. My code is well-documented, reusable, and designed to make both developers and
              users happy.
            </p>
          </div>
        </li>
        {projects.map(({ href, img, title, date, datetime }) => (
          <li key={title}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="project-card">
              <figure className="card-banner">
                <img src={img} className="w-100" alt={title} />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">{title}</h3>
                <time className="publish-date" dateTime={datetime}>{date}</time>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
