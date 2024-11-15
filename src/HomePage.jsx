import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import AboutUs from "./components/AboutUs";
import "./index.css";
import OurCourses from "./components/OurCourses";
import LeadMagnet from "./components/LeadMagnet";

const HomePage = () => {

  return (
      <>
        <Hero />
        <Advantages />
        <AboutUs />
        <OurCourses />
        <LeadMagnet />
      </>
  )
}

export default HomePage;
