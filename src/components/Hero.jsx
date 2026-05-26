import { useRef } from "react";

export default function Hero() {
  const bannerRef = useRef(null);
  const imgRef = useRef(null);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const banner = bannerRef.current;
    if (!banner) return;
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = Math.min(Math.max((y - centerY) / 15, -10), 10);
    const rotateY = Math.min(Math.max((centerX - x) / 8, -30), 30);
    banner.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    if (imgRef.current) imgRef.current.style.transform = "translateZ(20px) scale(1)";
  };

  const handleMouseLeave = () => {
    if (bannerRef.current) bannerRef.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    if (imgRef.current) imgRef.current.style.transform = "translateZ(20px) scale(1)";
  };

  return (
    <section className="hero" id="home" ref={sectionRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero-3d-container">
        <figure className="hero-banner" ref={bannerRef}>
          <picture>
            <source srcSet="./assets/images/hero-banner.png" media="(min-width: 768px)" />
            <source srcSet="./assets/images/hero-banner-md.png" media="(min-width: 500px)" />
            <img ref={imgRef} src="./assets/images/hero-banner-sm.png" alt="its me VILLAN" className="w-100" />
          </picture>
        </figure>
      </div>

      <div className="hero-content">
        <h2 className="h2 hero-title">Software Developer &amp; Problem Solver</h2>
        <a href="#contact" className="btn btn-primary">Get in touch</a>
      </div>

      <ul className="hero-social-list">
        {[
          { href: "https://github.com/villan7667", icon: "logo-github", label: "github" },
          { href: "https://www.instagram.com/villan_766709/", icon: "logo-instagram", label: "instagram" },
          { href: "https://www.linkedin.com/in/ankit-kumar-109a53302/", icon: "logo-linkedin", label: "Linkedin" },
        ].map(({ href, icon, label }) => (
          <li key={label}>
            <a href={href} className="hero-social-link">
              <ion-icon name={icon}></ion-icon>
              <div className="tooltip">{label}</div>
            </a>
          </li>
        ))}
      </ul>

      <a href="#stats" className="scroll-down">Scroll</a>
    </section>
  );
}
