import LabelComponent from "../components/label";
import video_img from ".././assets/img/tablet.png";
import "../css/containers/aboutSection.css";
import Container from "./containerDefault";

const Tablet = () => {
  return (
    <section className="about">
      <Container>
        <div className="about__content">
          <img src={video_img} alt="about_img" className="mt-[-250px] z-10" />

        </div>
      </Container>
    </section>
  );
};

export default Tablet;
