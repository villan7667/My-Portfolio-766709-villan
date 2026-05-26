import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_dlw7nhe";
const CONTACT_TEMPLATE_ID = "template_9azrumh";

export default function Contact({ showAlert }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const params = {
      name:     form.name.value,
      email:    form.email.value,
      phone:    form.phone.value,
      message:  form.message.value,
      reply_to: form.email.value,   // lets you Reply directly in Gmail
      to_name:  "Ankit Kumar",      // personalises the email greeting
    };
    emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, params).then(() => {
      showAlert("Thank you! Your message has been sent.");
      form.reset();
    }).catch((err) => {
      showAlert("❌ Failed to send message. Please try again.");
      console.error("Contact Form Error:", err);
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>
        <h2 className="h3 section-title">Have a Project or Idea? Let's Connect!</h2>
        <p className="section-text">
          Whether you're looking to build a website, collaborate on a project, or just want to say hello — I'm
          always open to meaningful conversations. Fill out the form below and I'll get back to you ASAP.
        </p>
        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">
                Govindpur, Dhanbad – 814132<br />Jharkhand, India
              </address>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:9798794759" className="contact-info">(+91)9798794759</a>
            </div>
          </li>
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:hsgf7667@gmail.com" className="contact-info">hsgf7667@gmail.com</a>
              <a href="mailto:hsgf7667@gmail.com" className="contact-info">Get support hsgf7667@gmail.com</a>
            </div>
          </li>
          <li>
            <ul className="contac-social-list">
              {[
                { href: "https://github.com/villan7667", icon: "logo-github", label: "Github" },
                { href: "https://www.instagram.com/villan_766709", icon: "logo-instagram", label: "Instagram" },
                { href: "https://www.linkedin.com/in/ankit-kumar-109a53302/", icon: "logo-linkedin", label: "Linkedin" },
                { href: "tel:9798794759", icon: "logo-whatsapp", label: "whatsapp" },
              ].map(({ href, icon, label }) => (
                <li key={label}>
                  <a href={href} className="contact-social-link">
                    <div className="tooltip">{label}</div>
                    <ion-icon name={icon}></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">Name</label>
          <div className="input-wrapper">
            <input type="text" name="name" id="name" required placeholder="e.g Villan kumar" className="input-field" />
            <ion-icon name="person-circle"></ion-icon>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-wrapper">
            <input type="email" name="email" id="email" required placeholder="e.g Villan@mail.com" className="input-field" />
            <ion-icon name="mail"></ion-icon>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">Phone</label>
          <div className="input-wrapper">
            <input type="tel" name="phone" id="phone" required placeholder="Phone Number" className="input-field" />
            <ion-icon name="call"></ion-icon>
          </div>
        </div>
        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">Message</label>
          <div className="input-wrapper">
            <textarea name="message" id="message" required placeholder="Write message...❤️" className="input-field"></textarea>
            <ion-icon name="chatbubbles"></ion-icon>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}
