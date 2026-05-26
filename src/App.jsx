import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import CustomAlert from "./components/CustomAlert";
import BackgroundCanvas from "./components/BackgroundCanvas";
import "./styles/style.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark_theme";
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark_theme" ? "light_theme" : "dark_theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const showCustomAlert = (msg) => {
    setAlertMessage(msg);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <>
      <BackgroundCanvas />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <article className="container">
          <Hero />
          <Stats />
          <About showAlert={showCustomAlert} />
          <Skills />
          <Portfolio />
          <Contact showAlert={showCustomAlert} />
        </article>
      </main>
      <Footer />
      <GoTop />
      <CustomAlert message={alertMessage} show={showAlert} />
    </>
  );
}
