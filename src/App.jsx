import AboutSection from "./containers/aboutSection";
import HeroSection from "./containers/heroSection";

import SecuritySection from "./containers/secutitySection";
import SolutionSection from "./containers/solutionsSection";

import "./index.css";
import FaqSection from "./containers/faqSection";
import Footer from "./components/footer";
import CtaSection from "./containers/ctaSection";
import Tablet from "./containers/tablet";
import TabelaUsuarios from "./components/tableDiferenciais";
import DifferenceSection from "./containers/differenceSection";

function App() {
  return (
    <>
      <HeroSection />
      <Tablet />
      <SolutionSection />
      <SecuritySection />
      <AboutSection />

      <DifferenceSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
