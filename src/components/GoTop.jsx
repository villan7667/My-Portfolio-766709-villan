import { useEffect, useState } from "react";

export default function GoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#top" className={`go-top${visible ? " active" : ""}`} title="Go to Top">
      <ion-icon name="arrow-up"></ion-icon>
    </a>
  );
}
