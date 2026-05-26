import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_dlw7nhe";
const HIRE_TEMPLATE_ID = "template_td5ciyn";

export default function About({ showAlert }) {
  const [modalOpen, setModalOpen] = useState(false);
  const bannerRef = useRef(null);
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = bannerRef.current?.querySelector("img");
    const banner = bannerRef.current;
    if (!img || !banner) return;
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = Math.min(Math.max((y - centerY) / 15, -20), 20);
    const rotateY = Math.min(Math.max((centerX - x) / 12, -30), 30);
    img.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const img = bannerRef.current?.querySelector("img");
    if (img) img.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  const handleHireSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const params = {
      name:     form.hireName.value,
      email:    form.hireEmail.value,
      message:  form.hireMessage.value,
      reply_to: form.hireEmail.value,   // lets you Reply directly in Gmail
      to_name:  "Ankit Kumar",          // personalises the email greeting
    };
    emailjs.send(SERVICE_ID, HIRE_TEMPLATE_ID, params).then(() => {
      showAlert("Thank you! I'll connect with you soon.");
      form.reset();
      setModalOpen(false);
    }).catch((err) => {
      showAlert("❌ Failed to send message. Please try again.");
      console.error(err);
    });
  };

  return (
    <section
      className="about"
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="about-banner" ref={bannerRef}>
        <img src="./assets/images/about-banner.png" alt="Ankit Kumar Portfolio Banner" className="w-100" />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About Me</p>
        <h2 className="h3 section-title">Looking for a Full Stack Developer? I'm Ready to Help!</h2>
        <p className="section-text">
          Hi, I'm <strong>Ankit Kumar</strong> — a passionate Full Stack Web Developer with hands-on experience
          building real-world web applications. I've been creating modern, responsive, and secure websites for over
          two years, both through academic projects and freelance work. My core skills include{" "}
          <strong>JavaScript, React, Node.js, MongoDB, Python</strong> and more. I specialize in turning ideas into
          user-friendly, scalable digital solutions. I love learning new tools, working on challenging problems, and
          pushing creative boundaries with every project.
        </p>
        <div className="btn-group">
          <button className="btn btn-secondary" id="hireMeBtn" onClick={() => setModalOpen(true)}>
            Hire Me
          </button>
          <a
            className="btn btn-primary"
            href="https://drive.google.com/file/d/1lSMbhCKUXxkNZ3HclHTNlpXXSHt7Pahg/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Hire Me Modal */}
      {modalOpen && (
        <div
          id="hireMeModal"
          className="modal"
          style={{ display: "flex" }}
          onClick={(e) => { if (e.target.id === "hireMeModal") setModalOpen(false); }}
        >
          <div className="modal-content">
            <span className="close-btn" id="closeHireMe" onClick={() => setModalOpen(false)}>&times;</span>
            <h3 className="modal-title">Hire Me</h3>
            <form id="hireMeForm" onSubmit={handleHireSubmit}>
              <div className="form-group">
                <label htmlFor="hireName">Name</label>
                <input type="text" id="hireName" name="hireName" required />
              </div>
              <div className="form-group">
                <label htmlFor="hireEmail">Email</label>
                <input type="email" id="hireEmail" name="hireEmail" required />
              </div>
              <div className="form-group">
                <label htmlFor="hireMessage">Message</label>
                <textarea id="hireMessage" name="hireMessage" rows="3" required></textarea>
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary" id="cancelHireMe" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
